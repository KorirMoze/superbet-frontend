<template>
<div class="nav-topp">
  <headerTop />
</div>
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

                        <ul style="display: flex; justify-content: space-between;">
                        <li class="od" v-for="(odds, key) in games[0].fields.both_teams_to_score" :key="key">
                          <span class="odds1">
                            <button class="odd-button" @click="addToBetslip(games[0], key,'BOTH TEAMS TO SCORE',odds)">{{ key }}</button>
                            <span><button :id="key" class="hom1" @click="addToBetslip(games[0], key,'BOTH TEAMS TO SCORE',odds)">{{ odds }}</button></span>
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
                            <button class="odd-button" @click="addToBetslip(games[0], key,'DOUBLE CHANCE',odds)">{{ key }}</button>
                            <span><button :id="key" class="hom1" @click="addToBetslip(games[0], key,'DOUBLE CHANCE',odds)">{{ odds }}</button></span>
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
                            <button class="odd-button" @click="addToBetslip(games[0], key,'TOTAL',odds)">{{ key }}</button>
                            <span><button :id="key" class="odd-value" @click="addToBetslip(games[0], key,'TOTAL',odds)">{{ odds }}</button></span>
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
                            <button class="odd-button" @click="addToBetslip(games[0], key,'CORRECT SCORE',odds)">{{ key }}</button>
                            <span><button :id="key" class="odd-value" @click="addToBetslip(games[0], key,'CORRECT SCORE',odds)">{{ odds }}</button></span>
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
      <div class="terms">
  <bottom />
