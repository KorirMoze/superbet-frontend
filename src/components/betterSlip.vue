<template>
  <div class="betslip" :key="betslipKey">
    <h2>Betslip</h2>
    <ul>
      <li v-for="(betslipItem, index) in betslip" :key="index">
        <span>{{ betslipItem.match }}</span>
        <span>{{ betslipItem.selection }}</span>
        <span>{{ betslipItem.odds }}</span>
        <button @click="removeFromBetslip(index)">Remove</button>
      </li>
    </ul>
    <button v-if="betslip.length > 0" @click="placeBet">Place Bet</button>
  </div>
</template>

<script>
export default {
  props: {
    betslip: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      betslipKey: 0,
    };
  },
  methods: {
    removeFromBetslip(index) {
      const updatedBetslip = this.betslip.slice();
      updatedBetslip.splice(index, 1);
      this.$emit('update:betslip', updatedBetslip);
      this.betslipKey += 1;
    },
    placeBet() {
      console.log('Placing bet:', this.betslip);
      this.$emit('place-bet');
    },
  },
  watch: {
    betslip: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.betslipKey += 1;
      }
    },
  },
};
</script>

<style>
.betslip {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

li span {
  margin-right: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0069d9;
}
</style>
