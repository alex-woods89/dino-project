<template>
  <div id="app">
    <!-- <img src="../public/dino-background.jpg" alt=""> -->
    <h3>Apposaurus</h3>
    <favourite-list :favourites="favourites"></favourite-list>
    <dino-detail v-if="selectedDinosaur" :dinosaur="selectedDinosaur"></dino-detail>
    <dinosaur-list :dinosaurs="dinosaurs"></dinosaur-list>
  </div>
</template>

<script>
import DinoList from './components/DinoList'
import FavouriteList from './components/FavouriteList'
import DinoDetail from './components/DinoDetail'
import DinoService from './Services/DinoService'
import {eventBus} from './main'


export default {
  name: "app",
   data(){
     return {
       favourites: [],
       selectedDinosaur: null,
       dinosaurs: []
     }
   },
   components: {
     "dinosaur-list": DinoList,
     "favourite-list": FavouriteList,
     "dino-detail": DinoDetail
    },
    mounted(){
      fetch('http://localhost:3000/api/dinosaurs')
      .then(res => res.json())
      .then(dinosaurs => this.dinosaurs = dinosaurs);

      eventBus.$on("favourite-removed", id => {
        DinoService.deleteFavoriteDinosaur(id)
        const index = this.favourites.indexOf(favourite => favourite.id === id)
        this.favourites.splice(index, 1);
      })

      eventBus.$on("favourite-added", (favourite) => {
        DinoService.postFavoriteDinosaur(favourite)
        .then(resFavourite => {
          console.log(resFavourite)
          this.favourites.push(favourite.name)
        })
      });

      eventBus.$on('dinosaur-selected', dinosaur => this.displayDinoDetail(dinosaur))

      DinoService.getFavoriteDinosaurs()
      .then(favourites => this.favourites = favourites)
    },
    methods: {
      removeFavourite: function(dinosaur) {
        const index = this.favourites.indexOf(dinosaur)
        this.favourites.splice(index, 1)
      },
            isDinosaurAFavourite: function(dinosaur){
       const idOfFavourites = (this.favourites.map(favourite => favourite.id))
       return idOfFavourites.includes(dinosaur.id)
       },
            addFavourite: function(dinosaur){
      this.favourites.push(dinosaur)
     },
     displayDinoDetail: function(dinosaurName){
       fetch(`http://localhost:3000/api/dinosaurs/${dinosaurName}`)
       .then(res => res.json())
       .then(dinosaur => this.selectedDinosaur = dinosaur);
     }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  opacity: 0.5;
  width: 100%;
}
</style>
