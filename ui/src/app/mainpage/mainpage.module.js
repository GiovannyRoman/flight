import mainpageApp from './mainpage.component.js'
import mainPageService from '../service/mainPageService.js'

export default
  angular
    .module('mainpageApp', [])
    .component('mainpageApp', mainpageApp)
    .service('mainPageService', mainPageService)
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
          url: '/',
          component: 'mainpageApp'
        })
    }])
    .name
