import profileApp from './profile.component.js'
import profileService from './profile_service/profileService.js'

export default
  angular
    .module('profileApp', ['ngMap'])
    .component('profileApp', profileApp)
    .service('profileService', profileService)
    .config(['$stateProvider' , function ($stateProvider) {
      $stateProvider
        .state('profile', {
          url: '/profile/:username ',
          component: 'profileApp'
        })
    }])
    .name
