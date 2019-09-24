<template lang="html">
  <form v-on:submit.prevent class="">
    <input type="text" v-model="search" placeholder="Search For a Dino" v-on:keyup="SearchForDino">
    <button type="submit" v-on:click="handleClick" v-model="selectedDinosaur">Search</button>
  </form>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: "dino-search",
  data(){
    return {
      "search": "",
      "selectedDinosaur": {}
    }
  },
  props: ["dinosaurs"],
  methods: {
    SearchForDino(){
      let foundDino = this.dinosaurs.find((dinosaur) => {
        return dinosaur.name.indexOf(this.search) > -1
      })
      this.selectedDinosaur = foundDino
      eventBus.$emit('dino-searched', this.selectedDinosaur)
    },
    handleClick(){
      this.search = ""
      eventBus.$emit('dino-searched', this.selectedDinosaur)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
