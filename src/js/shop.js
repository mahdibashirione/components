

//function router() {
//  const routers = [
//    { path: '/src/page/productspage.html', view: '' },
//    { path: '/cart', view: '' }
//  ]

//  const potentialRoutes = routers.map(route => {
//    return {
//      route,
//      isMatch: location.pathname === route.path
//    }
//  })

//  let match = potentialRoutes.find(route => route.isMatch)

//  if (!match) {
//    match = {
//      route: { path: '/not-fond', view: () => console.log('404') },
//      isMatch: true,
//    }
//  }

//  document.querySelector('#body').innerHTML = match.route.view()
//}

//function navigateTo(url) {
//  history.pushState(null, null, url)
//  router();
//}

//window.addEventListener('popstate', router)

//document.addEventListener('DOMContentLoaded', (events) => {
//  document.body.addEventListener('click', e => {
//    if (e.target.matches('[data-link]')) {
//      e.preventDefault()
//      navigateTo(e.target.href)
//    }
//  })
//  router()
//})

//!check connect to internet
//function CheckInternet() {
//  return (window.navigator.onLine ? 'on' : 'off') + 'line'
//}

//setInterval(() => {
//  console.log(CheckInternet())
//}, 10000)