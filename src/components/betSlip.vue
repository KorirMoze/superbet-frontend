<template>
  <div>
    <h2>Betslip</h2>
    <ul>
      <li v-for="(bet, index) in betslip" :key="index">
        {{ bet.match }} - {{ bet.selection }} - {{ bet.odds }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "betSlip.vue",
  props: {
    betslip: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
