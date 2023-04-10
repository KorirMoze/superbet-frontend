<template>
    <div class="registratio bg-#393646 shadow-md shadow-inner">
      <h1>Registration</h1>
      <form @submit.prevent="submit">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required class="px-4 py-3 rounded-full">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      submit() {
        // Handle form submission here
        console.log('Registration submitted');
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      },
    },
  };
  </script>
<style>
.registratio{
    width: 60%;
    margin: auto;
    margin-top: 4rem;
}
body{
    background-color: green!important;
}
</style>  