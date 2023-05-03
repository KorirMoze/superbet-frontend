<template>
    <div>
      <h2>Game Data for ID: {{ gameId }}</h2>
      <!-- fetch and display game data here -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['gameId']
    // add code to fetch and display game data
  }
  </script>