</div>
  
  </template>
  <script>
  import axios from 'axios';
  import betterSlip from "@/views/betterSlip.vue";
  import router from '@/router' // eslint-disable-line no-unused-vars
  import headerTop from '@/components/headerBar.vue'
  import bottom from '@/views/termsPage.vue'
  
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
        parentMatchId:null,
        base_url: 'https://www.23bet.pro/',
        bottom,
        
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
 
  
    },
    methods: {
  
            
        getcustom() {
   
          axios.get(this.base_url+`custom/`)
          .then(response => {
            // Retrieve the parent_match_id from local storage
            const parentMatchId = localStorage.getItem('parent_match_id');

            const data = JSON.parse(response.data);
            //this.games = data;
          

            if (parentMatchId) {
              console.log('Parent Match ID retrieved:', parentMatchId);

           
              // Filter the games array to select items with the matching parent_match_id
              this.filteredGames = data.filter(game => game.fields.parent_match_id === parentMatchId);

//              console.log('Filtered Games:', this.filteredGames);
              this.games = this.filteredGames
              this.homeTeam = this.games[0].fields.home_team;
              this.awayTeam = this.games[0].fields.away_team;
            //  console.log('wer', this.games[0].fields.both_teams_to_score)
              // Call your functions to process the filtered data
           
            } else {
              console.log('Parent Match ID not found in local storage');
            }
          })
          .catch(error => {
            console.error('Error fetching data from the server:', error);
          });

    

        },

  
      
  
      addToBetslip(game, key,betType,selection) {
      // console.log("Clicked on item: ", game);
      console.log("Fields:", key);
  

      switch (betType)
   {
    case 'BOTH TEAMS TO SCORE':
      {
    const bothTeams = ['Yes','No','0:0', '0:1', '0:2', '0:3', '0:4', '1:0', '1:1', '1:2', '1:3', '1:4', '2:0', '2:1', '2:2', '2:3', '2:4', '3:0', '3:1', '3:2', '3:3', '3:4', '4:0', '4:1', '4:2', '4:3', '4:4', 'OTHER', 'OVER 0.5', 'UNDER 0.5', 'OVER 1.5', 'UNDER 1.5', 'OVER 2.5', 'UNDER 2.5', 'OVER 3.5', 'UNDER 3.5', 'OVER 4.5', 'UNDER 4.5', 'OVER 5.5', 'UNDER 5.5', 'YES', 'NO', '1/X', '1/2', 'X/2'];

      if (bothTeams.includes(key)) {
        
      
       // console.log("dfghbjn" ,this.match_id)
        const buttonId = key;

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
 
        console.log(button)
        if (button) {
          const currentBackgroundColor = window.getComputedStyle(button).backgroundColor;

          bothTeams.forEach(value => {
            const button = document.getElementById(value);
            if (button) {
                button.style.backgroundColor = ''; // Reset the background color to default
              //  button1.style.backgroundColor = '';
            }
        });

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button.style.backgroundColor = 'green';
          }
        }

        // Reset the background colors for the other two buttons
      
      
      }
   
      break;
    }
    case 'DOUBLE CHANCE':
      {
    const doubleChance = ['Yes','No','0:0', '0:1', '0:2', '0:3', '0:4', '1:0', '1:1', '1:2', '1:3', '1:4', '2:0', '2:1', '2:2', '2:3', '2:4', '3:0', '3:1', '3:2', '3:3', '3:4', '4:0', '4:1', '4:2', '4:3', '4:4', 'OTHER', 'OVER 0.5', 'UNDER 0.5', 'OVER 1.5', 'UNDER 1.5', 'OVER 2.5', 'UNDER 2.5', 'OVER 3.5', 'UNDER 3.5', 'OVER 4.5', 'UNDER 4.5', 'OVER 5.5', 'UNDER 5.5', 'YES', 'NO', '1/X', '1/2', 'X/2'];

    if (doubleChance.includes(key)) {
       // const gameId = this.selection;
      const buttonId = key;

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
    

        if (button) {
          const currentBackgroundColor = window.getComputedStyle(button).backgroundColor;

          doubleChance.forEach(value => {
            const button = document.getElementById(value);
            if (button) {
                button.style.backgroundColor = ''; // Reset the background color to default
              //  button1.style.backgroundColor = '';
            }
        });

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button.style.backgroundColor = 'green';
        
          }
        }

        // Reset the background colors for the other two buttons
   
      
      }
  
  
      break;
    }
    case 'TOTAL':
    {
  //    const total = ['OVER 0.5', 'UNDER 0.5', 'OVER 1.5', 'UNDER 1.5', 'OVER 2.5', 'UNDER 2.5', 'OVER 3.5', 'UNDER 3.5', 'OVER 4.5', 'UNDER 4.5', 'OVER 5.5', 'UNDER 5.5'];
      const total = ['Yes','No','0:0', '0:1', '0:2', '0:3', '0:4', '1:0', '1:1', '1:2', '1:3', '1:4', '2:0', '2:1', '2:2', '2:3', '2:4', '3:0', '3:1', '3:2', '3:3', '3:4', '4:0', '4:1', '4:2', '4:3', '4:4', 'OTHER', 'OVER 0.5', 'UNDER 0.5', 'OVER 1.5', 'UNDER 1.5', 'OVER 2.5', 'UNDER 2.5', 'OVER 3.5', 'UNDER 3.5', 'OVER 4.5', 'UNDER 4.5', 'OVER 5.5', 'UNDER 5.5', 'YES', 'NO', '1/X', '1/2', 'X/2'];

      if (total.includes(key)) {
          // const gameId = this.selection;
          
          
            const buttonId = key;
          
            
            // Ensure buttonId is defined before using it
            const button = document.getElementById(buttonId);
            // const button1 = document.getElementById(buttonId1);
            // const button2 = document.getElementById(buttonId2);
            if (button) {
              const currentBackgroundColor = window.getComputedStyle(button).backgroundColor;
            //  console.log('bbtbtbtb',currentBackgroundColor)
              
              total.forEach(value => {
            const button = document.getElementById(value);
            if (button) {
                button.style.backgroundColor = ''; // Reset the background color to default
              //  button1.style.backgroundColor = '';
            }
        });
              // Toggle the background color between green and the original color for the first button
              if (currentBackgroundColor === 'rgb(0, 128, 0)') {
                // If the background color is green, set it to the original color
                button.style.backgroundColor = ''; // or set it to the original color value
              } else {
                // If the background color is not green, set it to green
                button.style.backgroundColor = 'green';
                // button.style.backgroundColor = ''; // Reset the background color for the second button
                // button.style.backgroundColor = '';
              }
            }

            // Reset the background colors for the other two buttons
            // if (button) {
            //   button.style.backgroundColor = '';

            // }
            // if (button2) {
            //   button2.style.backgroundColor = '';
              
            // }
          
          }
    

          break;
      }
    
   
    
    case 'CORRECT SCORE':
    {
     // const targetValues = ['0:0','0:1', '0:2', '0:3', '0:4', '1:0', '1:1', '1:2', '1:3', '1:4', '2:0', '2:1', '2:2', '2:3', '2:4', '3:0', '3:1', '3:2', '3:3', '3:4', '4:0', '4:1', '4:2', '4:3', '4:4', 'OTHER'];
      const targetValues = ['Yes','No','0:0', '0:1', '0:2', '0:3', '0:4', '1:0', '1:1', '1:2', '1:3', '1:4', '2:0', '2:1', '2:2', '2:3', '2:4', '3:0', '3:1', '3:2', '3:3', '3:4', '4:0', '4:1', '4:2', '4:3', '4:4', 'OTHER', 'OVER 0.5', 'UNDER 0.5', 'OVER 1.5', 'UNDER 1.5', 'OVER 2.5', 'UNDER 2.5', 'OVER 3.5', 'UNDER 3.5', 'OVER 4.5', 'UNDER 4.5', 'OVER 5.5', 'UNDER 5.5', 'YES', 'NO', '1/X', '1/2', 'X/2'];

        if (targetValues.includes(key)) {
          // const gameId = this.selection;
          
          
            const buttonId = key;
          
            
            // Ensure buttonId is defined before using it
            const button = document.getElementById(buttonId);
            // const button1 = document.getElementById(buttonId1);
            // const button2 = document.getElementById(buttonId2);
            if (button) {
              const currentBackgroundColor = window.getComputedStyle(button).backgroundColor;
              console.log('bbtbtbtb',currentBackgroundColor)
              
              targetValues.forEach(value => {
            const button = document.getElementById(value);
            if (button) {
                button.style.backgroundColor = ''; // Reset the background color to default
            }
        });
              // Toggle the background color between green and the original color for the first button
              if (currentBackgroundColor === 'rgb(0, 128, 0)') {
                // If the background color is green, set it to the original color
                button.style.backgroundColor = ''; // or set it to the original color value
              } else {
                // If the background color is not green, set it to green
                button.style.backgroundColor = 'green';
                // button.style.backgroundColor = ''; // Reset the background color for the second button
                // button.style.backgroundColor = '';
              }
            }

            // Reset the background colors for the other two buttons
            // if (button) {
            //   button.style.backgroundColor = '';

            // }
            // if (button2) {
            //   button2.style.backgroundColor = '';
              
            // }
          
          }
    

          break;
      }
    }

    // Check if there's already a selection for this team
    const existingSelectionIndex = this.betslip.findIndex(
      (betslipItem) => betslipItem.match === this.homeTeam + " vs " + this.awayTeam
    );
  
    // If there is an existing selection, remove it before adding the new one
    // if (existingSelectionIndex !== -1) {
    //   this.betslip.splice(existingSelectionIndex, 1);
    //   localStorage.setItem('betslip', JSON.stringify(this.betslip));
    // }
    if (existingSelectionIndex !== -1) {
    const existingSelection = this.betslip[existingSelectionIndex];
    console.log(existingSelection.key,'selected')
      console.log(key)
    // Check if the existing selection and the current selection are the same
        if (existingSelection.key === key) {
          // The selections are the same, splice the existing selection
          console.log("Splicing existing selection from betslip.");
          this.betslip.splice(existingSelectionIndex, 1);
          localStorage.setItem('betslip', JSON.stringify(this.betslip));
        } else {
          // The selections are different, you can choose to update the existing selection
          console.log("Updating existing selection in betslip.");
          // Update the existing selection if needed
          // For example, you can update the `selection` and `odds` properties.
          existingSelection.key = key;

          // Optionally, you can also update the color of the corresponding button.
          // Update button color logic here
        }
  }else{
  
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
      key
      
    };
  
    this.betslip.push(betslipItem);
    //console.log(betslipItem)
    localStorage.setItem('betslip', JSON.stringify(this.betslip));
  }
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
          const response = axios.post(this.base_url+'credits/', data);
          console.log(response.data);
          this.submitted = true;
        } catch (error) {
          console.error(error);
        }
      },
      postData1() {
        axios.post(this.base_url+'credit_create/', {
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
        axios.post(this.base_url+'bet2/', { parent_match_id })
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
  .nav-topp {
   
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1000; /* Adjust as needed */
 }
.bdy{
  background-color: #16202c !important;
  width: 100%;
  height: 100%;
  overflow: scroll; /* Prevent scrolling */
  font-size: 1.3rem;
  margin-top: 7rem;
  padding-top: 1rem;
}
.betsslip{
  background-color: #000000;
  border-radius: 8.21818px;
  color: #fff;
  margin-bottom: 10rem;
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
  .bdy{
  background-color: #918f8f !important;
  width: 100%;
  height: 100%;
  overflow: scroll; /* Prevent scrolling */
  font-size: 1.3rem;
  margin-top: 7rem;
  padding-top: 1rem;
}
  }
</style>