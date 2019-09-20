<template>
  <div id="app">
    <h3>Apposaurus</h3>
    <dinosaur-list :dinosaurs="dinosaurs"></dinosaur-list>
    <favourite-list :favourites="favourites"></favourite-list>
  </div>
</template>

<script>
import DinoList from './components/DinoList'
import FavouriteList from './components/FavouriteList'
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
     "favourite-list": FavouriteList
    },
    mounted(){
      fetch('http://localhost:3000/dinosaurs')
      .then(res => res.json())
      .then(dinosaurs => this.dinosaurs = dinosaurs)

      eventBus.$on("favourite-removed", dinosaur => this.removeFavourite(dinosaur))
      eventBus.$on("favourite-added", dinosaur => this.addFavourite(dinosaur))
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
