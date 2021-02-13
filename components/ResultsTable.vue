<template>
  <table>
    <tr>
      <th>Name of Beer</th>
      <th>ABV Value</th>
      <th>First Brewed</th>
    </tr>
    <tr>
      <td>Becks</td>
      <td>6.5%</td>
      <td>2001</td>
    </tr>
    <tr>
      <td>Corona</td>
      <td>8.5%</td>
      <td>2020</td>
    </tr>
    <tr>
      <td>Karlsberg</td>
      <td>6.5%</td>
      <td>1991</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'ResultsTable',
  data() {
    return {}
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
