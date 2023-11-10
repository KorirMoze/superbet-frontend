<template>
<div class="customnav">
    <div class="custom-nav-brand1">
        <a class="navbar-item bet" href="/">
        <!-- Add your logo or text here -->
        23 Bet
      </a>
      <div class="custom-start">
                <ul >
                    <li class="custom-nav-items">
                    <router-link to="/betslip" 
                    :betslip="betslip" @update:betslip="updateBetslip" >Betslip</router-link>
                    </li>
                    <li  class="custom-nav-items">
                        <a  href="/results">Results</a>
                    </li>
                    <li  class="custom-nav-items">
                        <a v-if="isLoggedIn"  href="#responsive-header">Payments</a>

                    </li>
                </ul>
             </div>
    </div>
    
        <ul class="custom-nav">
        
            <div class="custom-end">
                <ul >           
                        <li  class="custom-nav-items">
                            <a v-if="!isLoggedIn" href="/login" >Login</a>

                        </li>
                        <li  class="custom-nav-items">
                            <a  href="/account">My Account</a>

                        </li>
                        <li  class="custom-nav-items">
                            <button class="butto" @click="openModal">Deposit</button>

                        </li>
                        <li  class="custom-nav-items">
                            <router-link to="/registration" v-if="!isLoggedIn" >Registration</router-link>
                        </li>
                        <li>
                            <a v-if="isLoggedIn"  href="#" @click="logout">Logout</a>

                        </li>
                </ul>
            </div>
        </ul>
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
            <li class="coin" @click="setStake(98)">+98</li>
            <li class="coin" @click="setStake(195)">+195</li>
            <li class="coin" @click="setStake(490)">+490</li>
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

</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      isMenuActive: false,
      isModalActive: false,
      stake: 49, // Initialize stake with 0
      isLoggedIn: false,
    };
  },
  created() {
    // Check if the user is logged in (e.g., by checking if a JWT token exists)
    const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token
    this.isLoggedIn = !!token;
    console.log('JWT Token:', token); 
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    openModal() {
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
    },
    setStake(amount) {
      // This method will be called when a list item is clicked
      this.stake = amount; // Set the stake to the selected amount
    },
    deposit() {
      // Get the JWT token from your storage (e.g., localStorage or Vuex store)
      const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token

      // Send a POST request to the backend with the deposit amount and the JWT token in the headers
      axios
        .post('https://www.23bet.pro/deposit/', {
          amount: this.stake, // Use the deposit amount from your component's data
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
        })
        .then((response) => {
          // Handle the response from the backend, e.g., display a success message
          console.log('Deposit successful', response.data);
        })
        .catch((error) => {
          // Handle any errors, e.g., display an error message
          console.error('Deposit failed', error);
        });
    },
    logout() {
      // Get the JWT token from your storage (e.g., localStorage or Vuex store)
      const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token

      // Send a POST request to the backend to perform the logout action
      axios
        .get('https://www.23bet.pro/logout/', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
        })
        .then((response) => {
          // Handle the response from the backend, e.g., display a success message
          console.log('Logout successful', response.data);

          // Clear the JWT token from storage to log the user out
          localStorage.removeItem('jwt'); // Adjust this according to where you store your token

          // Optionally, you can redirect the user to the login page
          this.$router.push('/login'); // Adjust the route path as needed
        })
        .catch((error) => {
          // Handle any errors, e.g., display an error message
          console.error('Logout failed', error);
          this.isLoggedIn = false;
        });
    },

  },
};
</script>
<style scoped>
.customnav{
    background-color: #cb0a0a;
    color: white;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1.5rem;
    font-size: 1.5rem;
    border-radius: 5px;
   

}
.customnav a{
    text-decoration: none;
    color: white;
    align-items: center;
    border-radius: 10px;
    font-weight: 800;
}
.customnav a:hover{
    background-color: black;
    padding: 5px 10px 5px 10px;

}
.custom-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between !important;
}
.custom-start{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.custom-start ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between important;
    align-items: center;
}
.custom-end{

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    margin-right: 0%;
}
.custom-end ul{
    display: flex;
    flex-direction: row;
   
    align-items: center;
}
.custom-nav-brand1{
    display: flex;
    justify-content: center;
    align-items: center;
}
ul{
    margin-bottom: 0;
}
li{
    margin-left: 1.5rem;
    padding: 5px 10px 5px 10px;

}
li:hover{
    background-color: black;
    border-radius: 10px;

}

.butto {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 10px;
  font-family: Georgia;
  color: #ffffff;
  font-size: 15px;
  background: #050505;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
}

.butto:hover {
  background: #3cb0fd;
  text-decoration: none;
}

.titlee{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.modal-card-foot{
  display: flex;
  justify-content: space-between;
}
#depo{
  border: 1px;
  background-color: rgba(217, 217, 217, 0.6);
  color: #000000;
  font-size: 1.3rem;
  margin-left: 2rem;
  line-height: 4rem;
  border-color: green !important;
  border-radius: 10px;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.stak{
  justify-content: space-between;
  border-color: green !important;

}
.coins{
  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: auto;
  margin-bottom: 3rem;
}
.coin{
  background-color: rgba(217, 217, 217, 0.6);
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer; /* Add this line to change cursor to pointer */
}
.button:hover{
    background-color: #cb0a0a;
}
</style>
