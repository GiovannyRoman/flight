import searchApp from './search.component.js'
import searchService from '../service/searchService.js'

export default
  angular
    .module('searchApp', [])
    .component('searchApp', searchApp)
    .service('searchService', searchService)
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('search', {
          url: '/search/:username/:start/:destination',
          component: 'searchApp'
        })
    }])
    .name
