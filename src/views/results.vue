<template>
  <div class="nav-topp">
    <headerTop />

  </div>
    <div class="bdy">
      
      <div class="row">
  
        <div class="col-12 col-lg-8 col-md-8 col-sm-8 ty">
  
            <div class="gms">
              
              <div class="games" v-if="games && games.length > 0">
                <div class="whole">
                  <div class="time">
                    {{ games.start_time }}
                  </div>
                  <div class="homeaway" v-if="games[0] && games[0].fields">
                    <div class="homei">{{ games[0].fields.home_team }}</div>
                    <div class="homei">{{ games[0].fields.away_team }}</div>
                  </div>
                  <div class="prebet" v-if="games[0] && games[0].fields">
                    <span><button class="hom11">{{ games[0].fields.home_goals || 'N/A' }}</button></span>
                    <span><button class="hom11">{{ games[0].fields.away_goals || 'N/A' }}</button></span>
                    <span><button class="hom21">{{ games[0].fields.winner || 'N/A' }}</button></span>
                  </div>
                  <!-- Add more elements to display other properties as needed -->
                </div>
              </div>
           
            


                <div class="games" v-for="item in Datas" :key="item.sport_id">
                  <div>
        
                  
                      <div class="whole">
                          <div class="time">
                            {{ item.start_time }}
                          </div>
                          <div class="homeaway">
                            <div class="homei">
                              {{ item.home_team }} 
                            </div>
                        
                          <div class="away">{{ item.away_team }} </div> 
                          <div class="away" style="display: none;">{{ item.game_id }}</div>
        
  
                      </div>
                      <div class="">
                        <div class ='prebet'>
            
                            <span><button class="hom11" >{{ item.home_goals }}</button></span>
                            <span><button class="hom11" >{{ item.away_goals }}</button></span>
                            <span> <button class="hom21">{{ item.winner }}</button></span>
  
 
                        </div>
        
                        
                    </div>
                  
                  
                  </div>
              </div>
              
              </div>
            </div>      
        </div>
  

      </div>
    </div>
  
  
  <div class="bottom-nav-container">
  <bottomNav />
