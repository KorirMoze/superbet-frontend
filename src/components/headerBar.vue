<template>
  <nav class="flex items-center justify-between flex-wrap bg-sky-600 p-6 h-0.75">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
      <span class="font-semibold text-xl tracking-tight">DeskTop App</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Mobile App
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Bets Via Telegram
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
          Payments
        </a>
      </div>
      <!-- <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div> -->
    </div>


    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="/login" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Login
        </a>
        <a href="/betSlip" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Betslip
        </a>
        <router-link to="/registration" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Registration</router-link>
        <!-- <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Registration
        </a> -->
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
          Logout
        </a>
      </div>
    </div>
  </nav>
<div class="l-menu">
  <ul class="l-menu-items">
    <li class="item">
      <a href="/" aria-current="page" class="router-link-exact-active router-link-active">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/home.png">
        </span> 
        <span class="label">Home

        </span>
      </a>
    </li> 
    <li class="item">
      <a href="/live" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/odi-live.png">
        </span> 
        <span class="label">[ 193 ]

        </span>
      </a>
    </li> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!--fragment#dea71c8586#head-->
    <li fragment="dea71c8586" class="item">
      <a href="/sports/soccer" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/soccer.png">
        </span> 
        <span class="label">Soccer

        </span>
      </a>
    </li> <!----> 
    <li fragment="dea71c8586" class="item">
      <a href="/league" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/odi-league-2.png">
        </span> 
        <span class="label">League

        </span>
      </a>
    </li> 
    <li fragment="dea71c8586" class="item">
      <a href="/" aria-current="page" class="router-link-exact-active router-link-active" style="pointer-events: none;">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/aviator.png"> 
          <span class="icon-new red">NEW</span>
        </span> 
        <span class="label">Aviator</span>
      </a>
    </li> 
    <li fragment="dea71c8586" class="item">
      <a href="/" aria-current="page" class="router-link-exact-active router-link-active" style="pointer-events: none;">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/casino.png">
        </span> 
        <span class="label">Casino</span>
      </a>
    </li> 
    <li fragment="dea71c8586" class="item">
      <a href="/lite-games" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/odi-chapchap.png">
        </span> 
        <span class="label">ChapChap</span>
      </a>
    </li> <!----> <!----> <!----> <!----> <!----> <!----><!--fragment#dea71c8586#tail--><!--fragment#297fb138ff#head-->
    <li fragment="297fb138ff" class="item">
      <a href="/sports/esoccer" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/esoccer.png">
        </span> 
        <span class="label">eSoccer</span>
      </a>
    </li> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!--fragment#297fb138ff#tail--><!--fragment#cb925460e2#head-->
    <li fragment="cb925460e2" class="item">
      <a href="/sports/ebasketball" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/ebasketball.png">
        </span> 
        <span class="label">eBasketball</span>
      </a>
    </li> <!----> <!----> <!----> <!----> <!----> 
    <li fragment="cb925460e2" class="item">
      <a href="/esports" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/esports.png">
        </span> 
        <span class="label">eSports</span>
      </a>
    </li> <!----> 
    <li fragment="cb925460e2" class="item">
      <a href="/jackpot-games/lakitatu" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/jackpot/laki-tatu.png">
        </span> 
        <span class="label">LAKI TATU</span>
      </a>
    </li> 
    <!-- <li fragment="cb925460e2" class="item">
      <a href="/oditv" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/oditv.svg"> 
          <span class="icon-new green">LIVE</span>
        </span> 
        <span class="label">ODI Tv</span>
      </a>
    </li>  -->
    <li fragment="cb925460e2" class="item">
      <a href="/countries" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/sports.png">
        </span> 
        <span class="label">A-Z Countries</span>
      </a>
    </li> 
    <li fragment="cb925460e2" class="item">
      <a href="/promotions" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/promos.png">
        </span> 
        <span class="label">Promotions</span>
      </a>
    </li><!--fragment#cb925460e2#tail--><!--fragment#130903aa754#head-->
    <li fragment="130903aa754" class="item">
      <a href="/sports/basketball" class="">
        <span class="icon">
          <img src="https://s3-eu-west-1.amazonaws.com/odibets/img/menu/basketball.png">
        </span> 
        <span class="label">Basketball</span>
      </a>
    </li> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!--fragment#130903aa754#tail--><!--fragment#124ae1fb8c6#head-->
</ul>
</div>  
  </template>
  
  <script>
  export default {
    props: {
      dataOpenSideBar: Boolean,
      clickHambuger: Function
    },
    data() {
      return {
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-refresh',
            command: () => {
              this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            }
          },
          {
            label: 'Change Password',
            icon: 'pi pi-times',
            command: () => {
              this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
          },
        ]
      }
    },
    methods: {
      toggle(event) {
        this.$refs.menu.toggle(event);
      },
    }
  
  }
  </script>
  
  <style>
  .l-menu {
    background: #1A5F7A;
    color: #fff;
}
.l-menu {
  display: block;
  padding-top: 0.15em;
}
body * {
  box-sizing: border-box;
}
.l-menu-items {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0.5em 0.5em 0.25em 0.5em;
  overflow-x: scroll;
  overflow-y: visible;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.l-menu-items li {
  padding: 0;
  margin: 0;
  margin-right: 0.5em;
  display: inline-block;
  overflow: visible;
}
.l-menu-items li a {
  padding: 0;
  display: inline-block;
  text-align: center;
  width: 80px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
a, a:hover, a:focus {
  color: inherit;
  text-decoration: none !important;
  outline: none;
}
a {
  background-color: rgba(0,0,0,0);
}
.l-menu-items li a .icon {
  margin: 0 auto;
  display: block;
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.l-menu-items li a .icon img {
  width: 100%;
}
.l-menu-items li a .label {
  font-size: .6em;
}
  </style>