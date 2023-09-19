<template>
  <div class="bdy">
    <div class="tit">Today Games</div>

 


    <div class="row">

      <div class="col-12 col-lg-8 col-md-8 col-sm-8 ty">

          <div class="gms">
   
            <div class="games" v-if="games && games.length > 0">
              
              <div class="whole">
                <div class="time">{{start_date}} {{ start_time_formatted }}</div>
                <div class="homeaway"><div class="homei">{{ games[0].fields.home_team }}</div>
                <div class="away" >{{ games[0].fields.away_team }}</div></div>
                  <div class ='prebet'>
            
                    <span><button class="hom" @click="addToBetslip1(games[0], 'home_odd')">{{ games[0].fields.home_odd }}</button></span>
                    <span><button class="hom1" @click="addToBetslip1(games[0], 'neutral_odd')">{{ games[0].fields.neutral_odd }}</button></span>
                    <span> <button class="hom2" @click="addToBetslip1(games[0], 'away_odd')">{{ games[0].fields.away_odd}}</button></span>

                        <div >

                            <div>
              
                              <router-link :to="'/more/'" @click="sendParentId(games[0].fields.parent_match_id)" class="more">
                                +92 
                              </router-link>
                              <!-- <div class="" ><span>{{ item.parent_match_id }}</span> </div> -->
                            </div>
                      </div>
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
          
                          <span><button class="hom" @click="addToBetslip(item, 'home_odd')">{{ item.home_odd }}</button></span>
                          <span><button class="hom1" @click="addToBetslip(item, 'neutral_odd')">{{ item.neutral_odd }}</button></span>
                          <span> <button class="hom2" @click="addToBetslip(item, 'away_odd')">{{ item.away_odd }}</button></span>

                              <div >

                                  <div>
                    
                                    <router-link :to="'/game/'" @click="sendParentId(item.parent_match_id)" class="more">
                                      +92 
                                    </router-link>
                                    <!-- <div class="" ><span>{{ item.parent_match_id }}</span> </div> -->
                                  </div>
                            </div>
                      </div>
      
                      
                  </div>
                
                
                </div>
            </div>
            
            </div>
          </div>      
      </div>

        <div class="col-12 col-lg-4 col-md-4 col-sm-4">
            <div class="betsslip">
                <div class="we">
                <button class="btn1-betslip">Your Betslip</button>
                <button class="btn1-betslip1">Your Betsrlip</button>
              </div>
              <div>
              <betterSlip :betslip="betslip" @update:betslip="updateBetslip" ></betterSlip>
              </div>
            </div>
        </div>
    </div>
  </div>



</template>
<script>
import axios from 'axios';
import betterSlip from "@/components/betterSlip.vue";
import router from '@/router' // eslint-disable-line no-unused-vars

