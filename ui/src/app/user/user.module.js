import userApp from './user.component.js'
import userService from '../service/userService.js'

export default
  angular
    .module('userApp', [])
    .component('userApp', userApp)
    .service('userService', userService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('user', {
          url: '/user',
          component: 'userApp'
        })
    }])
    .name
