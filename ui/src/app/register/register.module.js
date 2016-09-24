import registerApp from './register.component.js'
import registerService from '../service/registerService.js'

export default
  angular
    .module('registerApp', [])
    .component('registerApp', registerApp)
    .service('registerService', registerService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('register', {
          url: '/register',
          component: 'registerApp'
        })
    }])
    .name
