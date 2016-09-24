import flightMap from './map/map.module'
import apiUrl from './api.url'
import register from './register/register.module.js'
import mainpage from './mainpage/mainpage.module.js'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',
      mainpage,
      register,
      flightMap
    ])
    .constant('apiUrl', apiUrl)
    .name
