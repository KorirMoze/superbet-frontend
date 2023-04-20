
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
        name: 'betSlip',
        path: '/betSlip',
        component: import('./../components/betterSlip'),
      },
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
