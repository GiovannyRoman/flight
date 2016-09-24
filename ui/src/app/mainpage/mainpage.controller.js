export default class MainController {
  /* @ngInject */
  constructor ($log, mainPageService, $scope, $interval) {
    $log.debug('mainController is a go.')
    var ctrl = this
    ctrl.flights
    $scope.refresh = function () {
      mainPageService.getFlights().then(function (flights) {
        ctrl.flights = flights.data
      })
    }

    $scope.intervalPromise = $interval(function () {
      $scope.refresh()
    }, 1000)
    $scope.refresh()
    //
    // this.getFlights = function () {
    //   ctrl.flights = mainPageService.getFlights().data
    //   console.log(ctrl.flights)
    // }
  }
}
