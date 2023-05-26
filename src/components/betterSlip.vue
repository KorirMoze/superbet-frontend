<template>
  <div class="betslip" :key="betslipKey">
   
    <ul>
      <li v-for="(betslipItem, index) in betslipCopy" :key="index">
        <span>{{ betslipItem.match }}</span>
        <span class="selection">{{ betslipItem.selection }}</span>
        <div>{{ betslipItem.odds }}</div>
        <button class="btn-remove"
        @click="removeFromBetslip(index)">Remove</button>
      </li>
    </ul>
    
  </div>
  <div class="total1">
  <div class="total">
  
    <span class="left">TOTAL ODDS:</span>
    <span class="right">3.60</span>
    <h6></h6>
  </div>
  <h6>Accept any changes in odds prices</h6>
  <div class="stak">
      <span class="stake">STAKE:</span>
      <input type="number" id="stake-input" name="stake" step="0.01" min="0" required>
      <!-- <span class="amount">3.60</span> -->
  </div>
  <button class="btnn" @click="placeBet">Place Bet</button>
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

//   placeBet() {
//   console.log('Placing bets:', this.betslip);

//   // Get the JWT from a cookie or local storage
//   const token = localStorage.getItem('jwt');
//   console.log(token)
//   // Loop through the betslip array and send each item as a separate request
//   for (let i = 0; i < this.betslip.length; i++) {
//     const bet = this.betslip[i];

//     // Send a POST request to the backend API for this bet, including the JWT in the headers
//     axios.post('http://127.0.0.1:8000/place_bet/', {
//       match: bet.match,
//       selection: bet.selection,
//       odds: bet.odds,
//       stake: bet.stake
//     }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then(response => {
//       console.log('Bet placed:', response.data);
//       // Emit a "bet-placed" event to update the UI
//       this.$emit('bet-placed', response.data.bet);
//     })
//     .catch(error => {
//       console.error('Failed to place bet:', error);
//     });
//   }
// }
async placeBet() {
  console.log('Placing bets:', this.betslip);

  // Get the JWT from a cookie or local storage
  const token = localStorage.getItem('jwt');
  console.log(token);

  try {
    // Send a POST request to the backend API with the entire betslip array,
    // including the JWT in the headers
    const response = await axios.post('http://127.0.0.1:8000/place_bet/', {
      betslip: this.betslip
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Bets placed:', response.data.bets);
    // Emit a "bet-placed" event to update the UI with the placed bets
    this.$emit('bet-placed', response.data.bets);

  } catch (error) {
    console.error('Failed to place bets:', error);
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
  background: rgba(217, 217, 217, 0.57);
border-radius: 10px;

}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #EEEEEE;
   align-items: center;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-bottom: 0.5rem;

  background: rgba(217, 217, 217, 0.57);
  height: 4rem;
  border-radius: 10px;
}

li span {

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14.9005px;
line-height: 22px;
letter-spacing: 0.01em;

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
.selection{

color: #1EBA01;
}
.btn-remove{
  background: #1EBA01;
}
.total1{

width: 100%;

left: 1257px;
top: 473px;

background: rgba(217, 217, 217, 0.37);
border-radius: 8.21818px;
}
.total {
  display: flex;
  justify-content: space-between;
}

.left {
text-align: left;
width: 103px;
height: 25px;
margin-left: 1rem;
top: 494px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 22px;
letter-spacing: 0.01em;

color: #000000;
}

.right {
  text-align: right;
  margin-right: 1rem;

width: 33px;
height: 25px;
top: 494px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 22px;
letter-spacing: 0.01em;

color: #1EBA01;
}
h6{
  width: 201px;
height: 18px;
left: 1319px;
top: 527px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
letter-spacing: 0.01em;

color: #000000;

}
.stak{
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  margin-bottom: 1rem;
}
.stake{
  width: 55px;
  height: 25px;
  margin-left: 1rem;
 
  text-align: left;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #000000;
}
.amount{
width: 255px;
text-align: center;
background: #D9D9D9;
border-radius: 10px;
}
#stake-input{
  max-width: 8rem;
  height: 2rem;
}
.btnn{
  background-color: #1EBA01;
  margin-bottom: 1rem;
}
</style>
  