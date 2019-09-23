<template>
<div>
  <h3>Your favourite dinosaurs</h3>
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