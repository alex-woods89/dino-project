<template>
  <div id="app">
      <nav>
        <ul>
          <li><a href="#dino-list">Explore Dinos</a></li>
          <li> <a href="#fav-list">Favourite Dinos</a></li>
        </ul>
      </nav>
      <h3>Apposaurus</h3>
      <br>
      <br>
    <build-your-dino></build-your-dino>
    <br>
    <favourite-list id="fav-list" :favourites="favourites"></favourite-list>
    <br>
    <dino-detail v-if="selectedDinosaur" :dinosaur="selectedDinosaur"></dino-detail>
    <br>
    <dinosaur-list id="dino-list" :dinosaurs="filteredDinosaurs"></dinosaur-list>
  </div>
</template>

<script>
import DinoList from './components/DinoList'
import FavouriteList from './components/FavouriteList'
import DinoDetail from './components/DinoDetail'
import DinoService from './Services/DinoService'
import BuildYourDino from './components/BuildYourDino'
import {eventBus} from './main'

export default {
  name: "app",
   data(){
     return {
       favourites: [],
       selectedDinosaur: null,
       dinosaurs: [],
       searchTerm: ""
     }
   },
   components: {
     "dinosaur-list": DinoList,
     "favourite-list": FavouriteList,
     "dino-detail": DinoDetail,
     "build-your-dino": BuildYourDino
   },
   computed: {
     filteredDinosaurs: function () {
       if (!this.searchTerm.length) return this.dinosaurs;
       return this.dinosaurs
       .filter(dinosaur => dinosaur.toLowerCase()
       .includes(this.searchTerm.toLowerCase()));
     }
   },
    mounted(){
      fetch('http://localhost:3000/api/dinosaurs')
      .then(res => res.json())
      .then(dinosaurs => this.dinosaurs = dinosaurs);

      eventBus.$on("favourite-removed", id => {
        DinoService.deleteFavoriteDinosaur(id)
        .then(() => {
          const index = this.favourites.findIndex(favourite => favourite._id === id)
          this.favourites.splice(index, 1)

        })
      })

      eventBus.$on("favourite-added", (favourite) => {
        DinoService.postFavoriteDinosaur(favourite)
        .then(resFavourite => {
          this.favourites.push(resFavourite)
        })
      });

      eventBus.$on('dinosaur-selected', dinosaur => this.displayDinoDetail(dinosaur));

      eventBus.$on('dino-searched', searchTerm => this.searchTerm = searchTerm)

      DinoService.getFavoriteDinosaurs()
      .then(favourites => this.favourites = favourites);

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
  color:white;
  background-color: rgba(255, 255, 255, 0.3);
  background-image: url("../public/dino-background-copy.jpg");
   background-attachment: fixed;
  /* background-color: antiquewhite; */
}
li {
  list-style-type: none;
}

nav li {
  display: inline;
  margin-right: 10px;
}



h3 {
  display: inline;
  margin-right: 60px;
}

#dino-list {
  margin-top: 50px;
}
</style>
