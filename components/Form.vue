<template>
  <form>
    <div>
      <label>Enter maximum ABV value</label>
      <input
        v-model="abv"
        placeholder="e.g. 6.5"
        type="number"
        min="0.6"
        max="13"
        step="0.1"
        required
      />%
      <p>{{ abvMsg }}</p>
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
    return { abv: Number, error: '', abvMsg: '', input: Boolean }
  },
  watch: {
    abv(value) {
      this.abv = value
      this.validateInput(value)
    },
  },
  methods: {
    submitForm(abv) {
      if (this.input === true) {
        this.$emit('getBeers', abv)
      } else {
        this.error = 'Please enter a valid ABV value (between 0.6% and 13%)'
      }
    },
    validateInput(value) {
      this.input = /^[1-9]{1}(\.\d{1,2})?$|^[0-3]{1,2}(\.\d{1,2})?$|^[0]{1}(\.\d{1,2})?$/.test(
        value
      )
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
  width: 100px;
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
