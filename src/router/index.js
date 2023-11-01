import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/dashBoard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import( '../views/AboutView.vue')
//   },

   {
        name: 'registration',
        path: '/registration',
        component: () => import( '../views/RegistrationPage.vue'),
        metaInfo: {
          title: 'Football Betting Dashboard | BetNow',
          meta: [
            {
              name: 'description',
              content: 'Explore the latest football matches and place your bets on your favorite teams. Get Bonus on Your first Depost of the day.',
            },
            // Add more meta tags if needed
          ],
        },
      },
      {
        name: 'login',
        path: '/login',
        component: () => import( '../views/loginPage.vue'),
       
        metaInfo: {
          title: 'Football Betting Dashboard | BetNow',
          meta: [
            {
              name: 'description',
              content: 'Explore the latest football matches and place your bets on your favorite teams.Get 100% Bonus BetNow offers a wide range of football betting options with competitive odds.',
            },
            // Add more meta tags if needed
          ],
        },
      },
      {
        name: 'betslip',
        path: '/betslip',
        component: () => import(/* webpackChunkName: "about" */ '../views/slip.vue'),
    
      },
      {
        name: 'account',
        path: '/account',
        component: () => import( '../views/accountDetails.vue'),
      
      },
      {
        name: 'game',
        path: '/game',
        component: () => import( '../views/moreGame.vue'),
      },
      // {
      //   name: 'nav',
      //   path: '/nav',
      //   component: () => import( '../views/headerBar.vue'),
      
      // },
      {
        name: 'deposit',
        path: '/deposit',
        component: () => import( '../views/depositCash.vue'),
     
      },
      {
        name: 'more',
        path: '/more',
        component: () => import( '../views/custommore.vue'),
       
      },
      {
        name: 'results',
        path: '/results',
        component: () => import( '../views/results.vue'),
     
      },
      {
        name: 'bottomnav',
        path: '/bottomnav',
        component: () => import( '../views/bottomNav.vue'),
     
      },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
