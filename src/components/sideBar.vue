<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <!-- Add your logo or text here -->
        DeskTop App
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#responsive-header">Mobile App</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#responsive-header">Bets Via Telegram</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#responsive-header">Payments</a>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/account">My Account</a>
          </li>
          <li class="nav-item">
            <!-- Assuming betterSlip is a Bootstrap component, replace the below line with your actual component -->
            <a class="nav-link">Your Component</a>
          </li>
          <li class="nav-item">
            <router-link to="/registration" class="nav-link">Registration</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#responsive-header">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDesktop: window.innerWidth >= 992, // Adjust this breakpoint as needed
      };
    },
    methods: {
      toggleMobileMenu() {
        // Toggle mobile menu or perform any other mobile-specific actions
      },
    },
    mounted() {
      // Add a resize event listener to dynamically switch between desktop and mobile views
      window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
      // Remove the resize event listener to prevent memory leaks
      window.removeEventListener("resize", this.handleResize);
    },
   
    handleResize() {
        // Update the 'isDesktop' data property based on the window width
        this.isDesktop = window.innerWidth >= 992; // Adjust this breakpoint as needed
      },
   
  };
  </script>
  
  <style scoped>
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

@import url('https://fonts.googleapis.com/css?family=Roboto');

body{
	font-family: 'Roboto', sans-serif;
}
* {
	margin: 0;
	padding: 0;
}
i {
	margin-right: 10px;
}
/*----------bootstrap-navbar-css------------*/
.navbar-logo{
	padding: 15px;
	color: #fff;
}
.navbar-mainbg{
	background-color: #5161ce;
	padding: 0px;
}
#navbarSupportedContent{
	overflow: hidden;
	position: relative;
}
#navbarSupportedContent ul{
	padding: 0px;
	margin: 0px;
}
#navbarSupportedContent ul li a i{
	margin-right: 10px;
}
#navbarSupportedContent li {
	list-style-type: none;
	float: left;
}
#navbarSupportedContent ul li a{
	color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 15px;
    display: block;
    padding: 20px 20px;
    transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}
#navbarSupportedContent>ul>li.active>a{
	color: #5161ce;
	background-color: transparent;
	transition: all 0.7s;
}
#navbarSupportedContent a:not(:only-child):after {
	content: "\f105";
	position: absolute;
	right: 20px;
	top: 10px;
	font-size: 14px;
	font-family: "Font Awesome 5 Free";
	display: inline-block;
	padding-right: 3px;
	vertical-align: middle;
	font-weight: 900;
	transition: 0.5s;
}
#navbarSupportedContent .active>a:not(:only-child):after {
	transform: rotate(90deg);
}
.hori-selector{
	display:inline-block;
	position:absolute;
	height: 100%;
	top: 0px;
	left: 0px;
	transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	background-color: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	margin-top: 10px;
}
.hori-selector .right,
.hori-selector .left{
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: #fff;
	bottom: 10px;
}
.hori-selector .right{
	right: -25px;
}
.hori-selector .left{
	left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before{
	content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #519fc9;
}
.hori-selector .right:before{
	bottom: 0;
    right: -25px;
}
.hori-selector .left:before{
	bottom: 0;
    left: -25px;
}


@media(min-width: 992px){
	.navbar-expand-custom {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
	}
	.navbar-expand-custom .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
	}
	.navbar-expand-custom .navbar-toggler {
    display: none;
	}
	.navbar-expand-custom .navbar-collapse {
    display: -ms-flexbox!important;
    display: flex!important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
	}
}


@media (max-width: 991px){
	#navbarSupportedContent ul li a{
		padding: 12px 30px;
	}
	.hori-selector{
		margin-top: 0px;
		margin-left: 10px;
		border-radius: 0;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
	}
	.hori-selector .left,
	.hori-selector .right{
		right: 10px;
	}
	.hori-selector .left{
		top: -25px;
		left: auto;
	}
	.hori-selector .right{
		bottom: -25px;
	}
	.hori-selector .left:before{
		left: -25px;
		top: -25px;
	}
	.hori-selector .right:before{
		bottom: -25px;
		left: -25px;
	}
}
  </style>