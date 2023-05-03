<template>
    <div class="registratio bg-gray-700 shadow-md shadow-inner rounded-lg">
    <div class="reg">
        <h1>Login</h1>
        <form @submit.prevent="submit" method="POST">
           
          <!-- <div>
            <label for="username" class="ml-0">User Name</label>
            <input type="text" id="username"  v-model="userName" required class="px-4 py-3 rounded-lg pa">
          </div> -->

          <!-- <div>
            <label for="firstName" class="ml-0 ">First Name</label>
            <input type="text" class="pa px-4 py-3 rounded-lg bg-slate-500" id="fname" v-model="fname" required>
          </div> -->
          <div>
            <label for="userName" class="ml-0">User Name</label>
            <input type="text" class="pa px-4 py-3 rounded-lg bg-slate-500" id="sname" v-model="userName" required>
          </div>
          <!-- <div>
            <label for="phoneNumber" class="ml-0">Phone Number</label>
            <input type="tel" class="pa px-4 py-3 rounded-lg bg-slate-500" id="phoneNumber" v-model="phoneNumber" required>
          </div> -->
          <!-- <div>
            <label for="email" class="ml-0">Email</label>
            <input type="email" id="email" class="pa px-4 py-3 rounded-lg bg-slate-500" v-model="email" required>
          </div> -->
          <div>
            <label for="password" class="ml-0">Password</label>
            <input type="password" class="pa px-4 py-3 rounded-lg bg-slate-500 mb-3" id="password" v-model="password" required>
          </div>
          <!-- <button type="submit" class=" px-4 py-3 rounded-lg">Register</button> -->
          <button  type="submit" @click="postData" class="px-4 py-3 text-md text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Login</button>
  
        </form>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
      fname: '',
      sname: '',
      phoneNumber: '',
      email: '',
      password: '',
      };
    },
    methods: {
    //   submit() {
    //     // Handle form submission here
    //     console.log('Registration submitted');
    //     console.log('Username:', this.username);
    //     console.log('Email:', this.email);
    //     console.log('Password:', this.password);
    //   },
//     postData() {
//   if (!this.userName || !this.password) {
//     console.log('All fields are required');
//     return;
//   }
  
//   axios.post('http://127.0.0.1:8000/login/', {
// //   firstname: this.fname,
// //   email: this.email,
//   password: this.password,
//   username: this.userName,
// }, { withCredentials: false })
// .then(response => {
//   if (response.data.message === 'Login successful') {
//       // Redirect to the home page
//       this.$router.push({ path: '/' });
//     } else {
//       console.log('Login failed');
//     }
//   })
// .catch(error => {
//   console.error(error);
//   this.errorMessage = error.message || 'Oops! Something went wrong.';
// });

// },
postData() {
  if (!this.userName || !this.password) {
    console.log('All fields are required');
    return;
  }
  
  axios.post('http://127.0.0.1:8000/login/', {
    password: this.password,
    username: this.userName,
  }, { withCredentials: false })
  .then(response => {
    if (response.data.message === 'Login successful') {
      // Save the JWT token to local storage
      localStorage.setItem('jwt', response.data.token);
      
      // Redirect to the home page
      this.$router.push({ path: '/' });
    } else {
      console.log('Login failed');
    }
  })
  .catch(error => {
    console.error(error);
    this.errorMessage = error.message || 'Oops! Something went wrong.';
  });
}


    },
  };
  </script>
<style>
.registratio{
    background-color: green!important;
    width: 30%;
    margin: auto;
    margin-top: 4rem;
}
body{
    
    color: white !important;
    font-family: font-serif;
}
label{
    margin-left: 0 !important;
    font-size: 1.5rem;
    color: white;
    align-items: pull-left;
    text-align: left;
}
.pa{
    width: 100% !important;
    
}
.reg{
    width: 80%;
    margin: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
</style>  