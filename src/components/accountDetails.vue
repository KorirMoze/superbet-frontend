<template>
    <div>
      <h1>Account Details</h1>
      <p>Email: {{ gambler.email }}</p>
      <p>First Name: {{ gambler.first_name }}</p>
      <p>Last Name: {{ gambler.last_name }}</p>
      <p>Date of Birth: {{ gambler.date_of_birth }}</p>
      <p>Gender: {{ gambler.gender }}</p>
      <p>Phone Number: {{ gambler.phone_number }}</p>
      <p>Account Balance: {{ gambler.acc_balance }}</p>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
  
    export default {
      data() {
        return {
          gambler: {},
        };
      },
      mounted() {
        const token = localStorage.getItem('jwt');
        if (token) {
          axios.get('http://127.0.0.1:8000/account_details/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              this.gambler = response.data;
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log('No token found');
        }
      },
    };
  </script>
  