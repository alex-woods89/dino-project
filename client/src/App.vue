<template>
  <div id="app">
    <h3>Apposaurus</h3>
  </div>
</template>

<script>
import DinoList from './components/DinoList'
import FavouriteList from './components/FavouriteList'

export default {
  name: "app",
   data(){
     return {
       favourites: [],
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
