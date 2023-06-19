<template>

    <div class="section section-signup" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
      <div class="container">
        <div class="row">
          <div class="card card-signup" data-background-color="orange">
            <form class="form" method="" action="">
              <div class="card-header text-center">
                <h3 class="card-title title-up">Sign Up</h3>
                <div class="social-line">
                  <a href="#pablo" class="btn btn-neutral btn-facebook btn-icon btn-round">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#pablo" class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#pablo" class="btn btn-neutral btn-google btn-icon btn-round">
                    <i class="fab fa-google-plus"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">

       
                <div class="input-group no-border">
                  <!-- <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div> -->
                  <input type="text" class="form-control" placeholder="Username..." v-model="userName" required>
                </div>

  
                <div class="input-group no-border">
                  <!-- <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div> -->
                  <input type="text" class="form-control" placeholder="Password..." v-model="password" required>
                </div>
       
                <!-- If you want to add a checkbox to this form, uncomment this code -->
                <!-- <div class="checkbox">
                    <input id="checkboxSignup" type="checkbox">
                      <label for="checkboxSignup">
                      Unchecked
                      </label>
                    </div> -->
              </div>
              <div class="card-footer text-center">
                <button href="#pablo" @click="postData" class="btn btn-neutral btn-round btn-lg">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class=" container ">
        <nav>
  
        </nav>
 
      </div>
    </footer>

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