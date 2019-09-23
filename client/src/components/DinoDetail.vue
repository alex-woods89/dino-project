<template>
  <div>
      <h3>{{dinosaur.name}}</h3>
      <li v-if="dinosaur.eats">{{dinosaur.eats}}</li>
      <li>{{dinosaur.period}}</li>
      <li>{{dinosaur.regions[0]}}</li>
      <img :src="dinosaur.pics[0].url" height="250">
      <br>
      <button v-on:click="addFavourite">Add to Favourites</button>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    name: 'dinosaur-detail',
    props: ['dinosaur'],
    methods: {
        addFavourite: function(){
            eventBus.$emit('favourite-added', this.dinosaur)
        }
    }

}
</script>

<style>

</style>
