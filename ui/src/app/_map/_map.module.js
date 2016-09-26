import mapApp from './_map.component.js'
import userService from '../service/userService.js'

export default
  angular
    .module('mapApp', ['ngMap'])
    .component('mapApp', mapApp)
    .service('userService', userService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('map', {
          url: '/map',
          component: 'mapApp'
        })
    }])
    .name
