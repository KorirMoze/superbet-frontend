<template>
    <div class="registratio bg-gray-700 shadow-md shadow-inner rounded-lg">
    <div class="reg">
        <h1>Registration</h1>
        <form @submit.prevent="submit" method="POST">
           
          <!-- <div>
            <label for="username" class="ml-0">User Name</label>
            <input type="text" id="username"  v-model="userName" required class="px-4 py-3 rounded-lg pa">
          </div> -->

          <div>
            <label for="firstName" class="ml-0 ">First Name</label>
            <input type="text" class="pa px-4 py-3 rounded-lg bg-slate-500" id="fname" v-model="fname" required>
          </div>
          <div>
            <label for="secondName" class="ml-0">Second Name</label>
            <input type="text" class="pa px-4 py-3 rounded-lg bg-slate-500" id="sname" v-model="sname" required>
          </div>
          <div>
            <label for="phoneNumber" class="ml-0">Phone Number</label>
            <input type="text" class="pa px-4 py-3 rounded-lg bg-slate-500" id="phoneNumber" v-model="phoneNumber" required>
          </div>
          <div>
            <label for="email" class="ml-0">Email</label>
            <input type="email" id="email" class="pa px-4 py-3 rounded-lg bg-slate-500" v-model="email" required>
          </div>
          <div>
            <label for="password" class="ml-0">Password</label>
            <input type="password" class="pa px-4 py-3 rounded-lg bg-slate-500 mb-3" id="password" v-model="password" required>
          </div>
          <div>
            <label for="gender" class="ml-0">Gender</label>
            <select id="gender" v-model="gender" class="pa px-4 py-3 rounded-lg bg-slate-500" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="dob" class="ml-0">Date of Birth</label>
            <input type="date" class="pa px-4 py-3 rounded-lg bg-slate-500" id="dob" v-model="dob" required>
          </div>
          <!-- <button type="submit" class=" px-4 py-3 rounded-lg">Register</button> -->
          <button  type="submit" @click="postData" class="px-4 py-3 text-md text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Register</button>
  
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
      gender: '',
      dob: ''
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
    postData() {
  if (!this.fname || !this.email || !this.password || !this.phoneNumber || !this.gender || !this.dob) {
    console.log('All fields are required');
    return;
  }
  
  axios.post('http://127.0.0.1:8000/user/', {
  firstname: this.fname,
  secondname: this.sname,
  email: this.email,
  password: this.password,
  phoneNumber: this.phoneNumber,
  gender: this.gender,
  dob: this.dob,
}, { withCredentials: false })
.then(response => {
  console.log(response.data);
  this.submitted = true;
})
.catch(error => {
  console.error(error);
  this.errorMessage = error.message || 'Oops! Something went wrong.';
});

},


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