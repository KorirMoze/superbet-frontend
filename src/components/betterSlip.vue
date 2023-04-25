<template>
  <div class="betslip" :key="betslipKey">
    <h2>Betslip</h2>
    <ul>
      <li v-for="(betslipItem, index) in betslipCopy" :key="index">
        <span>{{ betslipItem.match }}</span>
        <span>{{ betslipItem.selection }}</span>
        <span>{{ betslipItem.odds }}</span>
        <button @click="removeFromBetslip(index)">Remove</button>
      </li>
    </ul>
    <button v-if="betslipCopy.length > 0" @click="placeBet">Place Bet</button>
  </div>
</template>

<script>
import axios from 'axios';
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
  computed: {
    betslipCopy() {
      return [...this.betslip];
    }
  },
  methods: {
    removeFromBetslip(index) {
      const updatedBetslip = this.betslipCopy.slice();
      updatedBetslip.splice(index, 1);
      this.$emit('update:betslip', updatedBetslip);
      this.betslipKey += 1;
    },
//     placeBet() {
//       console.log('Sending request with data:', {
//       match: this.betslip.match,
//       selection: this.betslip.selection,
//       odds: this.betslip.odds,
//       stake: this.betslip.stake
//     });
//     console.log('Placing bets:', this.betslip);

//     axios.post('http://127.0.0.1:8000/place_bet/', {
//       match: this.betslip.match,
//       selection: this.betslip.selection,
//       odds: this.betslip.odds,
//       stake: this.betslip.stake
//     })
//     .then(response => {
//       console.log('Bet placed:', response.data);
//       // Emit a "bet-placed" event to update the UI
//       this.$emit('bet-placed', response.data.bet);
//     })
//     .catch(error => {
//       console.error('Failed to place bet:', error);
//     });

// }
placeBet() {
  // console.log('Placing bets:', this.betslip);

  // Loop through the betslip array and send each item as a separate request
  for (let i = 0; i < this.betslip.length; i++) {
    const bet = this.betslip[i];
    console.log(bet.odds)

    // Send a POST request to the backend API for this bet
    axios.post('http://127.0.0.1:8000/place_bet/', {
      match: bet.match,
      
      selection: bet.selection,
      odds: bet.odds,
      stake: bet.stake
    })
    .then(response => {
      console.log('Bet placed:', response.data);
      // console.log('Bet ed:', bet.stake);
      // Emit a "bet-placed" event to update the UI
      this.$emit('bet-placed', response.data.bet);
    })
    .catch(error => {
      console.error('Failed to place bet:', error);
    });
  }
}


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

