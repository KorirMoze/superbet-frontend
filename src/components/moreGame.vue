<template>
  <div>
    <button class="back">Back</button>
    <h1 class="stat">Statistics</h1>
    <div class="rect">
      <h3 class="tit">{{ odd_key }}</h3>
 
      <div v-if="matches && matches.length">
        <ul >
          <h2>BOTH TEAMS TO SCORE</h2>
          <li class="od" v-for="match in matches" :key="match.sub_type_id">
            
            <ul v-if="match.name === 'BOTH TEAMS TO SCORE (GG/NG)'" style="display: flex; justify-content: space-between;">
              
              <li class="od" v-for="odd in match.odds" :key="odd.odd_key">
                <span class="odds">      
                  <span class="display">{{ odd.display }}</span>
                  <span class="odd-value">{{ odd.odd_value }}</span>
              </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="rect1">
      <h3 class="tit">{{ odd_key }}</h3>
 
      <div v-if="matches && matches.length">
        <ul >
          <h2>DOUBLE CHANCE</h2>
          <li class="od" v-for="match in matches" :key="match.sub_type_id">
            
            <ul v-if="match.name === 'DOUBLE CHANCE'" style="display: flex; justify-content: space-between;">
              
              <li class="od" v-for="odd in match.odds" :key="odd.odd_key">
                <span class="odds1">      
                  <span class="display">{{ odd.display }}</span>
                  <span class="odd-value">{{ odd.odd_value }}</span>
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
        <ul >
          <h2>TOTAL</h2>
          <li class="od2" v-for="match in matches" :key="match.sub_type_id">
            
          <ul>
            <li class="od2" v-for="match in matches" :key="match.sub_type_id">
              <ul v-if="match.name === 'TOTAL'">
                <li class="od2" v-for="odd in match.odds" :key="odd.odd_key">
                  <span class="odds2">      
                    <span class="display">{{ odd.display }}</span>
                  </span>
                  <span class="odds2">      
                    <span class="odd-value">{{ odd.odd_value }}</span>
                    <br>
                  </span>
                  <br>
                </li>
              </ul>
            </li>
          </ul>

          </li>
        </ul>
      </div>
    </div>

  </div>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2>Game ID: {{ gameId }}</h2>
 
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'GameData',
    data() {
      return {
        gameId: this.$route.params.parent_match_id,
        matches: [],
        loading: true,
      };
      
    },
    mounted() {
      axios.get(`http://127.0.0.1:8000/bet2/?parent_match_id=${this.parent_match_id}`)
        .then(response => {
          console.log('Response from server:', response.data);
          this.matches = response.data.data;
        })
        .catch(error => {
          console.error('Error retrieving matches:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  };
  </script>
  <style scoped>
  .back{
  position: absolute;
  width: 117px;
  height: 52px;
  left: 173px;
  top: 100px;

  background: #1EBA01;
  border-radius: 10px;
  }
  .stat{
    position: absolute;
    width: 71px;
    height: 25px;
    left: 217px;
    top: 178px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;

    color: #000000;
  }
  .rect{
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  position: absolute;
  width: 70%;
  height: 7rem;
  left: 170px;
  top: 15rem;
  background: #ECF8F9;
  border-radius: 9.84962px;
  }
  .rect1{
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    position: absolute;
    width: 70%;
    height: 7rem;
    left: 170px;
    top: 23rem;
    background: #ECF8F9;
    border-radius: 9.84962px;
  }
  .rect2{
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    position: absolute;
    width: 70%;
    height: 7rem;
    left: 170px;
    top: 31rem;
    background: #ECF8F9;
    border-radius: 9.84962px;
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
    width: 479.73px;
    height: 46.1px;
    width: 479.73px;
    height: 46.1px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    
    border-radius: 10; 
  }
  .odds1{
    padding-top: 1rem;
    width: 479.73px;
    height: 46.1px;
    width: 20rem;
    height: 46.1px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    
    border-radius: 10; 
    
  }
  .odds2{
    flex-wrap: wrap;
    width: 20rem;
    flex-direction: column;
    justify-content: space-between;
  }
.display{
  margin-left: 1rem;
}
.odd-value{
  margin-right: 1rem;
}
li{
  display: inline !important;
  height: 3rem !important;
  padding-bottom: 1rem;
}
.od{
  display: inline;
}
ul{
  background-color:  transparent !important;
  
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


.odds2 {
  display: flex;
  align-items: center;
}

.display {
  margin-right: 10px; /* Adjust the desired spacing between the display and value */
}

</style>