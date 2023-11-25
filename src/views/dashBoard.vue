<template>
  <div class="nav-topp">
    <headerTop  />
  </div>


<div class="bdy">
<div class="tit">Today Games</div>






<div class="row">


<div class="col-12 col-lg-8 col-md-8 col-sm-8 ty">


  <div class="gms">


    <section class="section">
      <div class="container">
        <div class="carousel-container">
          <div class="carousel-content" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
              <img :src="slide.image" :alt="slide.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="games" v-if="games && games.length > 0">
     
      <div class="whole" v-for="(game, index) in games" :key="index">
        <div class="timedate">
                <div class="time" >{{ gameData[index].start_date }} {{ gameData[index].start_time_formatted }}</div>
              </div>
       
      
                <div class="bothgamesandodds">
                    <div class="homeaway">
                      <div class="homei">{{ game.fields.home_team }}</div>
                    <div class="away" >{{ game.fields.away_team }}</div></div>
                    <div class ='prebet'>
              
                        <span><button :id="game.fields.home_team+game.fields.home_odd" class="hom" @click="addToBetslip1(game, 'home_odd')">{{ game.fields.home_odd }}</button></span>
                        <span><button :id="game.fields.neutral_odd" class="hom1" @click="addToBetslip1(game, 'neutral_odd')">{{ game.fields.neutral_odd }}</button></span>
                        <span> <button :id="game.fields.away_team+game.fields.away_odd" class="hom2" @click="addToBetslip1(game, 'away_odd')">{{ game.fields.away_odd}}</button></span>
                    </div>
                  </div>

                  <div class ='preebet'>
          
    

                        <div >


                            <div>
            
                              <router-link :to="'/more/'" @click="sendParentId(game.fields.parent_match_id)" class="more">
                                +92 Markets
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
                <div class="timedate">
                  <div>
                  <div class="time">
                          {{ item.start_time }}
                        </div>
                      </div>
                </div>
              <div class="bothgamesandodds">
                <div class="homeaway">
                      <div class="homei">
                        {{ item.home_team }}
                      </div>
                
                    <div class="away">{{ item.away_team }} </div>
                    <div class="away" style="display: none;">{{ item.game_id }}</div>

                </div>
                  <div class ='prebet'>
                
                      <span> <button :id="'button_home_' + item.game_id" class="hom" @click="addToBetslip(item, 'home_odd', index)" >{{ item.home_odd }}</button>
                      </span>
                      <span><button :id="'button_neutral_' + item.game_id"  class="hom1" @click="addToBetslip(item, 'neutral_odd',index)" >{{ item.neutral_odd }}</button></span>
                      <span> <button :id="'button_away_' + item.game_id"  class="hom2" @click="addToBetslip(item, 'away_odd', index)" >{{ item.away_odd }}</button></span>
                </div>
          </div>
            <div class="">
              <div class ='preebet'>
 

                      <div >


                          <div>
           
                            <router-link :to="'/game/'" @click="sendParentId(item.parent_match_id)" class="more">
                              +92 Markets
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
        <button class="btn1-betslip1">Your Betslip</button>
      </div>
      <div>
      <betterSlip :betslip="betslip" @update:betslip="updateBetslip" ></betterSlip>
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
import betterSlip from "@/views/betterSlip.vue";
import router from '@/router' // eslint-disable-line no-unused-vars
import headerTop from '@/components/headerBar.vue'
import bottomNav from '@/views/bottomNav.vue'



