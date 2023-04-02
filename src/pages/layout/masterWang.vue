<template>
    <div class="w-full h-full flex">
      <sideBar :dataOpenSideBar="openSidebar" />
      <div class="w-full h-full">
        <headerTop :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
        <div class="w-full h-[calc(100vh-50px)]">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import headerTop from '../../components/headerBar.vue'
  import sideBar from '../../components/sideBar.vue'
  
  export default {
    components: { headerTop, sideBar },
    data() {
      return {
        openSidebar: true
      }
    },
    methods: {
      toggleSidebar() {
        this.openSidebar = !this.openSidebar
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>