<template>
    <div class="bdy">
      <div class="row">
    
    
    
            <div class="col-12 col-lg-12 col-md-12 col-sm-12">
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
    
      <style scoped>
      .bdy{
        background-color: #918f8f !important;
        width: 100%;
        height: 100%;
        overflow: scroll; /* Prevent scrolling */
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
            .btn-remove{
                padding: 0 !important;
            }
            .row{
                width: 100% !important;
              }
        }
    </style>