// import masterWang from "@/pages/betterSlip.vue";
export default {
components: {
betterSlip,
headerTop,
bottomNav,
// masterWang
},
name: 'dropDown',
props: ['title', 'items','gameId'],
data() {
return {
Datas: [],
betslip: [],
games: [],
gameData: [],
start_date: [],
start_time_formatted: [],
// buttonClicked: false,
// buttonClicked: false, // Initialize as an empty array
buttonClicked: [], // Initialize as an empty array
base_url: 'https://www.23bet.pro/',


selectedButtonColors: {
home_odd: '',
neutral_odd: '',
away_odd: '',
},   
slides: [

{ image: require('@/assets/Sports.gif'), alt: 'Slide 2' },

],
currentIndex: 0,
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

console.log('games:', this.games);
    console.log('gameData:', this.gameData);

// console.log(this.betslip);


},
methods: {
getDatas() {
axios
    .get(this.base_url)
    .then((response) => {
      this.Datas = response.data.dataa;
    })
    .catch((error) => {
      console.log(error);
    });
},
nextSlide() {
   this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  },
prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
},
getAirtimes() {
axios
.get('${base_url}')
.then((response) => {
  this.Airtimes = response.data.dataa;
})
.catch((error) => {
  console.log(error);
});
},



getcustom() {
    axios
      .get(this.base_url+'custom/')
      .then((response) => {
        const data = JSON.parse(response.data);
        this.games = data;
        console.log(this.games);

        // Check if data is an array and has at least one element
        if (Array.isArray(data) && data.length > 0) {
          // Iterate through each element in the array
          data.forEach((item) => {
            // Check if the current item has 'fields' property
            if (item.fields && item.fields.start_time) {
              // Assign 'start_time' to this.start_time after formatting
              const start_time = new Date(item.fields.start_time);
              // Subtract 3 hours from the UTC time
              start_time.setUTCHours(start_time.getUTCHours() - 3);

              // Format date and time for the current game
              const start_date = this.formatDate(start_time);
              const start_time_formatted = this.formatTime(start_time);

              // Push an object with game data to the gameData array
              this.gameData.push({
                start_date,
                start_time_formatted,
              });

              // Log the 'start_date' and 'start_time_formatted' values for each item
              console.log(start_time);
              console.log(this.gameData);
            } else {
              //console.log('The expected data structure is not present in the response.');
            }
          });
        } else {
          //console.log('No data found in the response.');
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






addToBetslip1(game, selection)
 {
    if (!game || !game.fields) {
    console.error("Invalid game data:", game);
    return;
    }
//console.log(selection)




    if (selection === "home_odd") {
      
      const buttonId = game.fields.home_team+game.fields.home_odd;
      const buttonId1 = game.fields.neutral_odd;
      const buttonId2 = game.fields.away_team+game.fields.away_odd;

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
          button2.style.backgroundColor = ''; // Reset the background color for the third button
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
    else if (selection === "neutral_odd") {
      const buttonId = game.fields.home_team+game.fields.home_odd;
      const buttonId1 = game.fields.neutral_odd;
      const buttonId2 = game.fields.away_team+game.fields.away_odd;

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
          button2.style.backgroundColor = ''; // Reset the background color for the third button
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


    else if (selection === "away_odd") {
      const buttonId = game.fields.home_team+game.fields.home_odd;
      const buttonId1 = game.fields.neutral_odd;
      const buttonId2 = game.fields.away_team+game.fields.away_odd;

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
          button.style.backgroundColor = ''; // Reset the background color for the second button
          button1.style.backgroundColor = ''; // Reset the background color for the third button
        }
      }

      // Reset the background colors for the other two buttons
      if (button) {
        button.style.backgroundColor = '';
      }
      if (button1) {
        button1.style.backgroundColor = '';
      }
    }




    // Check if there's already a selection for this team
    const existingSelectionIndex = this.betslip.findIndex(
    (betslipItem) => betslipItem.match === game.fields.home_team + " vs " + game.fields.away_team

    );


    // If there is an existing selection, remove it before adding the new one

    if (existingSelectionIndex !== -1) {
    const existingSelection = this.betslip[existingSelectionIndex];
    // Check if the existing selection and the current selection are the same
    if (existingSelection.selection === selection) {
      // The selections are the same, splice the existing selection
     // console.log("Splicing existing selection from betslip.");
      this.betslip.splice(existingSelectionIndex, 1);
      localStorage.setItem('betslip', JSON.stringify(this.betslip));
    } else {
      // The selections are different, you can choose to update the existing selection
     // console.log("Updating existing selection in betslip.");
      // Update the existing selection if needed
      // For example, you can update the `selection` and `odds` properties.
      existingSelection.selection = selection;

      // Optionally, you can also update the color of the corresponding button.
      // Update button color logic here
    }
  } else {
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
  }
},



////////////////////////aaaa///////////////////////////////////////////////////////////////////////////////
addToBetslip(item, selection, ) {

if (selection === "home_odd") {
  const gameId = item.game_id;
  const buttonId = `button_home_${gameId}`;
  const buttonId1 = `button_neutral_${gameId}`;
  const buttonId2 = `button_away_${gameId}`;

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
      button2.style.backgroundColor = ''; // Reset the background color for the third button
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


else if (selection === "neutral_odd") {
  const gameId = item.game_id;
  const buttonId = `button_home_${gameId}`;
  const buttonId1 = `button_neutral_${gameId}`;
  const buttonId2 = `button_away_${gameId}`;

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
      button2.style.backgroundColor = ''; // Reset the background color for the third button
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


else if (selection === "away_odd") {
  const gameId = item.game_id;
  const buttonId = `button_home_${gameId}`;
  const buttonId1 = `button_neutral_${gameId}`;
  const buttonId2 = `button_away_${gameId}`;

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
      button.style.backgroundColor = ''; // Reset the background color for the second button
      button1.style.backgroundColor = ''; // Reset the background color for the third button
    }
  }

  // Reset the background colors for the other two buttons
  if (button) {
    button.style.backgroundColor = '';
  }
  if (button1) {
    button1.style.backgroundColor = '';
  }
}


// Check if there's already a selection for this team
const existingSelectionIndex = this.betslip.findIndex(
(betslipItem) => betslipItem.match === item.home_team + " vs " + item.away_team
);


// If there is an existing selection, remove it before adding the new one
if (existingSelectionIndex !== -1) {
    const existingSelection = this.betslip[existingSelectionIndex];
    // Check if the existing selection and the current selection are the same
    if (existingSelection.selection === selection) {
      // The selections are the same, splice the existing selection
    //  console.log("Splicing existing selection from betslip.");
      this.betslip.splice(existingSelectionIndex, 1);
      localStorage.setItem('betslip', JSON.stringify(this.betslip));
    } else {
      // The selections are different, you can choose to update the existing selection
      console.log("Updating existing selection in betslip.");
      // Update the existing selection if needed
      // For example, you can update the `selection` and `odds` properties.
      existingSelection.selection = selection;

      // Optionally, you can also update the color of the corresponding button.
      // Update button color logic here
    }
  } else {


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
  }
},

selectedButtonColor(selection) {
// Return the background color for the selected button
return this.selectedButtonColors[selection];
},
updateBetslip(updatedBetslip) {
this.betslip = updatedBetslip;
},


placeBet() {
//console.log("Entering placeBet() function...");
//console.log("Placing bet:", this.betslip);
// Place the bet using the betslip data
// ...


// Once the bet is placed, clear the betslip
this.betslip = [];


// Add a console log to check if this line is reached
//console.log("Removing from local storage...");


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
axios.post('{{base_url}}/credit_create/', {
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
  localStorage.removeItem('parent_match_id');

  localStorage.setItem('parent_match_id', parent_match_id);
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
background-color: #16202c !important;
margin-top: 7rem;


}

.green-button {
background-color: green !important;
/* You can adjust other styles as needed */
}
.section{
padding: 0 !important;
margin-bottom: 0.2rem;
}
.carousel-container {
display: flex;
position: relative;
overflow: hidden;


}
.cointainer{
width: fit-content;
}
.carousel-content {
display: flex;
transition: transform 0.5s ease-in-out;
}


.carousel-slide {


width: 100%;
}
img, video {
max-width: 100%;
height: 100%;
}
.carousel-image {
width: 100%; /* Stretch the image to fit the container */
height: auto; /* Maintain aspect ratio */
}
@media screen and (min-width: 992px){
  
  .for{
  display: flex;
}
.betsslip{
background-color: #000000;
border-radius: 8.21818px;
color: #fff;
position: fixed;
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
text-align: center;
font-weight: 900;

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
background: #23313d;
border-radius: 15px;
color: #fff !important;


}
.hom1{
padding: 0 !important;
margin-right: 1.2rem;
width: 140.13px;
height: 60.72px;
left: 751px;
top: 562.71px;
background: #23313d;
border-radius: 9.34191px;
}
.hom2{
padding: 0 !important;
margin-right: 1.2rem;
width: 140.13px;
height: 60.72px;
margin-right: 2rem !important;
background: #23313d;
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
width: fit-content;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16.8154px;
line-height: 25px;
text-align: center;
letter-spacing: 0.01em;
color: hsl(87, 71%, 35%);

border-radius: 10px;
display: flex;
justify-content: center;
}
.bothgamesandodds{
  display: flex;
  flex-direction: row;
}
}


@media screen and (max-width: 992px) {
.row{
width: 98% !important;
margin: auto;
}
.tit{
background-color: #000000;
padding-top: 1rem;
padding-bottom: 1rem;
color: #fff;
font-size: 2rem;
width: 100% !important;
text-align: center;
font-weight: 900;

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
margin-bottom: 10rem;
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
border-radius: 10px;
text-align: left;
}
.timedate{
margin-bottom: 2rem;

}
.prebet{
display: flex;
justify-content: space-between;
flex-basis: 50%;
}
.hom{

margin-right: 1rem;
width: 4rem;
height: 2rem;
background: #23313d;
border-radius: 15px;
color: #fff !important;
padding-top: 5px;
padding-left: 10px;
padding-bottom: 23px;
padding-right: 40px;
}
.hom1{

margin-right: 1rem;
width: 4rem;
height: 2rem; 
background: #23313d;
border-radius: 15px;
color: #fff !important;
padding-top: 5px;
padding-left: 10px;
padding-bottom: 23px;
padding-right: 40px;
}


.hom2{
margin-right: 1rem;
width: 4rem;
height: 2rem;

background: #23313d;
border-radius: 15px;
color: #fff !important;
padding-top: 5px;
padding-left: 10px;
padding-bottom: 23px;
padding-right: 40px;
}
.more{
 width: fit-content !important;

font-family: 'Poppins';
font-style: normal;

font-size: 13px;

text-align: center;
padding: 5px 0;
color: hsl(87, 71%, 35%);
text-decoration: none;
justify-content: center;
}
.homeaway{
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  line-height: 12px;
  padding: 2px 5px;
  font-weight: 600;
}
.bothgamesandodds{
  display: flex;
}
.homei{
  margin-bottom: 8px;
}
.preebet{
  text-align: right;
}
.time{
  font-size: 12px;
  float: right;
}
.away{
  flex-basis: 50%;
}
}
</style>





