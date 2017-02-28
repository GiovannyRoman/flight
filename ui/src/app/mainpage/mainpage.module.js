import mainpageApp from './mainpage.component.js'
import mainpageService from './mainpage_service/mainpageService.js'

export default
  angular
    .module('mainpageApp', [])
    .component('mainpageApp', mainpageApp)
    .service('mainpageService', mainpageService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
          url: '/',
          component: 'mainpageApp'
        })
    }])
    .name
