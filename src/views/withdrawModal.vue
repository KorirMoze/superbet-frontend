<template>
  <div>
    <!-- Trigger Button -->
    <button class="button is-primary" @click="openModal">Withdraw Funds</button>

    <!-- Modal -->
    <div :class="['modal', { 'is-active': isModalActive }]">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Withdraw Funds</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <!-- Withdrawal form goes here -->
          <div class="field">
            <label class="label">Amount to Withdraw</label>
            <div class="control">
              <input class="input" type="number" v-model="withdrawalAmount" placeholder="Enter withdrawal amount">
            </div>
          </div>
          <p v-if="withdrawalMessage" class="has-text-danger">{{ withdrawalMessage }}</p>
        </section>
        

        <footer class="modal-card-foot">

          <button class="button is-success" @click="withdrawFunds">Withdraw</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data()
  {
    return {
      isModalActive: false,
      withdrawalAmount: 1000, // Initialize with a default value or leave it empty
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

      withdrawalMessage: null,
    };
  },



  mounted()
  {
    const token = localStorage.getItem("jwt");
     console.log(token)
    if (token)
    {
      axios
        .get(this.base_url+'account_details/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) =>
        {
          //  console.log(response.data);
          this.gambler = response.data;
          this.gambler.acc_balance = response.data.acc_balance;
          this.fetchBets();
      

        })
        .catch((error) =>
        {
          console.log(error);
        });
    } else
    {
      console.log("No token found");
    }
  },

  methods: {
    openModal()
    {
      this.isModalActive = true;
    },
    closeModal()
    {
      this.isModalActive = false;
      window.location.reload();
    },




    withdrawFunds()
    {
      const token = localStorage.getItem("jwt"); // Get the JWT token
      const amount = this.withdrawalAmount; // Get the withdrawal amount from the data property
      // Check if a token exists and if the withdrawal amount is valid
      if (!token)
      {
        console.error("Invalid withdrawal request.");
        this.withdrawalMessage = `You Must Be Logged in First.`;

        return;
      }
      if (this.gambler.data.acc_balance <this.withdrawalAmount) {
        this.withdrawalMessage = `Withdrawal amount must be at least 1000.`;
        return;
      }
      if (this.gambler.data.acc_balance > 98)
      {
        // Send a POST request to your backend API to initiate the withdrawal
        axios
          .post(this.base_url+'withdraw/', { amount }, {
            headers: {
              Authorization: `Bearer ${token}`,
              
            },
          })
    

          .then((response) =>
          {
            // Check if the response contains a 'data' property
            if (response.data && response.data.data)
            {
              // Handle a successful withdrawal response (e.g., display a success message)
              console.log("Withdrawal successful", response.data.data);

              this.closeModal();
            } else
            {
              // Handle unexpected response format
              console.error("Invalid response format:", response);
            }
          })

          .catch((error) =>
          {
            // Handle any errors (e.g., display an error message)
            console.error("Withdrawal failed", error);
          });
      }
      else
      {
        this.withdrawalMessage = "Withdrawal amount must be at least 1000.";
        return;
      }
    }
  },
};

</script>
    