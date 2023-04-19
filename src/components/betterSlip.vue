<template>
    <div>
      <h2>Bet Slip</h2>
      <h1>Betterslip Component</h1>
      <p>{{ betslip }}</p>
      <ul>
        <li v-for="(item, index) in betslip" :key="index">
          {{ item.match }} - {{ item.selection }} - {{ item.odds }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "betterSlip",
    props: {
      betslip: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component's styles here */
  </style>
  