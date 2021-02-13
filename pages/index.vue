<template>
  <div class="app-container">
    <AppHeader />
    <InputField />
    <Button />
    <ResultsTable />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import InputField from '../components/InputField'
import Button from '../components/Button'
import ResultsTable from '../components/ResultsTable'
export default {
  components: { AppHeader, InputField, Button, ResultsTable },
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
}
</style>
