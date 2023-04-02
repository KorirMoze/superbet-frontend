
export default [
    {
      name: "Master",
      path: "/",
      component: import('./../pages/layout/masterWang'),
      redirect: '/dashBoard',
      children: [
        {
          name: 'dashBoard',
          path: '/dashboard',
          component: import('./../pages/layout/dashBoard'),
        }
      ]
      },
  
  ]