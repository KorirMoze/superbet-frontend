<template>


  <div class="betslip" :key="betslipKey">
   
    <ul>
      <li v-for="(betslipItem, index) in betslipCopy" :key="index">
          <div class="betremov">
                <div class="betitems">
                  <span>{{ betslipItem.match }}</span>
                  <div class="game-id" style="display: none;">{{ betslipItem.game_id }}</div>
                  <div class="selectiodd">
                      <div >  {{ betslipItem.selection === betslipItem.odds ? betslipItem.key : getBetOutcome(betslipItem.selection, betslipItem.odds, betslipItem.key) }}</div>
                      <div class="selection">{{ betslipItem.odds }}</div>
                  </div>
              </div>
              <div class="remove">
                <button class="btn-remove"
                @click="removeFromBetslip(index)">Remove</button>

              </div>
          </div>
       <div class="hrs">
        <hr>
       </div>
      </li>
    
    </ul>
    
  </div>

  <hr>
  <div class="total1">
    <div class="total">
      <div class="left">Total Odds:</div>
      <div class="right" v-if="totalOdds !== 1">{{ totalOdds.toFixed(2) }}</div>
    
    </div>
  <h6>Accept any changes in odds prices</h6>
  <div class="stak">
    <span class="stake">Stake:</span>
    <input type="number" id="stake-input" name="stake" step="0.01" min="0" required v-model="stake">
  </div>
  <button class="btnn" @click="placeBet">Place Bet</button>
</div>


<div :class="['modal', { 'is-active': isModalActive }]">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        
          <h5 class="modal-card-title">Deposit</h5>
         
     
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <!-- Modal content goes here -->
        
        <div class="box">
          <p class="pale">Send Money to Your Account</p>

        </div>
        <div class="stak">
          <ul class="coins">
            <li class="coin" @click="setStake(49)">+49</li>
            <li class="coin" @click="setStake(100)">+98</li>
            <li class="coin" @click="setStake(200)">+195</li>
            <li class="coin" @click="setStake(500)">+490</li>
          </ul>
          <span class="stake">DEPOSIT:</span>
          <input type="number" id="depo" name="stake" step="0.01" min="10" required v-model="stake" placeholder="Enter Amount">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="closeModal">Close</button>
        <button class="button is-success" @click="deposit" >Deposit</button>
      </footer>
    </div>
  </div>

  <div class="bottom-nav-container">
  <bottomNav />
</div>

<div class="remaining-background">
      <!-- Content for the remaining part of the page -->
    </div>


</template>

<script>
import axios from 'axios';
import bottomNav from '@/views/bottomNav.vue'


