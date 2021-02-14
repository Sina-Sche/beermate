<template>
  <form>
    <div>
      <label>Type the ABV value</label>
      <input v-model="abv" placeholder="e.g. 6.5%" type="number" required />
    </div>
    <p v-if="error.length > 0" class="error">{{ error }}</p>
    <button type="submit" @click.prevent="submitForm(abv)">
      🍺 Show me the beers!
    </button>
  </form>
</template>

<script>
export default {
  name: '',
  emits: ['getBeers'],
  data() {
    return { abv: Number, error: '' }
  },
  methods: {
    submitForm(abv) {
      if (abv >= 0) {
        this.$emit('getBeers', abv)
      } else {
        this.error = 'Please enter an ABV value.'
      }
    },
  },
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
input {
  margin-top: 20px;
}
button {
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(212, 195, 157, 0.719);
  margin: 20px;
}
.error {
  color: red;
  text-align: center;
}
</style>
