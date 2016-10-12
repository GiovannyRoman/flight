import userApp from './user.component.js'
import userService from '../service/userService.js'
import schedule from '../schedule/schedule.module.js'

export default
  angular
    .module('userApp', [schedule])
    .component('userApp', userApp)
    .service('userService', userService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('user', {
          url: '/user/:username',
          component: 'userApp'
        })
    }])
    .name
