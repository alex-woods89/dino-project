<template>
  <fav-list-item 
  v-for="favourite in favourites" 
  :favourite="favourite" 
  :key="favourite.id">
  </fav-list-item>
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