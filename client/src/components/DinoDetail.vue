<template>
  <div>
    <p>test</p>
      <h3>{{dinosaur}}</h3>
      <li>{{dinosaur}}</li>

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
