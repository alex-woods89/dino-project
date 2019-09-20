<template>
  <fav-list-item>
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