<template>

  <li>
      {{favourite.name}}  
      <button v-on:click="removeFavourite">Remove Favourite</button>
  </li>

</template>

<script>
import {eventBus} from '../main'

export default {
props: ["favourite"],
  methods: {
      removeFavourite: function(){
          eventBus.$emit("favourite-removed", this.dinosaur)
      }
  }
}

</script>

<style>

</style>
