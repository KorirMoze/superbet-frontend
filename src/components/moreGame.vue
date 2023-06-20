<template>
  <div>
    <button class="back">Back</button>
    <h1 class="stat">Statistics</h1>
    <div class="rect">
      <h3 class="tit">{{ odd_key }}</h3>
      <ul>
        <li v-for="match in matches" :key="match.sub_type_id">
          <h3 class="name">{{ match.name }}</h3>
          <ul>
            <li v-for="odd in match.odds" :key="odd.outcome_id">
              {{ odd.display }}: {{ odd.odd_value }}
            </li>
          </ul>
        </li>
      </ul>
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
  <style>
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

  position: absolute;
  width: 1048px;
  height: 252px;
  left: 173px;
  top: 229px;

  background: rgba(217, 217, 217, 0.25);
  border-radius: 9.84962px;
  }
  .name{
    position: absolute;
    width: 111px;
    height: 28px;
    left: 283px;
    top: 381.52px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 175%;
    /* identical to box height, or 28px */

    letter-spacing: 0.01em;

    color: #000000;
  }
</style>