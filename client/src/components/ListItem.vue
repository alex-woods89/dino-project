<template>
  <li v-oon:click="handleClick">{{dinosaur}}</li>
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

</style>