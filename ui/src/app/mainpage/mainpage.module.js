import mainpageApp from './mainpage.component.js'
import mainPageService from '../service/mainPageService.js'
import schedule from '../schedule/schedule.module.js'

export default
  angular
    .module('mainpageApp', [schedule])
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
