<template>
    <div class="w-full h-full flex">
      <sideBar :dataOpenSideBar="openSidebar" />
      <div class="w-full h-full">
        <headerTop :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
        <div class="w-full h-[calc(100vh-50px)]">
          <router-view></router-view>
        </div>
      </div>
   
    </div>
    
  </template>
  
  <script>
  import axios from 'axios';
  import headerTop from '../../components/headerBar.vue'
  export default {
    name: 'dropDown',
    components: { headerTop, },
    props: ['title', 'items'],
    data() {
      return {
        Datas: [],
      };
    },
    mounted() {
      this.getDatas();
      this.getAirtimes();
    },
    methods: {
      getDatas() {
        axios
          .get('http://172.233.175.33/')
          .then((response) => {
            this.Datas = response.data.dataa;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getAirtimes() {
        axios
          .get('http://172.233.175.33/')
          .then((response) => {
            this.Airtimes = response.data.dataa;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      postData() {
        try {
          const data = {
            phone: this.phone,
            selected3: this.selected3,
            selected2: this.selected2,
          };
          console.log(data);
          const response = axios.post('https://www.23bet.pro/credits/', data);
          console.log(response.data);
          this.submitted = true;
        } catch (error) {
          console.error(error);
        }
      },
      postData1() {
        axios.post('https://www.23bet.pro/credit_create/', {
          selected3: this.selected3,
          selected2: this.selected2,
        })
          .then((response) => {
            console.log(response);
            this.submitted = true;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      scroll() {
        const element = document.getElementById('contact-me');
        element.scrollIntoView({ behavior: 'smooth' });
      },
      toggleActive() {
        this.isActive = !this.isActive;
      },
      toggle1Active() {
        this.isActive = !this.isActive;
        this.isClicked = !this.isClicked;
      },
      toggleActivate() {
        this.isClicked = true;
        this.isActive = true;
      },
    },
  };
  </script>
  
  <style>
  .navbar{
    margin-bottom: 0 !important;
  }
  </style>