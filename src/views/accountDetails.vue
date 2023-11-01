<template>
  <div class="navtopp">
    <headerTop />

  </div>
    <div class="account">
    <div class="hello" >g</div>
      <div class="columns">

        <div class="column is-5">  
         
          <img class="userimg" src="../assets/user.png" alt="Italian Trulli">
          <i class="fa-solid fa-user"></i>
          <p class="detai">Full Name: {{ gambler.data && gambler.data.first_name }} {{ gambler.data && gambler.data.last_name }}</p>
          <p class="detai">Email: {{ gambler.data && gambler.data.email }}</p>
          <!-- <button class="button is-primary" @click="openWithdrawalModal">Withdraw Funds</button> -->

          <!-- Include the WithdrawalModal component and pass its visibility as a prop -->
      
          <p class="detail"><WithdrawalModal v-model="isWithdrawalModalOpen" /></p>
         
        </div>
        <div class="column is-7">
          <div class="data" v-if="Object.keys(gambler).length !== 0">
            <!-- <pre>{{ JSON.stringify(gambler, null, 2) }}</pre> -->
            <p class="detai">Email: {{ gambler.data && gambler.data.email }}</p>
        
            <p class="detai">Date of Birth: {{ gambler.data && gambler.data.date_of_birth }}</p>
            <p class="detai">Gender: {{ gambler.data && gambler.data.gender }}</p>
            <p class="detai">Phone Number: {{ gambler.data && gambler.data.phone_number }}</p>
            <p class="detai">Account Balance: {{ gambler.data && gambler.data.acc_balance }}</p>
          </div>
          <template v-else>
            <p>Loading...</p>
          </template>
        </div>
    
      </div>
        <div  class="betss">
          <ul class="bets">
            <li v-for="bet in bets" :key="bet.id">
             
              <div class="bte1">
              <div class="keys">ID: {{ bet.id }}</div>
              <div class="keys">Odds: {{ bet.odds }}</div>
              <div  class="keys">Possible Win: {{ bet.possible_win }}</div>
              <div class="keys">Stake: {{ bet.stake }}</div>
              <div class="keys">Status: {{ bet.status }}</div>
              
            </div>
              <ul>
                <li v-for="betItem in bet.bet_items" :key="betItem.id">
                  <div class="bte2">
                  <div class="match">Match: {{ betItem.match }}</div>
                  <div>Selection: {{ betItem.selection }}</div>
                  <div>Odds: {{ betItem.odds }}</div>
                  <div>Status: {{ betItem.status }}</div>
                </div>
                </li>
              </ul>
            </li>
          </ul>
          </div>
    </div>
    <i class="fa-solid fa-user"></i>


    
<div class="bottom-nav-container">
  <bottomNav />
</div>

  </template>
  
  
  <script>
  import axios from "axios";
  import headerTop from '@/components/headerBar.vue'
  import WithdrawalModal from "@/views/withdrawModal.vue"; 
  import bottomNav from '@/views/bottomNav.vue'

  export default {
    components: {
      headerTop,
      WithdrawalModal,
      bottomNav,
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
  };
},
    mounted() {
      const token = localStorage.getItem("jwt");
     // console.log(token)
      if (token) {
        axios
          .get("https://www.23bet.pro/account_details/", {
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
        .get('https://www.23bet.pro/bets/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.bets = response.data.bets; // Assuming your API response has a 'bets' field
         // console.log(this.bets)
          this.gambler.loading = false;
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
    background-color: #918f8f ;
    height: scroll;
    padding-bottom: 1rem;
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
    background-color: #000000!important;
    padding-bottom: 3rem;
    padding-top: 3rem;
    border-radius: 10px;
    font-size: 1.5rem;
    text-align: left;
    font-size: 1.8rem;
   }
   .userimg{
  
    display: flex;
    background-color: #000000;
    width: 150px; /* Specify the desired width */
    height: 150px; 
   
    margin-top: 1rem;
    border-radius: 50%;
   }
   .columns{
    width: 60%;
    margin: auto;
    background-color: #000000;
    border-radius: 10px;
    margin-top: 2rem;
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
    width: 70%;
    margin: auto;
    margin-bottom: 2rem;
   }
   .betss{
    width: 60%;
    margin: auto;
    background-color: #000000;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
 }
 @media screen and (max-width: 992px){
  .account{
    background-color: #918f8f ;
    height: scroll;
    padding-bottom: 1rem;
    margin-bottom: 5rem;
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
    background-color: #000000!important;
    text-align: center;
    padding-top: 1rem;
    border-radius: 10px;
    font-size: 1.4rem;
   }
   .userimg{
  
    display: flex;
    background-color: #000000;
    width: 150px; /* Specify the desired width */
    height: 150px; 
   
    margin-top: 1rem;
    border-radius: 50%;
    margin-left: 25%;
   }
   .columns{
    width: 94%;
    margin: auto;
    background-color: #000000;
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
    background-color: #000000;
    border-radius: 10px;
    margin-top: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 1rem;
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
 }

</style>