</div>
  </template>
  <script>
  import axios from 'axios';
  import headerTop from '@/components/headerBar.vue'
  import bottomNav from '@/views/bottomNav.vue'

  
  export default {
    components: {
      headerTop,
      bottomNav
    },

    name: 'dropDown',
    
    props: ['title', 'items','gameId'],
    data() {
      return {
        Datas: [],
        betslip: [],
        games: [],
        base_url: 'https://www.23bet.pro/',
      };
    },

    mounted() {
      this.getDatas();
      this.getcustom() ;

    
  
    },
    methods: {
      getDatas() {
        axios
          .get(this.base_url+'results')
          .then((response) => {
            this.Datas = response.data;
          
          })
          .catch((error) => {
            console.log(error);
          });
      },
      
      getcustom() {
      axios
        .get(this.base_url+'custom-results/')
        .then((response) => {
          const data = JSON.parse(response.data[0]);
          this.games = data;
          console.log(data)
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
  <style scoped>

.nav-topp {
   
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1000; /* Adjust as needed */
 }

/* Default styles for larger screens */
.bottom-nav-container {
 display: none; /* Hide the container by default */
}

/* Media query for mobile devices (adjust the max-width as needed) */
@media (max-width: 767px) {
 .bottom-nav-container {
   display: block; /* Show the container on mobile devices */
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: #000; /* Adjust as needed */
   color: #fff; /* Adjust as needed */
   padding: 10px; /* Adjust as needed */
   z-index: 1000; /* Adjust as needed */
 }
}

  .bdy {
    margin-bottom: 8rem;
    margin-top: 8rem;
  }
  @media screen and (min-width: 992px){
    .betsslip{
      background-color: #000000;
      border-radius: 8.21818px;
      color: #fff;
    }
    body{
      background-color: #232323;
    }
    .tit{
      background-color: #000000;
      padding-top: 1rem;
      padding-bottom: 1rem;
      color: #fff;
      font-size: 2rem;
      width: 100% !important;
      text-align: left;
     
    }
    .gms{
    
    }
    .whole{
      background-color: #000000;
      color: #ffd000;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 8px;
      justify-content: space-between;
      border-radius: 15px;
    }
    .btn1-betslip1{
    
    width: 50%;
    height: 56.71px;
    
    color: #fff;
    background-color: #000000;
    border-radius: 0px 8.21818px 0px 0px;
    }
    .btn1-betslip{
      color: #fff;
    width: 50%;
    height: 56.71px;
    
    
    background: #1EBA01;
    border-radius: 8.21818px 0px 0px 0px;
    }
    .bet3{
    position: absolute;
    width: 428px;
    height: 110px;
    left: 1269px;
    top: 223px;
    
    background: rgba(217, 217, 217, 0.15);
    border-radius: 10px;
    }
    .row{
      width: 80%;
      margin-top: 1rem;
      margin: auto;
      margin-top: 1rem;
    }
    .we{
      display: flex;
      
    }
    .container{
      margin: auto;
      width: 100%;
    }
    
    .hom{
    padding: 0 !important;
    width: 140.13px;
    height: 60.72px;
   
    margin-right: 1.2rem;
    background: rgba(217, 217, 217, 0.6);
    border-radius: 9.34191px;
    color: #fff !important;
    }
    .hom11{
    padding: 0 !important;
    margin-right: 1.2rem;
    width: 1rem;
    height: 60.72px;
 
    
    border-radius: 9.34191px;
    }
    .hom2{
    padding: 0 !important;
    margin-right: 1.2rem;
    width: 140.13px;
    height: 60.72px;
    
    margin-right: 2rem !important;
    background: rgba(217, 217, 217, 0.6);
    border-radius: 9.34191px;
    }
    .games{
    
    left: 166px;
    background-color: white;
    
    border-radius: 9.84962px;
    
    }
    .prebet{
        margin-right: 4rem;
    }
    .homeaway{
      display: flex;
    
      
    }
    .homei{
    
    width: 139px;
    height: 23.35px;
    left: 361.02px;
    top: 558.77px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14.9471px;
    line-height: 175%;
    /* or 26px */
    
    letter-spacing: 0.01em;
    
    color: #fff !important;
    }
    .away{
    
    width: 139px;
    height: 26px;
    left: 361.02px;
    
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14.9471px;
    line-height: 175%;
    /* or 26px */
    letter-spacing: 0.01em;
    color: #fff !important;
    }
    .whole{
      display: flex;
      padding-top: 1.7rem;
      padding-bottom: 2.0rem;
      margin-bottom: 1.5rem;
      padding-left: 1rem;
    }
    
    .time{
    
    height: 25.46px;
    left: 194.56px;
    top: 594.09px;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16.8154px;
    line-height: 25px;
    /* identical to box height */
    
    text-align: center;
    letter-spacing: 0.01em;
    
    color: #fff !important;
    }
    .more{
    
      width: 5.5rem !important;
     
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 16.8154px;
      line-height: 25px;
      text-align: center;
      letter-spacing: 0.01em;
      
      color: #F9F9F9;
      
      background: #1EBA01;
      border-radius: 10px;
      display: flex;
      justify-content: center;
    }
  }
  
  @media screen and (max-width: 992px) {
    .row{
      width: 98% !important;
      margin: auto;
    }
    .ty {
      flex-direction: column;
    }
    
    .col-12.col-lg-8,
    .col-12.col-lg-4 {
      width: 100%;
    }
    .betsslip{
      background-color: #000000;
      border-radius: 8.21818px;
      color: #fff;
    }
    body{
      background-color: #232323;
    }
    .gms{
      padding-top: 1rem;
    }
    .whole{
      padding-top: 1.7rem;
      padding-bottom: 2.0rem;
      margin-bottom: 1.5rem;
      background-color: #000000;
      color: #ffd000;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1.5rem;
      border-radius: 15px;

    }
    .time{
    
    }
    .prebet{
      display: flex;
      justify-content: space-between;
    }
    .hom{
      padding: 0 !important;
      margin-right: 1rem;
      width: 4rem;
      height: 2rem;
      background: rgba(217, 217, 217, 0.6);
      border-radius: 9.34191px;
      color: #fff !important;
      }
    .hom1{
      padding: 0 !important;
      margin-right: 1rem;
      width: 4rem;
      height: 2rem;  
      background: rgba(217, 217, 217, 0.6);
      border-radius: 9.34191px;
      }
  
      .hom2{
        padding: 0 !important;
        margin-right: 1rem;
        width: 4rem;
        height: 2rem; 
       
        background: rgba(217, 217, 217, 0.6);
        border-radius: 9.34191px;
        }
        .more{
    
          width: 4rem !important;
         
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 16.8154px;
          line-height: 25px;
          text-align: center;
          letter-spacing: 0.01em;
          
          color: #F9F9F9;
          
          background: #1EBA01;
          border-radius: 10px;
          display: flex;
          justify-content: center;
        }
  }
  </style>
  
  