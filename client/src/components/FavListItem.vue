<template>
 
  <li>
      {{favourite}}  
      <button v-in:click="removeFavourite">Remove Favourite</button>
  </li>
  
</template>

<script>
import {eventBus} from '../main'

export default {
props: ["favourite"],
  methods: {
      removeFavourite: function(){
          eventBus.$emit("favourite-removed", this.beer)
      }
  }
}

</script>

<style>

</style>