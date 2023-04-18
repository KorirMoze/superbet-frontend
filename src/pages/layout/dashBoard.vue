<template>
    <div class="pop">
        <div class="popular">
            <h2>Popular Games</h2>
            <betterSlip :betslip="betslip"/>
        </div>
        <div class="popgame">
            <div class="max-w-sm rounded overflow-hidden shadow-lg tt">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg tt">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg tt">
                <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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
            <a class="prebet-match__markets">
                +92 Markets
            </a></div>
            
        </div></div>
     
     
 </div>
    </div>

</div>

</template>
<script>
import axios from 'axios';
import betterSlip from "@/components/betterSlip.vue";
// import masterWang from "@/pages/betterSlip.vue";
export default {
  components: {
    betterSlip,
    // masterWang
  },
  name: 'dropDown',
  props: ['title', 'items'],
  data() {
    return {
      Datas: [],
      betslip: [],
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
    addToBetslip(item, selection) {
      console.log("Clicked on item: ", item);
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

.prebet-match__sport-icon {
    height: 15px;
    width: 15px;
    fill: var(--light-black);
    margin-right: 2px;
}
style attribute {
    width: 70%;
    text-align: left;
}
.pop{
    display: block;
    margin: auto;
    width: 60%;
}
.popular{
    background-color: #1A5F7A;
    font-weight: 700;
    text-align: left;
    padding: 0.5em 0.75em;
    display: block;
    margin: auto;
    width: 100%;
}
.popgame{
    display: flex;
    flex-direction: horizontal;
}
.tt{
    margin-right: 10px;
}
.all_games{
    width: 60%;
    margin: auto;
    text-align: left !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
}
.prebet-match__teams {
    display: flex;
    flex-direction: column;
    padding: 2px 5px;
    flex-basis: 50%;
    font-weight: var(--font-weight-medium);
    text-transform: capitalize;
    font-size: var(--font-medium);
    color: var(--black);
    line-height: 12px;
    white-space: nowrap;
    cursor: pointer;
}
.hometeam {
    justify-content: space-between;
}
.match {
    width: 100%;
}

.prebet-match__odd-market__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
}
div {
    display: block;
}
.prebet-match {
    font-size: var(--font-medium);
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px;
}
.prebet-match__teams {
    display: flex;
    flex-direction: column;
    padding: 2px 5px;
    flex-basis: 50%;
    font-weight: var(--font-weight-medium);
    text-transform: capitalize;
    font-size: var(--font-medium);
    color: var(--black);
    line-height: 12px;
    white-space: nowrap;
    cursor: pointer;
}
.prebet-match__teams__home {
    margin-bottom: 8px;
}

.prebet-match__teams {
    display: flex;
    flex-direction: column;
    padding: 2px 5px;
    flex-basis: 50%;
    font-weight: var(--font-weight-medium);
    text-transform: capitalize;
    font-size: var(--font-medium);
    color: var(--black);
    line-height: 12px;
    white-space: nowrap;
    cursor: pointer;
}
.prebet-match__odds__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-basis: 50%;
}
.prebet-match__odds {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex: 10;
}
.prebet-match__odds[number-of-odds="3"] .prebet-match__odd {
    width: calc(100% / 3 - 4px);
}

.prebet-match__odd {
    background-color: var(--light-gray);
    color: var(--black);
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 15px;
    align-items: center;
    padding: 8px 5px;
    border: none;
}

a, button {
    cursor: pointer;
}

button, input, select, textarea {
    outline: none;
    appearance: none;
    border-radius: 0;
    -webkit-appearance: none;
}

body, button, html, input, pre, select, textarea {
    font-family: var(--font),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    font-size: 14px;
    color: var(--black);
}
.prebet-match__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.prebet-match__markers {
    display: flex;
    flex-direction: row;
    align-items: center;
}
lement.style {
    color: rgb(204, 0, 0);
    font-size: var(--font-small);
    margin-left: 5px;
    display: none;
}
.prebet-match__markets {
    font-weight: var(--font-weight-normal);
    font-size: var(--font-small);
    text-align: left;
    color: var(--green);
    padding: 5px 0;
    text-transform: capitalize;
    cursor: pointer;
}
</style>