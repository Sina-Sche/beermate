<template>
  <div class="app-container">
    <div class="content">
      <AppHeader />
      <Form v-if="beers.length === 0" @getBeers="getBeersByABV" />
      <div v-else>
        <h5>
          {{ ` Results for beers with an ABV below ${abv}%. ` }}
        </h5>
        <ResultsTable :beers="beers" />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import Form from '../components/Form'
import ResultsTable from '../components/ResultsTable'
import { getBeersByABV } from '../middleware/beers'
export default {
  components: { AppHeader, Form, ResultsTable },
  data() {
    return {
      beers: [],
    }
  },
  computed() {
    const abv = this.abv
    return abv
  },
  methods: {
    async getBeersByABV(abv) {
      this.abv = abv
      this.beers = await getBeersByABV(abv)
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
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
</style>
