<template>
    <div>
      <h1>Account Details</h1>
      <template v-if="Object.keys(gambler).length !== 0">
        <!-- <pre>{{ JSON.stringify(gambler, null, 2) }}</pre> -->
        <p>Email: {{ gambler.data && gambler.data.email }}</p>
        <p>First Name: {{ gambler.data && gambler.data.first_name }}</p>
        <p>Last Name: {{ gambler.data && gambler.data.last_name }}</p>
        <p>Date of Birth: {{ gambler.data && gambler.data.date_of_birth }}</p>
        <p>Gender: {{ gambler.data && gambler.data.gender }}</p>
        <p>Phone Number: {{ gambler.data && gambler.data.phone_number }}</p>
        <p>Account Balance: {{ gambler.data && gambler.data.acc_balance }}</p>
      </template>
      <template v-else>
        <p>Loading...</p>
      </template>
    </div>
  </template>
  
  
  <script>
  import axios from "axios";
  
  export default {
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
    },
  };
},
    mounted() {
      const token = localStorage.getItem("jwt");
      console.log(token)
      if (token) {
        axios
          .get("http://127.0.0.1:8000/account_details/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            this.gambler = response.data;
            console.log(this.gambler);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("No token found");
      }
    },
  };
  </script>
  