import loginApp from './login.component.js'
import userService from '../service/userService.js'

export default
  angular
    .module('loginApp', [])
    .component('loginApp', loginApp)
    .service('userService', userService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          component: 'loginApp'
        })
    }])
    .name
