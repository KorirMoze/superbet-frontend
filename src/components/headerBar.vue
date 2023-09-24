<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item bet" href="/">
        <!-- Add your logo or text here -->
        23 Bet
      </a>
      <div class="navbar-end"> <!-- Add the "navbar-end" class here -->
        <a role="button" class="navbar-burger burger" aria-label="menu" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link to="/betslip" 
        :betslip="betslip" @update:betslip="updateBetslip" class="navbar-item">Betslip</router-link>

        <a class="navbar-item" href="/results">Results</a>
        <a v-if="isLoggedIn" class="navbar-item" href="#responsive-header">Payments</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="/login" >Login</a>
        <a class="navbar-item" href="/account">My Account</a>
        <!-- <a class="navbar-item" href="/deposit">Deposit</a> -->
        <button class="button is-primary" @click="openModal">Deposit</button>

        <!-- Include your custom component here -->
        <router-link to="/registration" class="navbar-item" >Registration</router-link>
        <a v-if="isLoggedIn" class="navbar-item" href="#" @click="logout">Logout</a>
      </div>
    </div>
  </nav>

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
            <li class="coin" @click="setStake(100)">+100</li>
            <li class="coin" @click="setStake(200)">+200</li>
            <li class="coin" @click="setStake(500)">+500</li>
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
      stake: 0, // Initialize stake with 0
      isLoggedIn: false,
    };
  },
  created() {
    // Check if the user is logged in (e.g., by checking if a JWT token exists)
    const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token
    this.isLoggedIn = !!token;
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
.navbar-item{
  font-size: 1.5rem;
}
a{
  text-decoration: none; /* This removes the underline */
 
}
navbar{
  margin-bottom: 0 !important;
}
.button{
  color: black !important;
  background-color: yellow;
}
.pale{
  text-decoration: muted;
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

@media screen and (max-width: 1023px){
  .navbar-menu {
      background-color: #cb0a0a;
      box-shadow: 0 8px 16px rgba(10,10,10,.1);
      padding: 0.5rem 0;
      border-radius: 10px;
  }
  .navbar-end{

  }
  .burger{
    margin-right: 1rem;
  }
  .bet{
    margin-right: 75%;
  }
   }
</style>