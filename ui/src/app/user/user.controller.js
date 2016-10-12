
export default class UserController {
  /* @ngInject */
  constructor ( $scope, $interval, userService, $state, $stateParams) {

    var ctrl = this
    ctrl.user

    $scope.getUser = function () {
      userService.getUser($stateParams.username).then(function (user) {
        ctrl.user = user.data
      })
    }

    ctrl.search = function (origin, destination) {
      $state.go('search', {username: ctrl.user.username, start: origin, destination: destination})
    }

    ctrl.viewRoute = function (route) {
      userService.route = route
      $state.go('map', {routeid: route.id})
    }

    $scope.intervalPromise = $interval(function () {
      $scope.getUser()
    }, 5000)
    
    $scope.getUser()
  }
}
