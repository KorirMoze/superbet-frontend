<template>
  <headerTop />
<div class="bdy">
  <div class="row">

    <div class="col-12 col-lg-8 col-md-8 col-sm-8 ty">
        <!-- <div class="bts"><button class="back">Back</button></div> -->
      
        <div class="rect">
          <h3 class="tit">{{ odd_key }}</h3>
    
          <div v-if="matches && matches.length">
            <ul >
              <h2 style="padding-top: 1rem;">BOTH TEAMS TO SCORE</h2>
              <li class="od" v-for="match in matches" :key="match.sub_type_id">

                <ul v-if="match.name === 'BOTH TEAMS TO SCORE (GG/NG)'" style="display: flex; justify-content: space-between; color: white;">
                  <li class="od">
                    <span class="odds">
                      <button class="yes-button" @click="addToBetslip(match, match.odds[0])">Yes</button>
                      <span><button :id="'button_yes_' + match_id" class="hom" @click="addToBetslip(match, match.odds[0],'BOTH TEAMS TO SCORE')">{{ match.odds[0].odd_value }}</button></span>
                    </span>
                  </li>
                  <li class="od">
                    <span class="odds">
                      <button class="yes-button" @click="addToBetslip(match, match.odds[1])">No</button>
                      <span><button :id="'button_no_' + match_id" class="hom1" @click="addToBetslip(match, match.odds[1],'BOTH TEAMS TO SCORE')">{{ match.odds[1].odd_value }}</button></span>
                    </span>
                  </li>
                </ul>
                

              </li>
            </ul>
          </div>
        </div>

        <div class="rect1">
          <h3 class="tit" >{{ odd_key }}</h3>
    
          <div v-if="matches && matches.length">
            <ul >
              <h2 style="padding-top: 1rem;">DOUBLE CHANCE</h2>
              <li class="od" v-for="match in matches" :key="match.sub_type_id">
                
                <ul v-if="match.name === 'DOUBLE CHANCE'" style="display: flex; justify-content: space-between;">
                  
                  <li class="od" v-for="odd in match.odds" :key="odd.odd_key">
                    <span class="odds1">  

                 
                      <button class="odd-button" @click="addToBetslip(match, odd,'DOUBLE CHANCE')">{{ odd.display }}</button>

                      <span> <button :id='odd.display' class="hom1" @click="addToBetslip(match, odd,'DOUBLE CHANCE')">{{ odd.odd_value }}</button></span>
                  </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
   
        <div class="rect2">
          <h3 class="tit">{{ odd_key }}</h3>
        
          <div v-if="matches && matches.length">
            <h3 class="total">TOTAL</h3>
        
            <ul>
              <li class="od2" v-for="match in matches" :key="match.sub_type_id">
                <ul v-if="match.name === 'TOTAL'">
                  
                  <li class="od2" v-for="odd in match.odds" :key="odd.odd_key">
                    <span class="odds2">
                      <button class="odd-button" @click="addToBetslip(match, odd,'TOTAL')">{{ odd.display }}</button>
                      <span class="odd-value">{{ odd.odd_value }}</span>
                      <br>
                    </span>
                    <br>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
       
        <div class="rect3">
          <!-- <h3 class="tit">{{ odd_key }}</h3> -->
        
          <div v-if="matches && matches.length">
            <h3 class="total">Correct Score</h3>
        
            <ul class="cs">
              <li class="od2" v-for="match in matches" :key="match.sub_type_id">
                <ul v-if="match.name === 'CORRECT SCORE'">
                  
                  <li class="od2" v-for="odd in match.odds" :key="odd.odd_key">
                    <span class="odds2">
                      <button  class="odd-button" @click="addToBetslip(match, odd,'CORRECT SCORE')" >{{ odd.display }}</button>
                      <span> <button :id='odd.display' class="odd-value" @click="addToBetslip(match, odd,'CORRECT SCORE')">{{ odd.odd_value }}</button></span>
                      <br>
                    </span>
                    <br>
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
              <button class="btn1-betslip1">Your Betslip</button>
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
  import { mapGetters } from 'vuex';
  import headerTop from '@/components/headerBar.vue'

  export default {
    components: {
    betterSlip,
    headerTop,
    // masterWang
  },
    name: 'GameData',
    data() {
      return {
        gameId: this.$route.params.parent_match_id,
        matches: [],
        loading: true,
        betslip: [],
        match_id: [],
        homeTeam: [],
        awayTeam: [],

      };
      
    },
    created() {
    try {
      const savedBetslip = localStorage.getItem('betslip');
      if (savedBetslip) {
        this.betslip = JSON.parse(savedBetslip);
      }
     
    } catch (error) {
      console.error('Error in created hook:', error);
    }
},

    mounted() {
      axios.get(`https://www.23bet.pro/bet2/?parent_match_id=${this.parent_match_id}`)
      
        .then(response => {
          //console.log('Response from server:', response.data);
          this.matches = response.data.data;
          this.parent_match_id = response.data.parent_match_id;
          this.match_id = this.parent_match_id
        // console.log(this.parent_match_id)
          console.log("Game ID:", this.match_id);
          this.getDatas();
          this.getcustom();
        })
      
        .catch(error => {
          console.error('Error retrieving matches:', error);
        })
        .finally(() => {
          this.loading = false;
        });
       

        
    },
    computed: {
  ...mapGetters(['getBetslip']), // Map the getBetslip getter
},
 methods: {
  getDatas() {
      axios
        .get('https://www.23bet.pro/')
        .then((response) => {
          const allData = response.data.dataa; // Assuming your data is in response.data.dataa
          const filteredData = allData.filter((item) => item.parent_match_id === this.match_id);
          this.Datas = filteredData;
          this.homeTeam = this.Datas[0].home_team;
          this.awayTeam = this.Datas[0].away_team;
          // console.log("Home Team:", homeTeam);
          // console.log("awatTeam: ",awayTeam)
          console.log(this.Datas)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getcustom() {
      axios
        .get('https://www.23bet.pro/custom/')
        .then((response) => {
          const data = JSON.parse(response.data[0]);
          this.games = data;
          console.log(data)
        })
        .catch((error) => {
          console.log(error);
        });
    },



  addToBetslip(match, odd,betType) {
    // console.log("Clicked on match: ", match.name);
    console.log("Selected odd: ", odd);
    // console.log("Home Team:", this.homeTeam);
    // Check if there's already a selection for this match
    

   switch (betType)
   {
    case 'BOTH TEAM TO SCORE':

      if (odd.display === "YES") {
        const gameId = this.match_id;
      
        console.log("dfghbjn" ,this.match_id)
        const buttonId = `button_yes_${gameId}`;
        const buttonId1 = `button_no_${gameId}`;
      

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
        const button1 = document.getElementById(buttonId1);

        if (button) {
          const currentBackgroundColor = window.getComputedStyle(button).backgroundColor;

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button.style.backgroundColor = 'green';
            button1.style.backgroundColor = ''; // Reset the background color for the second button
          }
        }

        // Reset the background colors for the other two buttons
        if (button1) {
          button1.style.backgroundColor = '';
        }
      
      }
      if (odd.display === "NO") {
        const gameId = this.match_id;
      
        console.log("dfghbjn" ,this.match_id)
        const buttonId = `button_yes_${gameId}`;
        const buttonId1 = `button_no_${gameId}`;
      

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
        const button1 = document.getElementById(buttonId1);

        if (button1) {
          const currentBackgroundColor = window.getComputedStyle(button1).backgroundColor;

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button1.style.backgroundColor = 'green';
            button.style.backgroundColor = ''; // Reset the background color for the second button
          }
        }

        // Reset the background colors for the other two buttons
        if (button) {
          button.style.backgroundColor = '';
        }
      
      }
      break;
    case 'DOUBLE CHANCE':
    if (odd.display === "1/X") {
       // const gameId = this.odd.display;
      
      
        const buttonId = odd.display;
        const buttonId1 = 'X/2';
        const buttonId2 = '1/2';
      

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
        const button1 = document.getElementById(buttonId1);
        const button2 = document.getElementById(buttonId2);

        if (button) {
          const currentBackgroundColor = window.getComputedStyle(button).backgroundColor;

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button.style.backgroundColor = 'green';
            button1.style.backgroundColor = ''; // Reset the background color for the second button
            button2.style.backgroundColor = '';
          }
        }

        // Reset the background colors for the other two buttons
        if (button1) {
          button1.style.backgroundColor = '';

        }
        if (button2) {
          button2.style.backgroundColor = '';
          
        }
      
      }
      if (odd.display === "X/2") {
       // const gameId = this.odd.display;
      
      
        const buttonId = '1/X';
        const buttonId1 = odd.display;
        const buttonId2 = '1/2';
      

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
        const button1 = document.getElementById(buttonId1);
        const button2 = document.getElementById(buttonId2);

        if (button1) {
          const currentBackgroundColor = window.getComputedStyle(button1).backgroundColor;

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button1.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button1.style.backgroundColor = 'green';
            button.style.backgroundColor = ''; // Reset the background color for the second button
            button2.style.backgroundColor = '';
          }
        }

        // Reset the background colors for the other two buttons
        if (button) {
          button.style.backgroundColor = '';

        }
        if (button2) {
          button2.style.backgroundColor = '';
          
        }
      
      }
      if (odd.display === "1/2") {
       // const gameId = this.odd.display;
      
      
        const buttonId = '1/X';
        const buttonId1 = 'X/2';
        const buttonId2 = '1/2';
      

        // Ensure buttonId is defined before using it
        const button = document.getElementById(buttonId);
        const button1 = document.getElementById(buttonId1);
        const button2 = document.getElementById(buttonId2);

        if (button2) {
          const currentBackgroundColor = window.getComputedStyle(button2).backgroundColor;

          // Toggle the background color between green and the original color for the first button
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            // If the background color is green, set it to the original color
            button2.style.backgroundColor = ''; // or set it to the original color value
          } else {
            // If the background color is not green, set it to green
            button2.style.backgroundColor = 'green';
            button1.style.backgroundColor = ''; // Reset the background color for the second button
            button.style.backgroundColor = '';
          }
        }

        // Reset the background colors for the other two buttons
        if (button1) {
          button1.style.backgroundColor = '';

        }
        if (button) {
          button.style.backgroundColor = '';
          
        }
      
      }
    
  
      break;
   
    case 'TOTAL':
      break;
    
    case 'CORRECT SCORE':
    {
      const targetValues = ['0:0','0:1', '0:2', '0:3', '0:4', '1:0', '1:1', '1:2', '1:3', '1:4', '2:0', '2:1', '2:2', '2:3', '2:4', '3:0', '3:1', '3:2', '3:3', '3:4', '4:0', '4:1', '4:2', '4:3', '4:4', 'OTHER'];
        if (targetValues.includes(odd.display)) {
          // const gameId = this.odd.display;
          
          
            const buttonId = odd.display;
          
            
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
          if (odd.display === "1/2") {
          // const gameId = this.odd.display;
          
          
            const buttonId = '1/X';
            const buttonId1 = 'X/2';
            const buttonId2 = '1/2';
          

            // Ensure buttonId is defined before using it
            const button = document.getElementById(buttonId);
            const button1 = document.getElementById(buttonId1);
            const button2 = document.getElementById(buttonId2);

            if (button2) {
              const currentBackgroundColor = window.getComputedStyle(button2).backgroundColor;

              // Toggle the background color between green and the original color for the first button
              if (currentBackgroundColor === 'rgb(0, 128, 0)') {
                // If the background color is green, set it to the original color
                button2.style.backgroundColor = ''; // or set it to the original color value
              } else {
                // If the background color is not green, set it to green
                button2.style.backgroundColor = 'green';
                button1.style.backgroundColor = ''; // Reset the background color for the second button
                button.style.backgroundColor = '';
              }
            }

            // Reset the background colors for the other two buttons
            if (button1) {
              button1.style.backgroundColor = '';

            }
            if (button) {
              button.style.backgroundColor = '';
              
            }
          
          }
        

          break;
      }
    }
    ///////// corect score






    
    const existingSelectionIndex = this.betslip.findIndex(
      (betslipItem) => betslipItem.match === this.homeTeam + " vs " + this.awayTeam
    );

    // If there is an existing selection, remove it before adding the new one
    if (existingSelectionIndex !== -1) {
      this.betslip.splice(existingSelectionIndex, 1);
    }

    const betslipItem = {
      match: this.homeTeam + " vs " + this.awayTeam,
      game_id: match.game_id,
      selection: odd.display,
      odds: odd.odd_value,
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
  
}
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