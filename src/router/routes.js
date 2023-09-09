
export default [
  {
    name: "Master",
    path: "/",
    component: import('./../pages/layout/masterWang'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashBoard',
        path: '/dashboard',
        component: import('./../pages/layout/dashBoard'),
      },
      {
        name: 'registration',
        path: '/registration',
        component: import('./../components/RegistrationPage'),
      },
      {
        name: 'login',
        path: '/login',
        component: import('./../components/loginPage'),
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
