export default class UserController {
  /* @ngInject */
  constructor ($log, $scope, $interval, userService) {
    $log.debug('UserController is made')
    var ctrl = this
    ctrl.user
    $scope.getUser = function () {
      ctrl.user = userService.user
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
