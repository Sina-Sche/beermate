<template>
  <div class="app-container">
    <div class="content">
      <AppHeader />
      <h5 @click="toggleAbout">About the App</h5>
      <About v-if="seen" @toggleAbout="toggleAbout" />
      <Form v-if="beers.length === 0" @getBeers="getBeersByABV" />
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <div v-else-if="beers.length > 0">
        <button @click.prevent="handleReturnClick">◀ Go back</button>
        <h5>
          {{ ` ${beers.length} results for beers with an ABV below ${abv}%. ` }}
        </h5>
        <ResultsTable :beers="beers" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import About from '../components/About'
import Form from '../components/Form'
import ResultsTable from '../components/ResultsTable'
import { getBeersByABV } from '../middleware/beers'
export default {
  components: { AppHeader, About, Form, ResultsTable },
  data() {
    return {
      beers: [],
      errorMessage: '',
      abv: Number,
      seen: false,
    }
  },
  methods: {
    async getBeersByABV(abv) {
      this.abv = abv
      const data = await getBeersByABV(abv)
      if (data.length === 0) {
        this.errorMessage = `We could not find any beers with an ABV below ${abv}`
      } else {
        this.errorMessage = ''
        this.beers = data
      }
    },
    handleReturnClick() {
      this.beers = []
    },
    toggleAbout() {
      this.seen = !this.seen
    },
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1595600566063-2863388012be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60vw;
  position: relative;
  backdrop-filter: blur(15px);
  background-color: rgba(237, 248, 133, 0.062);
  padding: 30px 50px;
  border-radius: 30px;
  margin: 30px auto 30px;
}
h5 {
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
</style>
