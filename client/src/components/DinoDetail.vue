<template>
  <div>
      <h3>(dinosaur.name}}</h3>
      <li>{{dinosaur.diet}}</li>
  </div>
</template>

<script>
export default {
    name: 'dinosaur-detail',
    props: ['dinosaur']

}
</script>

<style>

</style>