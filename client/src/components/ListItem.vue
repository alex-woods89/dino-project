<template>
  <div class="grid-item">
    <p v-on:click="handleClick">{{dinosaur}}</p>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
   name: "list-item",
   props: ['dinosaur'],
   methods: {
       handleClick(){
           eventBus.$emit('dinosaur-selected', this.dinosaur)
       }
   }
}
</script>

<style>
.grid-item {
  width: 30%;
  background-color: green;
  margin-bottom: 20px;
  padding: 25px;
}
</style>
