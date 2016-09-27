import mapApp from './_map.component.js'
import mapService from '../service/_mapService.js'

export default
  angular
    .module('mapApp', ['ngMap'])
    .component('mapApp', mapApp)
    .service('mapService', mapService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('map', {
          url: '/map/:routeid',
          component: 'mapApp'
        })
    }])
    .name
