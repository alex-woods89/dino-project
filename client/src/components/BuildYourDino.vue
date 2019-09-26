<template lang="html">

  <div class="div-wrapper">
    <div>
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
            <label for="dino-color">What colour is {{name}}?</label>
          </div>
          <div class="form-col">
            <select class="" v-model="color">
              <option value="">Choose a Color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>              
            </select>
          </div>
        </div>

        <br>

        <div class="form-row">
          <label >Is {{name}} bigger than a house? </label>
          <label for="dino-house"> Yes </label>
          <input type="radio" id = "yes" name="house" value="bigger" v-model="selected">
          <label for="dino-house"> No </label>
          <input type="radio" id ="no" name="house" value="smaller" v-model="selected">
        </div>

        <br>

        <div class="form-row">
          <div class="form-col">
            <label for="dino-live">Where does {{name}} live?</label>
          </div>
          <div class="form-col">
            <select v-model="live">
              <option value="">Choose a Home</option>
              <option value="cave">Cave</option>
              <option value="forest">Forest</option>
              <option value="bunker">Bunker</option>
              <option value="van">Van</option>
            </select>
          </div>
        </div>

        <br>

        <div class="form-row">
          <label >Can {{name}} fly? </label>
          <label for="dino-fly"> Yes </label>
          <input type="radio" id = "yes" name="fly" value="can fly" v-model="picked">
          <label for="dino-fly"> No </label>
          <input type="radio" id ="no" name="fly" value="cannot fly" v-model="picked">
        </div>

        <br>

        <div class="form-row">
          <div class="form-col">
            <label for="dino-food">What does {{name}} eat?</label>
          </div>
          <div class="form-col">
            <select v-model="food">
              <option value="">Choose a Food</option>
              <option value="vegetables">Vegetables</option>
              <option value="other dinos">Other Dinos</option>
              <option value="ice cream">Ice Cream</option>
              <option value="porridge">Porridge</option>
            </select>
          </div>
        </div>

      </form>
    </div>
    <div class="story">
      <h2>The Story of {{name}} the Dinosaur</h2>
      <p>{{name}} is a {{color}} dinosaur.</p>
      <p>{{name}} is {{selected}} than a house and lives in a {{live}}.</p>
      <p>{{name}} {{picked}} and likes to eat {{food}} on Thursdays.</p>
      <p><strong>We luv {{name}} the dinosaur.</strong></p>
    </p>
  </div>

</div>
</template>
<script>
export default {
  name: 'build-your-dino',
  data(){
    return {
      name: "Deeno",
      food: "chocolate",
      live: "village",
      color: "pink",
      picked: "cannot fly",
      selected: "smaller"

    }
  }
}

</script>
<style lang="css" scoped>
dino-header {
  width:100%;
}
h2 {
  font-size: 150%;
}
.form-row {
  width: 100%;
}

.div-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
}
.story {
  width: 30%;
  padding: 20px;
}

.story h2 {
  font-size: 150%;
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
