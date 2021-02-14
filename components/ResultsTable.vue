<template>
  <table>
    <tr>
      <th>Name of Beer</th>
      <th>ABV Value</th>
      <th>First Brewed</th>
    </tr>
    <tbody>
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{ beer.name }}</td>
        <td>{{ beer.abv }}</td>
        <td>{{ beer.first_brewed }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ResultsTable',
  props: {
    beers: { type: Array, default: () => [] },
  },
}
</script>

<style>
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
