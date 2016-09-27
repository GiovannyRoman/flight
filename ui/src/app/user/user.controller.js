
export default class UserController {
  /* @ngInject */
  constructor ($log, $scope, $interval, userService, $state, $stateParams) {
    $log.debug('UserController is made')
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

    ctrl.setRoute = function (route) {
      userService.route = route
      $state.go('map', {routeid: route.id})
    }

    ctrl.flights
    $scope.refresh = function () {
      userService.getFlights().then(function (flights) {
        ctrl.flights = flights.data
      })
    }
    $scope.intervalPromise = $interval(function () {
      $scope.refresh()
    }, 2500)
    $scope.refresh()
    $scope.getUser()
  }
}
