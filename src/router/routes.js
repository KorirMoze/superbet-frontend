
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
      }
    ]
  }
]
