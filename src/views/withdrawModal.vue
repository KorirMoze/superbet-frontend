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
    data() {
      return {
        isModalActive: false,
        withdrawalAmount: 50, // Initialize with a default value or leave it empty
      };
    },
    methods: {
      openModal() {
        this.isModalActive = true;
      },
      closeModal() {
        this.isModalActive = false;
        window.location.reload();
      },
      // withdrawFunds() {
      //   // Implement your withdrawal logic here
      //   // You can access the withdrawal amount with this.withdrawalAmount
      //   // For example, you can send a request to your server to process the withdrawal
      //   // and handle success or error cases accordingly.
  
      //   // After handling the withdrawal logic, you can close the modal if needed:
      //   this.closeModal();
      // },
      withdrawFunds() {
      const token = localStorage.getItem("jwt"); // Get the JWT token
      const amount = this.withdrawalAmount; // Get the withdrawal amount from the data property

      // Check if a token exists and if the withdrawal amount is valid
      if (!token || amount <= 0) {
        console.error("Invalid withdrawal request.");
        return;
      }

      // Send a POST request to your backend API to initiate the withdrawal
      axios
        .post("https://www.23bet.pro/withdraw/", { amount }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Check if the response contains a 'data' property
          if (response.data && response.data.data) {
            // Handle a successful withdrawal response (e.g., display a success message)
            console.log("Withdrawal successful", response.data.data);

            this.closeModal();
          } else {
            // Handle unexpected response format
            console.error("Invalid response format:", response);
          }
        })
        .catch((error) => {
          // Handle any errors (e.g., display an error message)
          console.error("Withdrawal failed", error);
        });
    },

    },
  };
  </script>
    