<template>
    <div class="account">
      <h1>Your Account</h1>
      <div class="data" v-if="Object.keys(gambler).length !== 0">
        <!-- <pre>{{ JSON.stringify(gambler, null, 2) }}</pre> -->
        <p class="detai">Email: {{ gambler.data && gambler.data.email }}</p>
        <p class="detai">First Name: {{ gambler.data && gambler.data.first_name }}</p>
        <p class="detai">Last Name: {{ gambler.data && gambler.data.last_name }}</p>
        <p class="detai">Date of Birth: {{ gambler.data && gambler.data.date_of_birth }}</p>
        <p class="detai">Gender: {{ gambler.data && gambler.data.gender }}</p>
        <p class="detai">Phone Number: {{ gambler.data && gambler.data.phone_number }}</p>
        <p class="detai">Account Balance: {{ gambler.data && gambler.data.acc_balance }}</p>
      </div>
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
 <style scoped>
 .account{
  background-color: #918f8f ;
  height: 100%;
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
  width: 60%;
  margin: auto;
 }
 .detai{
  background-color: #000000!important;
  padding-bottom: 3rem;
  padding-top: 3rem;
  border-radius: 10px;
  font-size: 1.5rem;
 }
</style>
