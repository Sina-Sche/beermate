<template>
  <div>
    <label>Type the ABV value</label>
    <input v-model="abv" placeholder="e.g. 6.5%" type="number" />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  data() {
    return { abv: '' }
  },
}
</script>

<style scoped>
* {
  margin-top: 20px;
}
</style>
