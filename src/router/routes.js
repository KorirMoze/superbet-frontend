
export default [
  {
    mode: 'history',
    name: "Master",
    path: "/",
    component: import('./../pages/layout/masterWang'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashBoard',
        path: '/dashboard',
        component: import('./../pages/layout/dashBoard'),
        metaInfo: {
          title: 'Football Betting Dashboard | BetNow',
          meta: [
            {
              name: 'description',
              content: 'Explore the latest football matches and place your bets on your favorite teams. BetNow offers a wide range of football betting options with competitive odds.',
            },
            // Add more meta tags if needed
          ],
        },
      },
      {
        name: 'registration',
        path: '/registration',
        component: import('./../components/RegistrationPage'),
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
        component: import('./../components/loginPage'),
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
        component: import('./../components/slip'),
      },
      {
        name: 'account',
        path: '/account',
        component: import('./../components/accountDetails'),
      },
      {
        name: 'game',
        path: '/game',
        component: import('./../components/moreGame'),
      },
      {
        name: 'nav',
        path: '/nav',
        component: import('./../components/headerBar'),
      },
      {
        name: 'deposit',
        path: '/deposit',
        component: import('./../components/depositCash'),
      },
      {
        name: 'more',
        path: '/more',
        component: import('./../components/custommore'),
      },
      {
        name: 'results',
        path: '/results',
        component: import('./../components/results'),
      },
      // {
      //   name: 'betslip',
      //   path: '/betslip',
      //   component: import('./../components/betterSlip'),
      // },
  
      // {
      //   path: "/betslip",
      //   components: {
      //     header: import('./../components/betterSlip'),
      //     // default: import('./../pages/layout/masterwang'),
      //   },
      //   props: {
      //     header: {
      //       betslip: [], // pass an empty array as the default value for the betslip prop
      //     },
      //   },
      //   // ...other betslip route configuration...
      // },
    ]
  }
]
