<template lang="html">
  <form class="">
    <div class="form-row">
      <div class="form-col">
        <label for="dino-name">Dino Name</label>
      </div>
      <div class="form-col">
        <input type="text" name="dino-name" value="Dino Name">
      </div>
    </div>
    <div class="form-row">
      <div class="form-col">
        <label for="dino-food">Dino Food</label>
      </div>
      <div class="form-col">
        <select class="" name="dino-food" >
          <option value="">What does your Dino eat?</option>
          <option value="">Vegetables</option>
          <option value="">Other Dinos</option>
          <option value="">Ice Cream</option>
          <option value="">Jeremy Corbyn</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-col">
        <label for="dino-live">Dino Home</label>
      </div>
      <div class="form-col">
        <select class="" name="dino-live">
          <option value="">Where does your Dino live?</option>
          <option value="">Cave</option>
          <option value="">Forest</option>
          <option value="">Bunker</option>
          <option value="">The Moon</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-col">
        <label for="dino-color">Dino Colour</label>
      </div>
      <div class="form-col">
        <select class="" name="dino-color">
          <option value="">What colour is your Dino?</option>
          <option value="">Red</option>
          <option value="">Green</option>
          <option value="">Blue</option>
          <option value="">Yellow</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-col">
        <h2>Can your Dino fly?</h2>
      </div>
      <div class="form-col">
          <label for="dino-fly">Yes</label>
          <input type="radio" id = "yes" name="" value="yes">
      </div>
    </div>
    <div class="form-row">
      <label for="dino-fly">No</label>
      <input type="radio" id ="no" name="" value="no">
    </div>
    <h2>Is your Dino bigger than a house?</h2>
    <label for="dino-house">Yes</label>
    <input type="radio" id = "yes" name="" value="yes">
    <label for="dino-house">No</label>
    <input type="radio" id ="no" name="" value="no">
    <div>
      <input type="submit" name="" value="submit">
    </div>
  </form>
</template>
<script>
export default {
  name: 'build-your-dino'
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
