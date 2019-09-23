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
          eventBus.$emit("favourite-removed", this.favourite._id)
      }
  }
}

</script>

<style>
li {
  padding: 10px;
}

button {
  background-color: #ffad33;
  box-shadow: 3px 3px #888;
  border-radius: 10px;
  color: white;
}
</style>
