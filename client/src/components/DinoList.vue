<template>
  <div>
  
      <h3>All the dinosaurs</h3>
      <ul>
          <list-item v-for="(dinosaur, index) in dinosaurs" :dinosaur="dinosaur" :key="index"></list-item>
      </ul>
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

</style>
