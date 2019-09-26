<template>
<div>
  <h2>Your Favourite Dinos</h2>
  <br>
  <br>
  <fav-list-item
  v-for="(favourite, index) in favourites" :favourite="favourite" :key="index">
  </fav-list-item>
<p id="build-your-dino"></p>
</div>
</template>

<script>
import FavListItem from './FavListItem'

export default {
  props:["favourites"],
  components: {
    "fav-list-item": FavListItem
  }
}
</script>

<style>
#build-your-dino{

  padding-bottom:90px;
}

</style>
