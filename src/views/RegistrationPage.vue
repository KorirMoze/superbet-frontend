<template>
<headerTop />

    <div class="section section-signup" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg'); background-size: cover; background-position: top center; min-height: 700px;">
      <div class="container">
        <div class="row">
          <div class="card card-signup" data-background-color="orange">
            <form class="form" @submit.prevent="submitForm">
              <div class="card-header text-center">
                <h3 class="card-title title-up">Sign Up</h3>
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
                  <div class="input-group-prepend">
      
                  </div>
                  <input type="text" class="form-control" placeholder="First Name..." v-model="fname" required>
                </div>
                <div class="input-group no-border">
                  <div class="input-group-prepend">
       
                  </div>
                  <input type="text" placeholder="Last Name..." class="form-control" v-model="sname" required>
                </div>
                <div class="input-group no-border">
                  <div class="input-group-prepend">
          
                  </div>
                  <input type="text" class="form-control" placeholder="Email..." v-model="email" required>
                </div>

                <div class="input-group no-border">
                  <div class="input-group-prepend">
            
                  </div>
                  <input type="text" class="form-control" placeholder="Phone Number..." v-model="phoneNumber" required>
                </div>
                <div class="input-group no-border">
                  <div class="input-group-prepend">
        
                  </div>
                  <input type="text" class="form-control" placeholder="Password..." v-model="password" required>
                </div>
                <div class="input-group no-border">
                  <div class="input-group-prepend">
      
                  </div>
                  <!-- <input type="text" class="form-control" placeholder="Date Of Birth...2020-12-23" v-model="dob" required> -->
                </div>
                <p v-if="withdrawalMessage" class="">{{ withdrawalMessage }}</p>

              </div>
              <div class="card-footer text-center">
                <button  @click="postData" class="btn btn-neutral btn-round btn-lg">Register</button>
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
  import headerTop from '@/components/headerBar.vue'

  export default {
    components: {
      headerTop,
    },
    data() {
      return {
      fname: '',
      sname: '',
      phoneNumber: '',
      email: '',
      password: '',
      gender: '',
      dob: '',
      base_url: '',
      withdrawalMessage: null,
      };
    },
    methods: {

      postData() {
  // Trim input values
  this.fname = this.fname.trim();
  this.sname = this.sname.trim();
  this.email = this.email.trim();
  this.phoneNumber = this.phoneNumber.trim();
  this.password = this.password.trim();
  this.dob = this.dob.trim();

  // Check if all required fields are filled in
  if (!this.fname || !this.sname || !this.email || !this.phoneNumber || !this.password ) {
    console.log('All fields are required');
    this.withdrawalMessage = "Check your Registration details again"
    return;
  }

  // Continue with the API call
  axios
    .post(this.base_url+'user/', {
      firstname: this.fname,
      secondname: this.sname,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      gender: this.gender, // You might want to make sure that gender is set correctly
     // dob: this.dob,
    }, { withCredentials: false })
    .then((response) => {
      console.log('Registration successful:', response.data);
      this.submitted = true;

    // Navigate to the login page
    this.$router.push({ name: 'login' });
    })
    .catch((error) => {
      console.error('Registration failed:', error);
      this.errorMessage = error.message || 'Oops! Something went wrong.';
      this.withdrawalMessage = "Registration Failed check your credetials again"
    });
}
,


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
