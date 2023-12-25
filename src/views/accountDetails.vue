<template>
  <div class="nav-topp">
    <headerTop />

  </div>
    <div class="account">
    <div class="hello" ></div>
      <div class="columns">

        <div class="column is-5">  
         
          <img class="userimg" src="../assets/user.png" alt="Italian Trulli">

          <div class="number"><p class="detai"> {{ gambler.data && gambler.data.phone_number }}</p></div>

               
        </div>
        <div class="column is-7">
          <div class="data" v-if="Object.keys(gambler).length !== 0">
            <p class="detai"> {{ gambler.data && gambler.data.first_name }} {{ gambler.data && gambler.data.last_name }}</p>
          <p class="detai"> {{ gambler.data && gambler.data.email }}</p>
          <p class="detai">Balance: {{ gambler.data && gambler.data.acc_balance }}</p>




          </div>
          <template v-else>
            <p>Loading...</p>
          </template>
        </div>

    
      </div>
      <div class="other-details">
        <div class="mail"><p class="detai"> {{ gambler.data && gambler.data.email }}</p></div>
        <div class="withdaw"><p class="detai"><WithdrawalModal v-model="isWithdrawalModalOpen" /></p></div>
        </div>
        <div  class="betss">
          <ul class="bets">
            <li v-for="bet in bets" :key="bet.id">
             
              <div class="bte1">
              <div class="keys">ID: {{ bet.id }}</div>
              <div class="keys">Odds: {{ bet.odds }}</div>
              <div  class="keys">Possible Win: {{ bet.possible_win }}</div>
              <div class="keys">Stake: {{ bet.stake }}</div>
              <div class="keys" :class="{'green-text': bet.status === 'won', 'red-text': bet.status === 'lost','grey-text':bet.status === 'pending'}">Status: {{ bet.status }}</div>
              
            </div>
              <ul>
                <li v-for="betItem in bet.bet_items" :key="betItem.id">
                  <div class="bte2">
                  <div class="match">Match: {{ betItem.match }}</div>
                  <div>Selection: {{ betItem.selection }}</div>
                  <div>Odds: {{ betItem.odds }}</div>
                  <div :class="{'green-text': betItem.status === 'won', 'red-text': betItem.status === 'lost','grey-text':bet.status === 'pending'}">Status: {{ betItem.status }}</div>
                </div>
                </li>
              </ul>
            </li>
          </ul>
          </div>
    </div>


    <div class="terms">
  <bottom />
</div>

    
<div class="bottom-nav-container">
  <bottomNav />
</div>

  </template>
  
  
  <script>
  import axios from "axios";
  import headerTop from '@/components/headerBar.vue'
  import WithdrawalModal from "@/views/withdrawModal.vue"; 
  import bottomNav from '@/views/bottomNav.vue'
  import bottom from '@/views/termsPage.vue'

  export default {
    components: {
      headerTop,
      WithdrawalModal,
      bottomNav,
      bottom,
    },
    data() {
  return {
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
    },
    base_url: 'https://www.23bet.pro/',

  };
},
    mounted() {
      const token = localStorage.getItem("jwt");
     // console.log(token)
      if (token) {
        axios
          .get(this.base_url+'account_details/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
          //  console.log(response.data);
            this.gambler = response.data;
            this.gambler.acc_balance = response.data.acc_balance;
            this.fetchBets();

          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("No token found");
      }
    },
    
    methods: {
    fetchBets() {
      this.loading = true;

      const token = localStorage.getItem('jwt'); // Assuming your JWT token is stored in localStorage

      if (!token) {
      //  console.log('No JWT token found');
        this.loading = false;
        return;
      }

      // Replace 'your_api_endpoint' with the actual URL of your Django API endpoint
      axios
        .get(this.base_url+'bets/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.bets = response.data.bets; // Assuming your API response has a 'bets' field
          console.log(this.bets)
         this.bets = this.bets.reverse()
         this.bets.forEach((bet) => {
  // Reverse the order of bet_items within each bet
  // bet.bet_items = bet.bet_items.reverse();

  // Initialize the bet status as "won"
        bet.status = 'won';

        bet.bet_items.forEach((betItem) => {
          console.log(`Status of bet item: ${betItem.status}`);

          if (betItem.status === 'lost') {
            bet.status = 'lost';
          } else if (betItem.status === 'pending') {
            bet.status = 'pending';
          }
        });
      });

          this.gambler.loading = false;
          console.log(response.data.bets[0].bet_items)
        })
        .catch((error) => {
          console.error('Error fetching bets:', error);
          this.loading = false;
        });
    },
    toggleBetSlip() {
      this.showBetSlip = !this.showBetSlip;
      //console.log('showBetSlip:', this.showBetSlip); // Add this line for debugging
    },
    

    openWithdrawalModal() {
      this.isWithdrawalModalOpen = true; // Open the withdrawal modal
    },
  },
 
  };
  </script>
 <style scoped>
 .green-text{
  color: #ffd000;
 }
 .red-text{
  color: red;
 }
 .grey-text{
  color: #427D9D;
 }
 .nav-topp {
   
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1000; /* Adjust as needed */
 }

