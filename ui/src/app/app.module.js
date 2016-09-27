import apiUrl from './api.url'
import register from './register/register.module.js'
import mainpage from './mainpage/mainpage.module.js'
import login from './login/login.module.js'
import user from './user/user.module.js'
import _map from './_map/_map.module.js'
import search from './search/search.module.js'

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
      login,
      user,
      _map, search
    ])
    .constant('apiUrl', apiUrl)
    .name
