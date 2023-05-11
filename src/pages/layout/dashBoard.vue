<template>
  <div class="container">

    <div class="row">
      <!-- <div class="col col-lg-2 col-md-2 col-sm-2">
        1 of 3
      </div> -->
      <div class="col col-lg-8 col-md-8 col-sm-8">
        <div class="all_games" v-for="item in Datas" :key="item.sport_id">
          <div class="rounded overflow-hidden shadow-lg match">
           
              <div class="px-6 py-4">
              <div class="text-gray mb-2 hometeam prebet-match__teams" ><span>{{ item.home_team }}</span> <span></span></div>
              
              <div class="text-gray mb-2 prebet-match__teams">{{ item.away_team }}        <div class="px-6 pt-4 pb-2 prebet-match__odds__container">
                  <div class ='prebet-match__odds'>
                      <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">{{ item.home_odd }}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ item.neutral_odd }}</span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ item.away_odd }}</span> -->
      
                      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" @click="addToBetslip(item, 'home_odd')">{{ item.home_odd }}</button>
                      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" @click="addToBetslip(item, 'neutral_odd')">{{ item.neutral_odd }}</button>
                      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" @click="addToBetslip(item, 'away_odd')">{{ item.away_odd }}</button>
                  </div>
                  <div class="prebet-match__bottom">
                    <div class="prebet-match__markers">
                      <svg data-v-81d7167e="" width="16" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path data-v-81d7167e="" d="M8 11.4C8 12.17 8.6 12.8 9.33 12.8H10.83C11.47 12.8 11.99 12.25 11.99 11.58C11.99 10.85 11.67 10.59 11.2 10.42L8.8 9.58001C8.32 9.41001 8 9.15001 8 8.42001C8 7.75001 8.52 7.20001 9.16 7.20001H10.66C11.4 7.21001 12 7.83001 12 8.60001" stroke="var(--black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                        <path data-v-81d7167e="" d="M10 12.85V13.59" stroke="var(--black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-81d7167e="" d="M10 6.40997V7.18997" stroke="var(--black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path data-v-81d7167e="" d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z" stroke="var(--black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                        <path data-v-81d7167e="" d="M12.98 19.88C13.88 21.15 15.35 21.98 17.03 21.98C19.76 21.98 21.98 19.76 21.98 17.03C21.98 15.37 21.16 13.9 19.91 13" stroke="var(--black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span style="color: rgb(204, 0, 0); font-size: var(--font-small); margin-left: 5px; display: none;">Upcoming Live</span> 
                        <span data-v-5812f367="" class="marker" style="color: rgb(155, 118, 222); margin-left: 5px; display: none;">esport</span> 
                        <span data-v-5812f367="" class="marker" style="color: rgb(155, 118, 222); margin-left: 5px; display: none;">srl</span>
                      </div> 
                      <div>
                        <!-- existing code -->
                        <!-- <router-link :to="'/game' + gameId" class="prebet-match__markets">+92 Markets</router-link> -->
                        <router-link :to="'/game/'" @click="sendParentId(item.parent_match_id)">
                          +92 Markets
                        </router-link>
                        <div class="text-gray mb-2 hometeam prebet-match__teams" ><span>{{ item.parent_match_id }}</span> <span></span></div>
                      </div>
                </div>
                  
              </div></div>
           
           
       </div>
          </div>
      
      </div>
      </div>
      <div class="col col-lg-4 col-md-4 col-sm-4">
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






    <div class="time">
        <div class="pull-left" style="width: 70%; text-align: left;">
            <span style="display: flex; align-items: center;">
                <svg class="prebet-match__sport-icon"><use xlink:href="#soccer"></use></svg> 
                <span>Spain • LaLiga
    </span></span></div>
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
      
    };
  },
  mounted() {
    this.getDatas();
    this.getAirtimes();
    console.log(this.betslip);

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
    selection,
    odds: odd,
  };

  this.betslip.push(betslipItem);
  
},
updateBetslip(updatedBetslip) {
      this.betslip = updatedBetslip;
    },
    placeBet() {
      console.log("Placing bet:", this.betslip);
      // Place the bet using the betslip data
      // ...
      // Once the bet is placed, clear the betslip
      this.betslip = [];
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
    // sendParentId(parent_match_id) {
    //   axios.post('http://50.116.38.17/credit_create/bet2/', { parent_match_id })
    //     .then(response => {
    //       console.log('Parent ID sent to backend:', parent_match_id);
    //       console.log('Response from server:', response.data);
          
    //     })
    //     .catch(error => {
    //       console.error('Error sending parent ID to backend:', error);
    //     });
    // },
  

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
//     sendParentId(parent_match_id) {
//   axios.post('http://127.0.0.1:8000/bet2/', { parent_match_id })
//     .then(response => {
//       console.log('Parent ID sent to backend:', parent_match_id);
//       console.log('Response from server:', response.data);
//       this.$router.push({
//         name: 'moreGame',
//         params: {
//           parent_match_id: parent_match_id,
//           data: response.data,
//         },
//       });
//     })
//     .catch(error => {
//       console.error('Error sending parent ID to backend:', error);
//     });
// },

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
.betsslip{

 
  
  background: rgba(217, 217, 217, 0.37);
  border-radius: 8.21818px;
}

.btn1-betslip1{

width: 226.82px;
height: 56.71px;
padding-left: 1rem;
margin-left: 1rem;
background: #D9D9D9;
border-radius: 0px 8.21818px 0px 0px;
}
.btn1-betslip{

width: 226.82px;
height: 56.71px;

margin-right: 1rem;
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
.we{
  display: flex;
  margin-right: 1rem;
}
.container{
  margin: auto;
  width: 100%;

}

</style>