// import masterWang from "@/pages/betterSlip.vue";
export default {
  components: {
    betterSlip,
    // masterWang
  },
  name: 'dropDown',
  
  props: ['title', 'items','gameId'],
  data() {
    return {
      Datas: [],
      betslip: [],
      games: [],
      start_date: [],
      start_time_formatted: [],
    };
  },
  created() {
  const savedBetslip = localStorage.getItem('betslip');
  if (savedBetslip) {
    this.betslip = JSON.parse(savedBetslip);
  }
},
  mounted() {
    this.getDatas();
    this.getAirtimes();
    this.getcustom();
    // console.log(this.betslip);

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
    getcustom() {
  axios
    .get('http://127.0.0.1:8000/custom/')
    .then((response) => {
      const data = JSON.parse(response.data[0]);
      this.games = data;
      // Check if data is an array and has at least one element
      if (Array.isArray(data) && data.length > 0) {
        // Access the first element of the array
        const firstItem = data[0];

        // Check if the first item has 'fields' property
        if (firstItem.fields && firstItem.fields.start_time) {
          // Assign 'start_time' to this.start_time after formatting
          this.start_time = new Date(firstItem.fields.start_time);
          this.start_date = this.formatDate(this.start_time);
          this.start_time_formatted = this.formatTime(this.start_time);
          
          // Log the 'start_date' and 'start_time_formatted' values
          console.log(this.start_date);
          console.log(this.start_time_formatted);
        } else {
          console.log('The expected data structure is not present in the response.');
        }
      } else {
        console.log('No data found in the response.');
      }
    })
    .catch((error) => {
      console.log(error);
    });
},

  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  },



    addToBetslip1(game, selection) {
  if (!game || !game.fields) {
    console.error("Invalid game data:", game);
    return;
  }

  console.log("Clicked on game: ", game);

  // Check if there's already a selection for this team
  const existingSelectionIndex = this.betslip.findIndex(
    (betslipItem) => betslipItem.match === game.fields.home_team + " vs " + game.fields.away_team
  );

  // If there is an existing selection, remove it before adding the new one
  if (existingSelectionIndex !== -1) {
    this.betslip.splice(existingSelectionIndex, 1);
  }

  let odd;
  switch (selection) {
    case "home_odd":
      odd = game.fields.home_odd;
      break;
    case "neutral_odd":
      odd = game.fields.neutral_odd;
      break;
    case "away_odd":
      odd = game.fields.away_odd;
      break;
    default:
      break;
  }

  const betslipItem = {
    match: game.fields.home_team + " vs " + game.fields.away_team,
    game_id: game.pk, // Use game.pk to access the game_id property
    selection,
    odds: odd,
  };

  this.betslip.push(betslipItem);
  localStorage.setItem('betslip', JSON.stringify(this.betslip));
},


    addToBetslip(item, selection) {
    console.log("Clicked on item: ", item);
  

  // Check if there's already a selection for this team
  const existingSelectionIndex = this.betslip.findIndex(
    (betslipItem) => betslipItem.match === item.home_team + " vs " + item.away_team
  );

  // If there is an existing selection, remove it before adding the new one
  if (existingSelectionIndex !== -1) {
    this.betslip.splice(existingSelectionIndex, 1);
  }

  let odd;
  switch (selection) {
    case "home_odd":
      odd = item.home_odd;
      break;
    case "neutral_odd":
      odd = item.neutral_odd;
      break;
    case "away_odd":
      odd = item.away_odd;
      break;
    default:
      break;
  }

  const betslipItem = {
    match: item.home_team + " vs " + item.away_team,
    game_id: item.game_id, // Add the game_id property
    selection,
    odds: odd,
  };

  this.betslip.push(betslipItem);
  localStorage.setItem('betslip', JSON.stringify(this.betslip));
  
},
updateBetslip(updatedBetslip) {
      this.betslip = updatedBetslip;
    },

 placeBet() {
  console.log("Entering placeBet() function...");
  console.log("Placing bet:", this.betslip);
  
  // Place the bet using the betslip data
  // ...

  // Once the bet is placed, clear the betslip
  this.betslip = [];

  // Add a console log to check if this line is reached
  console.log("Removing from local storage...");

  // Remove the 'betslip' item from local storage
  localStorage.removeItem('betslip');
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

    sendParentId(parent_match_id) {
      axios.post('http://127.0.0.1:8000/bet2/', { parent_match_id })
        .then(response => {
          console.log('Parent ID sent to backend:', parent_match_id);
          console.log('Response from server:', response.data);
        })
        .catch(error => {
          console.error('Error sending parent ID to backend:', error);
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
.bdy {
  background-color: #918f8f !important;

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
    color: #ffff;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 8px;
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
  left: 583px;
  top: 562.71px;
  margin-right: 1.2rem;
  background: rgba(217, 217, 217, 0.6);
  border-radius: 9.34191px;
  color: #fff !important;
  }
  .hom1{
  padding: 0 !important;
  margin-right: 1.2rem;
  width: 140.13px;
  height: 60.72px;
  left: 751px;
  top: 562.71px;
  
  background: rgba(217, 217, 217, 0.6);
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
    display: flex;
    justify-content: space-between;
  }
  .homeaway{
    display: flex;
    flex-direction: column;
    
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
    color: #ffff;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
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

