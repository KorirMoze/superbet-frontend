<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- Add your logo or text here -->
        23 Bet
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="#responsive-header">Mobile App</a>
        <a class="navbar-item" href="#responsive-header">Bets Via Telegram</a>
        <a class="navbar-item" href="#responsive-header">Payments</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="/login">Login</a>
        <a class="navbar-item" href="/account">My Account</a>
        <!-- Include your custom component here -->
        <router-link to="/registration" class="navbar-item">Registration</router-link>
        <a class="navbar-item" href="#responsive-header">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>
<style scoped>
.navbar-item{
  font-size: 2rem;
}
a{
  text-decoration: none; /* This removes the underline */
 
}
navbar{
  margin-bottom: 0 !important;
}
</style>