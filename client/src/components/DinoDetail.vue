<template>
  <div>
    <p>test</p>
      <h3>{{dinosaur}}</h3>
      <li v-on:click="getDinoDetail">{{dinosaur}}</li>

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
        },
        getDinoDetail: function() {
          eventBus.$emit('dino-detail', this.dinosaur)
        }
    }

}
</script>

<style>

</style>
