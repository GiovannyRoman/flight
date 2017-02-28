import apiUrl from './api.url.js'
import register from './register/register.module.js'
import mainpage from './mainpage/mainpage.module.js'
import profile from './profile/profile.module.js'

export default
  angular
    .module('flight', ['ngAria',
      'ngAnimate','ngMaterial',
      'ngMessages','ui.router',
      mainpage,register, profile
    ])
    .constant('apiUrl', apiUrl)
    .name
