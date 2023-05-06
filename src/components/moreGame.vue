<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2>Game ID: {{ gameId }}</h2>
        <ul>
          <li v-for="match in matches" :key="match.id">
            {{ match }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'GameData',
    data() {
      return {
        gameId: this.$route.params.gameId,
        matches: [],
        loading: true,
      };
      
    },
    mounted() {
      axios.get(`http://127.0.0.1:8000/bet2/?parent_match_id=${this.gameId}`)
        .then(response => {
          console.log('Response from server:', response.data);
          this.matches = response.data;
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
  