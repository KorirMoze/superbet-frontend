<template>
    <div class="bottomnav">
   
            <a class="nav-link" href="/login">Login</a>
     
            <a class="nav-link" href="/account">My Account</a>

            <a class="nav-link">Your Component</a>
       
            <router-link to="/registration" class="nav-link">Registration</router-link>
         
     
            <a class="nav-link" href="#responsive-header">Logout</a>
        
    </div>
</template>
<style scoped>
.bottomnav{
    background-color: #45474B;
    color: #F4CE14;
    display: flex;
    justify-content: space-between;
}

</style>