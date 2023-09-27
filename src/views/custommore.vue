<template>
<headerTop />
      <div class="bdy">
        <div class="row">
      
          <div class="col-12 col-lg-8 col-md-8 col-sm-8 ty">
              <!-- <div class="bts"><button class="back">Back</button></div> -->
             
              <div class="rect">
                <h3 class="tit">{{ odd_key }}</h3>
          
                <div v-if="games && games.length > 0">
                    <ul >
                      <h2 style="padding-top: 1rem;">BOTH TEAMS TO SCORE</h2>
                      <li class="od" >
            
                        <ul  style="display: flex; justify-content: space-between; color: white;">
                          <li class="od">
                            <span class="odds">
                              <button class="yes-button" @click="addToBetslip(games[0], games[0].fields.btts_yes_odds)">Yes</button>
                              <span><button class="hom" @click="addToBetslip(games[0], games[0].fields.btts_yes_odds)">{{ games[0].fields.btts_yes_odds}}</button></span>
                            </span>
                          </li>
                          <li class="od">
                            <span class="odds">
                              <button class="yes-button" @click="addToBetslip(games[0], games[0].fields.btts_no_odds)">No</button>
                              <span><button class="hom1" @click="addToBetslip(games[0], games[0].fields.btts_no_odds)">{{ games[0].fields.btts_no_odds}}</button></span>
                            </span>
                          </li>
                        </ul>
                        
            
                      </li>
                    </ul>
                  </div>

              </div>
      
              <div class="rect1">
                <h3 class="tit">{{ odd_key }}</h3>
              
                <div v-if="games && games.length > 0">
                  <ul>
                    <h2 style="padding-top: 1rem;">DOUBLE CHANCE</h2>
                    <li class="od">
                      <ul style="display: flex; justify-content: space-between;">
                        <li class="od" v-for="(odds, key) in games[0].fields.double_chance_odds" :key="key">
                          <span class="odds1">
                            <button class="odd-button" @click="addToBetslip(games[0], odds)">{{ key }}</button>
                            <span><button class="hom1" @click="addToBetslip(games[0], odds)">{{ odds }}</button></span>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              
         
      
              
              <div class="rect2">
                <h3 class="tit">{{ odd_key }}</h3>
              
                <div v-if="games && games.length > 0">
                  <ul>
                    <h2 style="padding-top: 1rem;">OVER/UNDER</h2>
                    <li class="od2">
                      <ul style="display: flex; justify-content: space-between;">
                        <li class="od2" v-for="(odds, key) in games[0].fields.total" :key="key">
                          <span class="odds2">
                            <button class="odd-button" @click="addToBetslip(games[0], key)">{{ key }}</button>
                            <span><button class="odd-value" @click="addToBetslip(games[0], odds)">{{ odds }}</button></span>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              

              <div class="rect3">
           
              
                <div v-if="games && games.length > 0">
                  <h2 class="total">CORRECT SCORE</h2>
                  <ul class="cs">
                    
                    <li class="od2">
                      <ul style="display: flex; justify-content: space-between;">
                        <li class="od2" v-for="(odds, key) in games[0].fields.correct_score_odds" :key="key">
                          <span class="odds2">
                            <button class="odd-button" @click="addToBetslip(games[0], key)">{{ key }}</button>
                            <span><button class="odd-value" @click="addToBetslip(games[0], odds)">{{ odds }}</button></span>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              
          
              <div>
                       
        
      
                <div v-if="loading">Loading...</div>
                <div v-else>
          
                </div>
              </div>
            </div>
      
              <div class="col-12 col-lg-4 col-md-4 col-sm-4">
                <div class="betsslip">
                    <div class="we">
                    <button class="btn1-betslip">Your Betslip</button>
                    <button class="btn1-betslip1">Your Betstlip</button>
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
  import betterSlip from "@/views/betterSlip.vue";
  import router from '@/router' // eslint-disable-line no-unused-vars
  import headerTop from '@/components/headerBar.vue'

  
  // import masterWang from "@/pages/betterSlip.vue";
  export default {
    components: {
      betterSlip,
      headerTop,
      // masterWang
    },
    name: 'dropDown',
    
    props: ['title', 'items','gameId'],
    data() {
      return {
        Datas: [],
        betslip: [],
        games: [],
        homeTeam: null,
        awayTeam: null,
        
      };
    },
    created() {
    const savedBetslip = localStorage.getItem('betslip');
    if (savedBetslip) {
      this.betslip = JSON.parse(savedBetslip);
    }
  },
    mounted() {

      this.getcustom();
    
      console.log(this.betslip);
  
    },
    methods: {
  
            
        getcustom() {
          axios
            .get('https://www.23bet.pro/custom/')
            .then((response) => {
              console.log('API Response:', response.data); // Log the entire response
              const data = JSON.parse(response.data[0]);
              this.games = data;
              this.homeTeam = this.games[0].fields.home_team;
              this.awayTeam = this.games[0].fields.away_team;

            })
            .catch((error) => {
              console.error('Error:', error);
            });
        },

  
      
        addToBetslip1(game, selection) {
        if (!game || !game.fields) {
          console.error("Invalid game data:", game);
          return;
        }
      
        console.log("Clicked on game: ",);
        console.log('home:',this.homeTeam)
      
        // Check if there's already a selection for this team
        const existingSelectionIndex = this.betslip.findIndex(
          (betslipItem) => betslipItem.match === this.homeTeam + " vs " + this.awayTeam
         
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
          match: this.homeTeam + " vs " + this.awayTeam,
          game_id: game.pk, // Use game.pk to access the game_id property
          selection,
          odds: odd,
        };
      
        this.betslip.push(betslipItem);
        localStorage.setItem('betslip', JSON.stringify(this.betslip));
      },
      
  
      addToBetslip(game, selection) {
      // console.log("Clicked on item: ", game);
      console.log("Fields:", selection);
  
    // Check if there's already a selection for this team
    const existingSelectionIndex = this.betslip.findIndex(
      (betslipItem) => betslipItem.match === this.homeTeam + " vs " + this.awayTeam
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
        odd = game.fileds.away_odd;
        break;
  
      default:
        break;
      
    }
    console.log("Odd:", odd); // Log the odd 
    const betslipItem = {
      match: this.homeTeam + " vs " + this.awayTeam,
      game_id: game.id, // Add the game_id property
      selection,
      odds: selection,
    };
  
    this.betslip.push(betslipItem);
    console.log(this.betslip)
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
  
      sendParentId(parent_match_id) {
        axios.post('http://172.233.175.33/bet2/', { parent_match_id })
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
.bdy{
  background-color: #918f8f !important;
  width: 100%;
  height: 100%;
  overflow: scroll; /* Prevent scrolling */
  font-size: 1.3rem;
}
.betsslip{
  background-color: #000000;
  border-radius: 8.21818px;
  color: #fff;
}
.row{
  width: 80%;
  margin: auto;
}

.bts{
  align-content: left !important;
  align-items: left;
  text-align: left !important;
}
.back{

width: 117px;
height: 52px;


background: #1EBA01;
border-radius: 10px;
}
.stat{


  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #000000;
}
.rect{
padding-left: 1rem;
padding-right: 1rem;
padding-bottom: 1rem;
margin-bottom: 2rem;
background: #000000;
border-radius: 9.84962px;
}
.rect1{
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
 
  margin-bottom: 2rem;
  background: #000000;
  border-radius: 9.84962px;
}
.rect2{
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;

  display:flex;
  flex-direction: row !important;
  margin-bottom: 2rem;
  background: #000000;
  border-radius: 9.84962px;
}
.rect3{
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;

  display:flex;
  flex-direction: row !important;
  margin-bottom: 2rem;
  background: #000000 important;
  background-color: #000000;
  border-radius: 9.84962px;
}
.rect2 ul{
  display: flex;
}
.rect2 li {

}
.name{
 

  height: 22.4px;
  left: 190.69px;
  top: 595.79px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 17.6908px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.01em;
  
  color: #1EBA01;
}
.odds{
  padding-top: 1rem;
  height: 46.1px;
  text-align: left;
  display: flex;
  flex-direction: column;
  
  border-radius: 10; 
}
.odds1{
  padding-top: 1rem;
  height: 2rem;  
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10; 
  
}
.odds2{
  
  width: 15rem;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
}
.display{
margin-left: 1rem;
}
.odd-value{
background: rgba(217, 217, 217, 0.6);
padding-left: 1.5rem !important;
border-radius: 10px;
padding-right: 1.5rem !important;
}
li{


padding-bottom: 2rem;
}
.od{
display: inline;
color: white;
}
ul{
background-color:  transparent !important;
flex-wrap: wrap;

}
ul h2{
text-align: left;
font-size: 1.2rem;
margin-bottom: 0.5rem;
color: #1EBA01;
margin-top: -1rem;
}
.od2 {
display: flex;
flex-wrap: wrap;

}
.od3 {
display: flex;
flex-wrap: wrap;

}

.odds2 {
display: flex;
align-items: center;
margin-right: 20px; 
}

.display {
margin-right: 10px; /* Adjust the desired spacing between the display and value */
}
.hom{
padding: 0 !important;
width: 4rem;
height: 2rem;

top: 562.71px;
margin-right: 1.2rem;
background: rgba(217, 217, 217, 0.6);
border-radius: 9.34191px;
color: #fff !important;
}
.hom1{
  padding: 0 !important;
  margin-right: 1.2rem;
  width: 4rem;
  height: 2rem;
 
  top: 562.71px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.6);
  border-radius: 10px;
  color: white;
  
  }
  .total{
    margin-top: 1rem  !important;
    font-size: 17.6908px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.01em;
    padding-top: 1rem;
    color: #1EBA01;
    text-align: left;
  }
  .rect3 ul{
    display: flex !important;
  }
  @media screen and (max-width:992px) {
    .button{
        padding: 0 !important;
    }
  .left{
    height: auto !important;
  }
  .row{
    width: 100% !important;
  }
  body{
    font-size: 1.4rem !important;
  }
  .odds2{
    width: auto;
    font-size: 1.2rem;
   
    padding-left: 1rem;
    padding-right: 1rem;
  }
  }
</style>