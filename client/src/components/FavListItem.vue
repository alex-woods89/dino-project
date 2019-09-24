<template>

  <div class="favourite-item">
    <li v-on:click="handleClick"> {{favourite.name}} </li>
    <img :src="favourite.pics[0].url" height="50">
  <li>
      <button v-on:click="removeFavourite">Delete Favourite</button>
  </li>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
props: ["favourite"],

  methods: {
      removeFavourite: function(){
          eventBus.$emit("favourite-removed", this.favourite._id)
      },
      handleClick(){
          eventBus.$emit('dinosaur-selected', this.favourite.name)
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
  font-size: 125%
}

.favourite-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  font-size: 150%;
}
</style>
