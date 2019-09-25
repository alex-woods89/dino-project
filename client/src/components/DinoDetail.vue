<template>
  <div>
    <img :src="dinosaur.pics[0].url" height="250">
    <li>
      <h2>{{dinosaur.name}}</h2>
    </li>
    <li v-if="dinosaur.eats">Diet: {{dinosaur.eats}}</li>
    <li>Period: {{dinosaur.period}}</li>
    <li>Region: {{dinosaur.regions[0]}}</li>
    <br>
    <button id="button" v-on:click="addFavourite">Add to Favourites</button>
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

<style scoped>
li {
  font-weight: bold
}

#button {
  background-color: #ffad33;
  box-shadow: 3px 3px #888;
  border-radius: 10px;
  color: white;
  font-size: 125%
}
</style>
