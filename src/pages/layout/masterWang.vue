<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Home Odd</th>
          <th>Neutral Odd</th>
          <th>Away Odd</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Datas" :key="item.sport_id">
          <td>{{ item.home_team }}</td>
          <td>{{ item.home_odd }}</td>
          <td>{{ item.neutral_odd }}</td>
          <td>{{ item.away_odd }}</td>
          <td>{{ item.status }}</td>
        </tr>
        <tr v-for="item in Datas" :key="item.sport_id">
          <td>{{ item.away_team }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p v-if="Datas.length === 0">No matches found.</p>
  </div>
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
          .get('http://127.0.0.1:8000/')
          .then((response) => {
            this.Datas = response.data.dataa;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getAirtimes() {
        axios
          .get('http://127.0.0.1:8000/')
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
          const response = axios.post('http://50.116.38.17/credits/', data);
          console.log(response.data);
          this.submitted = true;
        } catch (error) {
          console.error(error);
        }
      },
      postData1() {
        axios.post('http://50.116.38.17/credit_create/', {
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
  
  </style>