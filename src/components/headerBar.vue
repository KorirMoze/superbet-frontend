<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- Add your logo or text here -->
        23 Bet
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link to="/betslip" 
        :betslip="betslip" @update:betslip="updateBetslip" class="navbar-item">Betslip</router-link>

        <a class="navbar-item" href="#responsive-header">Bets Via Telegram</a>
        <a class="navbar-item" href="#responsive-header">Payments</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="/login">Login</a>
        <a class="navbar-item" href="/account">My Account</a>
        <!-- <a class="navbar-item" href="/deposit">Deposit</a> -->
        <button class="button is-primary" @click="openModal">Deposit</button>

        <!-- Include your custom component here -->
        <router-link to="/registration" class="navbar-item">Registration</router-link>
        <a class="navbar-item" href="#responsive-header">Logout</a>
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
          <input type="number" id="depo" name="stake" step="0.01" min="0" required v-model="stake" placeholder="Enter Amount">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="closeModal">Close</button>
        <button class="button is-success" @click="closeModal">Deposit</button>
      </footer>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
      isModalActive: false,
      stake: 0, // Initialize stake with 0
    };
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
  color: black;
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
</style>