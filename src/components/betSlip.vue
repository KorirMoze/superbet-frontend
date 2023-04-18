<template>
  <div class="we">
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
  name: "betSlip",
  props: {
    betslip: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
.we{
  background-color: black;
}
</style>
