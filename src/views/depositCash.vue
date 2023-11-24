<template>
  <div class="nav-topp">
    <headerTop />

  </div>
  <div>
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">

        <h5 class="modal-card-title">Deposit</h5>


        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body-sample" style="background-color: black;">
      

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
          <input type="number" id="depo" name="stake" step="0.01" min="10" required v-model="stake"
            placeholder="Enter Amount">
        </div>
      </section>
      <footer class="modal-card-foot">
        <!-- <button class="button is-success" @click="closeModal">Close</button> -->
        <button class="button is-success" @click="deposit">Deposit</button>
      </footer>
    </div>
  </div>

  <div class="bottom-nav-container">
    <bottomNav />
  </div>
</template>


<script>
import axios from 'axios';
import headerTop from '@/components/headerBar.vue'
import bottomNav from '@/views/bottomNav.vue'

export default {
  components: {
    headerTop,
    bottomNav,

  },
  data()
  {
    return {
      isMenuActive: false,
      isModalActive: false,
      stake: 49, // Initialize stake with 0
      isLoggedIn: false,
      base_url: 'https://www.23bet.pro/',
    };
  },
  created()
  {
    // Check if the user is logged in (e.g., by checking if a JWT token exists)
    const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token
    this.isLoggedIn = !!token;
    console.log('JWT Token:', token);
  },
  methods: {
    toggleMenu()
    {
      this.isMenuActive = !this.isMenuActive;
    },
    openModal()
    {
      this.isModalActive = true;
    },
    closeModal()
    {
      this.isModalActive = false;
    },
    setStake(amount)
    {
      // This method will be called when a list item is clicked
      this.stake = amount; // Set the stake to the selected amount
    },
    deposit()
    {
      // Get the JWT token from your storage (e.g., localStorage or Vuex store)
      const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token

      // Send a POST request to the backend with the deposit amount and the JWT token in the headers
      axios
        .post(this.base_url+'deposit/', {
          amount: this.stake, // Use the deposit amount from your component's data
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
        })
        .then((response) =>
        {
          // Handle the response from the backend, e.g., display a success message
          console.log('Deposit successful', response.data);
        })
        .catch((error) =>
        {
          // Handle any errors, e.g., display an error message
          console.error('Deposit failed', error);
        });
    },
    logout()
    {
      // Get the JWT token from your storage (e.g., localStorage or Vuex store)
      const token = localStorage.getItem('jwt'); // Adjust this according to where you store your token

      // Send a POST request to the backend to perform the logout action
      axios
        .get(this.base_url+'logout/', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
          },
        })
        .then((response) =>
        {
          // Handle the response from the backend, e.g., display a success message
          console.log('Logout successful', response.data);

          // Clear the JWT token from storage to log the user out
          localStorage.removeItem('jwt'); // Adjust this according to where you store your token

          // Optionally, you can redirect the user to the login page
          this.$router.push('/login'); // Adjust the route path as needed
        })
        .catch((error) =>
        {
          // Handle any errors, e.g., display an error message
          console.error('Logout failed', error);
          this.isLoggedIn = false;
        });
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
  z-index: 1000;
  /* Adjust as needed */
}

.modal-backgound {
  background-color: #16202c;
}

.modal-card-body-sample {
  background-color: #16202c !important;
}

/* Default styles for larger screens */
.bottom-nav-container {
  display: none;
  /* Hide the container by default */
}

.stake {}

/* Media query for mobile devices (adjust the max-width as needed) */
@media (max-width: 767px) {
  .bottom-nav-container {
    display: block;
    /* Show the container on mobile devices */
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    /* Adjust as needed */
    color: #fff;
    /* Adjust as needed */
    padding: 10px;
    /* Adjust as needed */
    z-index: 1000;
    /* Adjust as needed */
  }
}


.navbar-item {
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  /* This removes the underline */

}

navbar {
  margin-bottom: 0 !important;
}

.button {
  color: black !important;
  background-color: yellow;
}

.pale {
  text-decoration: muted;
}

.titlee {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.modal-card-foot {
  display: block;
}

#depo {
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

.stak {
  justify-content: space-between;
  border-color: green !important;

}

.coins {
  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: auto;
  margin-bottom: 3rem;
}

.coin {
  background-color: #16202c;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  /* Add this line to change cursor to pointer */
}

.modal-card {
  margin-top: 10rem;
}

@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: #cb0a0a;
    box-shadow: 0 8px 16px rgba(10, 10, 10, .1);
    padding: 0.5rem 0;
    border-radius: 10px;
  }

  .modal-card {
    margin: 0%;
  }

  .navbar-end {}

  .burger {
    margin-right: 1rem;
  }

  .bet {
    margin-right: 75%;
  }
}</style>