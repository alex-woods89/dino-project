<template>
  <li>
      {{favourite}}  
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