export default {
  props: {
    betslip: {
      type: Array,
      default: () => [],
    },
  },
  components:
  {
  bottomNav,
  },
  

  data() {
    return {
      betslipKey: 0,
      stake: 49,
      gambler: {
      email: '',
      first_name: '',
      last_name: '',
      date_of_birth: '',
      gender: '',
      phone_number: '',
      acc_balance: '',
      bets: [],
      loading: false,
      showBetSlip: false,
      withdrawalAmount: 0,
      isModalActive: false,
      base_url: 'https://www.23bet.pro/',
    },
      
    };
  },

  computed: {
    betslipCopy() {
      return [...this.betslip];
      
    },
    getBetOutcome() {
      return (odds) => {
        if (odds === 'home_odd') {
          return 'Home';
        } else if (odds === 'away_odd') {
          return 'Away';
        } else if (odds === 'neutral_odd') {
          return 'Draw';
        }else {
          return odds; // Keep the original odds value for other cases
        }
      };
    },
    totalOdds() {
    return this.betslipCopy.reduce((total, betslipItem) => {
      const odds = parseFloat(betslipItem.odds);
      return total * odds;
    }, 1);
  },
  
  },

  mounted() {
  const token = localStorage.getItem("jwt");

  if (token) {
    axios
      .get(this.base_url+"account_details/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.gambler = response.data;
       // console.log(this.gambler.data.acc_balance)

      })
      .catch((error) => {
        console.log("Error:", error);
      });
  } else {
    console.log("No token found");
  }
},


    

  methods: {
    removeFromBetslip(index) {
    const updatedBetslip = this.betslipCopy.slice();
    const removedBetslip = updatedBetslip[index]
    console.log(removedBetslip)
  //  const gameId = removedBetslip.game_id;
    
   // localStorage.setItem('removedBetslip', JSON.stringify(removedBetslip));
    updatedBetslip.splice(index, 1);
    this.$emit('update:betslip', updatedBetslip);
    this.betslipKey += 1;

    // const buttonId1 = `button_home_${gameId}`;
    // const buttonId2 = `button_neutral_${gameId}`;
    // const buttonId3 = `button_away_${gameId}`;

   
    //console.log(buttonId1,'buttonID')
   // console.log(this.betslip[index])
  

   if (removedBetslip.selection != null && removedBetslip.game_id) {
  
        // const buttonId = removedBetslip.selection;
        // const button = document.getElementById(buttonId);
        // console.log(button,"svhadbansbghanjhsgwbnasbhna")
        // const button1 = document.getElementById(buttonId1);
        // const button2 = document.getElementById(buttonId2);
        // const button3 = document.getElementById(buttonId3)
        if (removedBetslip.game_id){
         // var leength = removedBetslip.game_id.length

        }

        // if (button ) {
        //   button.style.backgroundColor = ''; // Reset the background color

        // }
        // else if (removedBetslip.selection ==='home_odd' && leength >3)
        // {
        //   button1.style.backgroundColor = '';
        //   console.log(button1)

        // }
        // else if (removedBetslip.selection === 'neutral_odd' && leength >3){
        //   button2.style.backgroundColor = '';
   
        // }
        // else if (removedBetslip.selection === 'away_odd' && leength >3){
        //   button3.style.backgroundColor = '';
        
        // }
      } else if (removedBetslip.key != null ) {
        // Reset the background color for key buttons
        // Use the item.game_id or other identifier to find the button
        const buttonId = removedBetslip.key;
        const button = document.getElementById(buttonId);
        if (button) {
          button.style.backgroundColor = ''; // Reset the background color
        }
      }else if (removedBetslip.selection != null)
      {
        const buttonId = removedBetslip.selection;
        const button = document.getElementById(buttonId);
        button.style.backgroundColor = ''; // Reset the background color

      }
  
    localStorage.setItem('betslip', JSON.stringify(updatedBetslip));
  },
  
async placeBet() {
 // console.log('Placing bets:', this.betslip);
  //console.log('Stake:', this.stake);
  
// Calculate the total odds by summing up all the odds in the betslip
const totalOdds = this.betslip.reduce((total, betslipItem) => {
  const odds = parseFloat(betslipItem.odds);
  return total + odds;
}, 0);
//console.log('Total Odds:', totalOdds);
  // Get the JWT from a cookie or local storage
  const token = localStorage.getItem('jwt');
 // console.log(token);
    // Check if the JWT token is available
    if (!token) {
    // Token is not available, redirect to the login page
    this.$router.push({ name: 'login' });
    return; // Stop further execution
  }
  if (this.gambler.data.acc_balance<1){
      this.$router.push({name: 'deposit'})

  }

  try {
    // Send a POST request to the backend API with the entire betslip array,
    // including the JWT in the headers
    const betslipWithStake = this.betslip.map(betslipItem => ({
      ...betslipItem,
      stake: this.stake,
      total_odds: totalOdds 
    }));
    const response = await axios.post(this.base_url+'place_bet/', {
      betslip: betslipWithStake,
      total_odds: totalOdds 
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

   // console.log('Bets placed:', response.data.bets);
    
    // Emit a "bet-placed" event to update the UI with the placed bets
    this.$emit('bet-placed', response.data.bets);
    
    this.$emit('update:betslip', []);
    localStorage.removeItem('betslip');   

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




<style scoped>
.col-12 {
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
}
.bottom-nav-container {
    display: none; /* Hide the container by default */
  }

  /* Media query for mobile devices (adjust the max-width as needed) */
  @media (max-width: 767px) {
    .bottom-nav-container {
      display: block; /* Show the container on mobile devices */
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000; /* Adjust as needed */
      color: #fff; /* Adjust as needed */
      padding: 10px; /* Adjust as needed */
      z-index: 1000; /* Adjust as needed */
    }
    .remaining-background {
  background-color: red; 
 
  }
  }
.betslip {
padding-top: 2rem;
  color: #fff;
  
}

ul {
  list-style-type: none;
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
   align-items: center;
   background-color: #16202c;
   margin-left: 2rem;
  margin-right: 2rem;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

.betremov {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-bottom: 0.5rem;

  height: 4rem;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
}

li span {

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 22px;
letter-spacing: 0.01em;
padding: 10px 0 10px 5px;
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
  background: #4F709C;
  color: rgb(223, 166, 166);
  padding: 3px 8px;

}
.total1{
width: 100%;

left: 1257px;
top: 473px;

border-radius: 8.21818px;
margin-top: 2rem;
}

.total {
  display: flex;
  justify-content: space-between;
  color: #fff;
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

color: #98a9bc;
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
  flex-basis: 40%;
;
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
  color: #98a9bc;
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
  background-color: #fed800;
  margin-bottom: 1rem;
  color: #000000;
  font-weight: 700;
  padding-left: 4rem;
  padding-right: 4rem;
  font-size: 14px;
}
h6{
  color: #fff;
}
#stake-input{
  border-color: antiquewhite;
  background-color:#2a2a2a;
  border: 1px;
  text-align: center;
}
@media screen and (max-width:992px) {
  .button{
      padding: 0 !important;
  }
.left{
  height: auto !important;
}
.row{
  width: 100% !important;
}
.betitems{
  display: flex;
  flex-direction: column;
}
.selectiodd{
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  font-weight: 300;
  color: #98a9bc;
}
.betremov {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-bottom: 0.5rem;

  height: 4rem;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
 
}
.hrs{
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  padding-top: 1rem;
  border: #2d4458;
  border-bottom: 1px;
}
.col-12 {
    flex: 0 0 auto;
    width: 100%;
    padding: 0;
}
}
</style>
  