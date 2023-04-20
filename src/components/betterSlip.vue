<template>
    <div>
      <h2>Bet Slip</h2>
      <h1>Betterslip Component</h1>
      <Dashboard @add-to-betslip="addToBetslip" />
    
      <ul>
        <li v-for="(item, index) in betslip" :key="index">
          {{ item.match }} - {{ item.selection }} - {{ item.odds }}
        </li>
      </ul>
      
    </div>
    <!-- <div v-if="betslip.length">
        <div v-for="(item, index) in betslip" :key="index">
          <p>{{ item.match }}</p>
          <p>{{ item.selection }}</p>
          <p>{{ item.odds }}</p>
        </div>
      </div>
      <p v-else>No items in bet slip</p> -->
  </template>
  <script>
export default {
  props: {
    betslip: {
      type: Array,
      required: true
    }
  },
  watch: {
    betslip: {
      handler(newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
      },
      deep: true
    }
  }
}
</script>
  
  <style scoped>
  /* Add your component's styles here */
  </style>
  