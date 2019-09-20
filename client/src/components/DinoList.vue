<template>
  <div>
      <ul>
          <list-item v-for="(dinosaur, index) in dinosaurs" :dinosaur="dinosaur" :key="index"></list-item>
      </ul>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: "dino-list",
  props: ["dinosaurs"],
  components: {
      "list-item": ListItem
  }
}
</script>

<style>

</style>