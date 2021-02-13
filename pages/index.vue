<template>
  <div class="app-container">
    <div class="content">
      <AppHeader />
      <InputField />
      <Button />
      <ResultsTable />
    </div>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://images.unsplash.com/photo-1595600566063-2863388012be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  backdrop-filter: blur(15px);
  background-color: rgba(237, 248, 133, 0.062);
  padding: 50px;
  border-radius: 30px;
}
</style>
