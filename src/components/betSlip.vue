<template>
  <div>
    <h2>Bet Slip</h2>
    <ul>
      <li v-for="(bet, index) in bets" :key="index">
        {{ bet.event }} - {{ bet.selection }} - {{ bet.odds }}
        <button @click="removeFromBetslip(bet)">Remove</button>
      </li>
    </ul>
    <p v-if="bets.length === 0">No bets added to the bet slip.</p>
    <p>Total odds: {{ calculateTotalOdds() }}</p>
    <p>Potential payout: {{ calculatePotentialPayout(stake) }}</p>
    <form @submit.prevent="addToBetslip">
      <label>
        Event:
        <input v-model="event" required>
      </label>
      <label>
        Selection:
        <input v-model="selection" required>
      </label>
      <label>
        Odds:
        <input v-model.number="odds" type="number" min="1" step="0.01" required>
      </label>
      <label>
        Stake:
        <input v-model.number="stake" type="number" min="1" step="0.01" required>
      </label>
      <button type="submit">Add to Bet Slip</button>
    </form>
  </div>
</template>

<script>
import BetSlip from '@/models/BetSlip.js';

export default {
  name: 'BetSlipComponent',
  data() {
    return {
      event: '',
      selection: '',
      odds: 1,
      stake: 1,
      betSlip: new BetSlip(),
    };
  },
  computed: {
    bets() {
      return this.betSlip.bets;
    },
  },
  methods: {
    addToBetslip() {
      const bet = {
        event: this.event,
        selection: this.selection,
        odds: this.odds,
      };
      this.betSlip.add_to_betslip(bet);
      this.event = '';
      this.selection = '';
      this.odds = 1;
      this.stake = 1;
    },
    removeFromBetslip(bet) {
      this.betSlip.remove_from_betslip(bet);
    },
    calculateTotalOdds() {
      return this.betSlip.calculate_total_odds();
    },
    calculatePotentialPayout(stake) {
      return this.betSlip.calculate_potential_payout(stake);
    },
  },
};
</script>
