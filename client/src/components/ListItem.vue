<template>
  <div class="grid-item">
    <h3 v-on:click="handleClick">{{dinosaur}}</h3>
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
  width: 12%;
  background-color: #ffad33;
  margin: 20px;
  padding: 25px;
  border-radius: 8px;
  color: white;
  box-shadow: 3px 3px #888;
  cursor: pointer;
  font-size: 1.2vw;
}
</style>
