<template>
  <div id="app">
    <h3>Apposaurus</h3>
    <dino-detail v-if="selectedDinosaur" :dinosaur="selectedDinosaur"></dino-detail>
    <dinosaur-list :dinosaurs="dinosaurs"></dinosaur-list>
    <favourite-list :favourites="favourites"></favourite-list>
  </div>
</template>

<script>
import DinoList from './components/DinoList'
import FavouriteList from './components/FavouriteList'
import DinoDetail from './components/DinoDetail'
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
      fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(dinosaurs => this.dinosaurs = dinosaurs);

      // fetch('http://localhost:3000/dinosaur')
      // .then(res => res.json())
      // .then(dinosaur => this.dinosaur = dinosaur);

      eventBus.$on("favourite-removed", dinosaur => this.removeFavourite(dinosaur))
      eventBus.$on("favourite-added", dinosaur => this.addFavourite(dinosaur))
      eventBus.$on('dinosaur-selected', dinosaur => (this.selectedDinosaur = dinosaur))
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
       const idOfFavourites = (this.favourites.map(favourite => favourite.id))
       if (!this.isDinosaurAFavourite(dinosaur)) this.favourites.push(dinosaur)
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
</style>
