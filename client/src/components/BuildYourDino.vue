<template lang="html">

  <div class="div-wrapper">
    <div>
      <h2>Build Your Dino</h2>
      <form class="form">
        <div class="form-row">
          <div class="form-col">
            <label for="dino-name">What's your Dino's Name?</label>
          </div>
          <div class="form-col">
            <input v-model="name">
          </div>
        </div>

        <br>

        <div class="form-row">
          <div class="form-col">
            <label for="dino-color">What's your Dino's Colour</label>
          </div>
          <div class="form-col">
            <select class="" v-model="color">
              <option value="">Choose a Color</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
        </div>

        <br>

        <div class="form-row">
          <label >Is your Dino bigger than a house?  </label>
          <label for="dino-house">Yes</label>
          <input type="radio" id = "yes" name="house" value="bigger" v-model="selected">
          <label for="dino-house">No</label>
          <input type="radio" id ="no" name="house" value="smaller" v-model="selected">
        </div>

        <br>

        <div class="form-row">
          <div class="form-col">
            <label for="dino-live">Where is Your Dino's Home</label>
          </div>
          <div class="form-col">
            <select v-model="live">
              <option value="">Choose a Home</option>
              <option value="Cave">Cave</option>
              <option value="Forest">Forest</option>
              <option value="Bunker">Bunker</option>
              <option value="The Moon">The Moon</option>
            </select>
          </div>
        </div>

        <br>

        <div class="form-row">
          <label >Can your Dino fly?   </label>
          <label for="dino-fly">Yes</label>
          <input type="radio" id = "yes" name="fly" value="fly" v-model="picked">
          <label for="dino-fly">No</label>
          <input type="radio" id ="no" name="fly" value="not fly" v-model="picked">
        </div>

        <br>

        <div class="form-row">
          <div class="form-col">
            <label for="dino-food">What does your Dino eat?</label>
          </div>
          <div class="form-col">
            <select v-model="food">
              <option value="">Choose a Food</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Other Dinos">Other Dinos</option>
              <option value="Ice Cream">Ice Cream</option>
              <option value="Porridge">Porridge</option>
            </select>
          </div>
        </div>

      </form>
    </div>
    <div class="story">
      <p>{{name}} is a {{color}} dinosaur.
      {{name}} is {{selected}} than a HOUSE and lives in a {{live}}.
      {{name}}  can {{picked}} and likes to eat {{food}}.
      We luv {{name}} the dinosaur.
      </p>
    </div>

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

  .div-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center
  }
  .story {
    width: 30%;
    padding: 20px;
    margin-top: 40px;
  }

  .form {
    padding: 20px;
  }

  p{
    font-size: 20px;
  }
  /* .form-col {
    display: inline;
  }
  input, label {
    width: 50%;
  } */
</style>
