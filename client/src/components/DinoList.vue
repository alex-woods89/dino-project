<template>
  <div class="">
      <h3>All the dinosaurs</h3>
      <div class="grid">
          <list-item v-for="(dinosaur, index) in dinosaurs" :dinosaur="dinosaur" :key="index"></list-item>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main'
import ListItem from './ListItem'
import DinoDetail from './DinoDetail'

export default {
  name: "dino-list",
  props: ["dinosaurs"],
  components: {
      "list-item": ListItem,
      "dino-detail": DinoDetail
  }
}
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}



</style>
