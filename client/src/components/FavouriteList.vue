<template>
<div>

  <h2>Your Favourite Dinos</h2>
  <br>
  <br>
  <fav-list-item
  v-for="(favourite, index) in favourites" :favourite="favourite" :key="index">
  </fav-list-item>

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

</style>
