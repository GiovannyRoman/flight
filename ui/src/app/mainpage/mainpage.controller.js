var bcrypt = require('bcryptjs')

export default class MainController {
  /* @ngInject */
  constructor ($log, mainpageService, $scope, $interval, $state) {
    var ctrl = this
    ctrl.flights
    ctrl.user

    $scope.refresh = function () {
      mainpageService.getFlights().then(function (flights) {
        ctrl.flights = flights
      })
    }

    ctrl.login = function () {
      mainpageService.login(ctrl.user.username).then(function (data) {
        bcrypt.compare(ctrl.user.password, data.password, function (err, res) {
          if (res === true) {
            $state.go('profile', {username: data.username})
          }
        })
      })
    }

    $scope.intervalPromise = $interval(function () {
      $scope.refresh()
    }, 1000)
    $scope.refresh()
  }
}
