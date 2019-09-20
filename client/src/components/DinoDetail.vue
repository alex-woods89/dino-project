<template>
  <div>
      <h3>(dinosaur.name}}</h3>
      <li>{{dinosaur.diet}}</li>

      <button v-on:click="addFavourite"> Add to Favourites</button>
  </div>
</template>

<script>
export default {
    name: 'dinosaur-detail',
    props: ['dinosaur'],
    methods: {
        addFavourite: function(){
            eventBus.$emit('favourite-added', this.dinosaur)
        }
    }

}
</script>

<style>

</style>