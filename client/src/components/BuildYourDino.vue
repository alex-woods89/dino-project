<template lang="html">
  <div class="">
   <h2>Build Your Dino</h2>
  <form class="">
    <div class="form-row">
      <div class="form-col">
        <label for="dino-name">Dino Name</label>
      </div>
      <div class="form-col">
        <input v-model="name" >
      </div>
          <div class="form-row">
      <div class="form-col">
        <label for="dino-color">Dino Colour</label>
      </div>
      <div class="form-col">
        <select class="" v-model="color">
          <option value="">What colour is your Dino?</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>
      </div>
      <h2>Is your Dino bigger than a house?</h2>
    <label for="dino-house">Yes</label>
    <input type="radio" id = "yes" name="house" value="bigger" v-model="selected">
    <label for="dino-house">No</label>
    <input type="radio" id ="no" name="house" value="smaller" v-model="selected">
    </div>
        <div class="form-row">
      <div class="form-col">
        <label for="dino-live">Dino Home</label>
      </div>
      <div class="form-col">
        <select v-model="live">
          <option value="">Where does your Dino live?</option>
          <option value="Cave">Cave</option>
          <option value="Forest">Forest</option>
          <option value="Bunker">Bunker</option>
          <option value="The Moon">The Moon</option>
        </select>
      </div>
          <div class="form-row">
      <div class="form-col">
        <h2>Can your Dino fly?</h2>
      </div>
          <label for="dino-fly">Yes</label>
          <input type="radio" id = "yes" name="fly" value="fly" v-model="picked">
      <label for="dino-fly">No</label>
      <input type="radio" id ="no" name="fly" value="not fly" v-model="picked">
    </div>
    <br>
    <div class="form-row">
      <div class="form-col">
        <label for="dino-food">Dino Food</label>
      </div>
      <div class="form-col">
        <select v-model="food">
          <option value="">What does your Dino eat?</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Other Dinos">Other Dinos</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Jeremy Corbyn">Jeremy Corbyn</option>
        </select>
      </div>
    </div>


    
    </div>

      
    </div>


    
  </form>

  <p>{{name}} is a {{color}} dinosaur.
    {{name}} is {{selected}} than a HOUSE and lives in a {{live}}.
    {{name}}  can {{picked}} and likes to eat {{food}}.
    We luv {{name}} the dinosaur.
  </p>
</div>
</template>
<script>
export default {
  name: 'build-your-dino',
  data(){
    return {
      name: "",
      food: "",
      live: "",
      color: "",
      picked: "",
      selected: ""

    }
  }
}

</script>
<style lang="css" scoped>
  h2 {
    font-size: 20px;
  }
  .form-row {
    width: 100%;
  }
  /* .form-col {
    display: inline;
  }
  input, label {
    width: 50%;
  } */
</style>
