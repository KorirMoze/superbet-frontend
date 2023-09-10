<template>

    <div class="section section-signup" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
      <div class="container">
        <div class="row">
          <div class="card card-signup" >
            <form class="form" method="" action="">
              <div class="card-header text-center">
                <h3 class="card-title title-up">Sign In</h3>
                <div class="social-line">
                  <a href="#pablo" class="btn1 btn-neutral btn-facebook btn-icon btn-round">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#pablo" class="btn1 btn-neutral btn-twitter btn-icon btn-lg btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#pablo" class="btn1 btn-neutral btn-google btn-icon btn-round">
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
              <div class="card-footer ">
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


<style scoped>

@media screen and (min-width: 992px){
  

  .section{
    height: 100% !important;
  }
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
  .row{
    width: 60%;
    margin: auto;
    text-align: center;
    color: #fff;
  }
  .container{
    margin-top: 5rem;
    color: #fff;
  }
  .card{
    background-color: #f96332;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .input-group{
    background-color: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    margin-bottom: 2rem;
    margin-top: 2rem;
  
  }
  .form-control{
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff !important ;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
  }
  .title-up{
    color: #fff;
    padding-left: 1rem;
  }
  .social-line{
    text-align: right !important;
    margin-left: 2rem;
    color: aqua;
  }
  .card-footer{
    align-items: center !important;
    margin: auto;
  }
  .btn{
    margin: auto;
  }
  .btn {
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 15px;
    background: #47d934;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    margin-top: 1rem;
  }

  .btn:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
}

@media screen and (max-width: 992px){
  .section{
    height: 100% !important;
  }
  .card{
    background-color: #f96332;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .row{
    width: 100%;
    margin: auto;
    text-align: center;
    color: #fff;
  }
  .container{
    margin-top: 5rem;
    color: #fff;
  }
  .title-up{
    color: #fff;
    padding-left: 1rem;
  }
  .social-line{
    text-align: right !important;
    margin-left: 2rem;
    color: aqua;
  }
  .input-group{
    background-color: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    margin-bottom: 2rem;
    margin-top: 2rem;
  
  }
  .form-control{
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff !important ;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
  }
  .btn {
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 15px;
    background: #47d934;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    margin-top: 1rem;
  }

  .btn:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
  .btn{
    margin: auto;
  }
}
</style>  