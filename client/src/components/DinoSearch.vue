<template lang="html">
  <form v-on:submit.prevent class="">
    <input type="text" v-model="search" placeholder="Search For a Dino">
  </form>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: "dino-search",
  data(){
    return {
      search: ""
    }
  },
  watch: {
    search: function (val) {
      this.searchForDino();
    }
  },
  methods: {
    searchForDino(){
      eventBus.$emit('dino-searched', this.search)
    },
  }
}
</script>

<style lang="css" scoped>
input
{
  font-size:20px;
}
</style>
