import loginApp from './login.component.js'
import loginService from '../service/loginService.js'

export default
  angular
    .module('loginApp', [])
    .component('loginApp', loginApp)
    .service('loginService', loginService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          component: 'loginApp'
        })
    }])
    .name