/* Default styles for larger screens */
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
}
 @media screen and (min-width: 992px){
  .account{
    background-color: #16202c  ;
    height: scroll;
    padding-bottom: 1rem;
    padding-top: 10rem;
   }
   h1{
   color: #fff;
   }
   p{
    color: #fff;
    margin-bottom: 1rem;
    display: flex;
   }
   .data{
    margin-top: 4rem;
  
    margin: auto;
   }
   .detai{
    background-color: #23313d!important;
    padding-top: 1rem;
    border-radius: 10px;
    font-size: 1.5rem;
    text-align: left;
    font-size: 1.8rem;
    padding-left: 1rem;
   }
   .userimg{
  
    display: flex;
    background-color: #23313d;
    width: 100px; /* Specify the desired width */
    height: 100px; 
   
    margin-top: 1rem;
    border-radius: 50%;
   }
   .columns{
    width: 60%;
    margin: auto;
    background-color: #23313d;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-left: 4rem;
    padding-right: 4rem;
   }
   .detail{
    width: 80%;
padding-left: 1rem;
   }
   .button.is-primary{
    width: 80%;
    margin: left;
   }
   .hello{
    color: #918f8f ;
   }
   ul{
    color: white;
   }
   .bets{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
    width: 70%;
    margin: auto;
    margin-bottom: 2rem;
   }
   .betss{
    width: 60%;
    margin: auto;
    background-color: #23313d;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-bottom: 2rem;
   }
   .keys{
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-left: 2rem;
    flex-direction: row;
   }
  .bte1{
    display: flex;
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  .bte2{
    text-align: left;
  
    margin-bottom: 1rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border: 2px solid green; 
    padding-left: 4rem;
    border-radius: 10px;
  }
  .match{
    display: flex;
    justify-content: space-between !important;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .other-details{
    width: 60%;
    margin: auto;
    background-color: #23313d;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding-bottom: 1rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    opacity: 0.6;
  }
  
  .withdaw{
    margin-right: 2rem;
   }
   .mail{
    margin-right: 2rem;
   }
 }
 @media screen and (max-width: 992px){
  .account{
    background-color: #16202c  ;
    height: scroll;
    padding-bottom: 1rem;
    margin-top: 7rem;
    padding-top: 4rem;
   }
   .column.is-5{
    padding-left: 4rem;
   }
   .column.is-7{
    padding: 4rem;
   }
   h1{
   color: #fff;
   }
   p{
    color: #fff;
    margin-bottom: 1rem;
   }
   .data{
    margin-top: 4rem;
  
    margin: auto;
   }
   .detai{
    background-color: #23313d!important;
    text-align: left;
    padding-top: 1rem;
    border-radius: 10px;
    font-size: 1.4rem;
    
   }
   .number{
    background-color: #23313d!important;
    text-align: center;
    margin-left: -4rem;
    margin-top: 2rem;
   }
   .userimg{
  
    display: flex;
    background-color: #23313d!important;
    width: 80px; /* Specify the desired width */
    height: 80px; 
    margin-top: 1rem;
    border-radius: 50%;
    margin-left: 25%;
   }
   .columns{
    width: 94%;
    margin: auto;
    background-color: #23313d!important;
    border-radius: 10px;
   
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   }
   .hello{
    color: #918f8f ;
   }
   ul{
    color: white;
   }
   .bets{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;
    padding-left: 0 !important;
   }
   .betss{
    width: 94%;
    margin: auto;
    background-color: #23313d!important;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 1rem;
    margin-bottom: 4rem;
   }
   .keys{
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-left: 2rem;
    flex-direction: row;
   }
  .bte1{
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    font-size: 1.3rem;
  }
  .bte2{
    text-align: left;
  
    margin-bottom: 1rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border: 2px solid green; 
    padding-left: 4rem;
    border-radius: 10px;
    margin-right: 1rem !important;
  }
  .match{
    display: flex;
    justify-content: space-between !important;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .is-7{
    padding-top: 1rem !important;
  }
  .other-details{
    width: 94%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-color: #23313d!important;
    margin-top: 1rem;
    border-radius: 10px;
    padding: 1rem;
  }
 }

</style>
