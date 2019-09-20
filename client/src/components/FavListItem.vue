<template>
  <li>
      {{dinosaur.name}}  
  </li>
</template>

<script>
import {eventBus} from '../main'

export default {
props: ["favourite"],
}

</script>

<style>

</style>