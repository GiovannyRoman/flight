export default class ScheduleController {
    /* @ngInject */
    constructor ($log, $scope, scheduleService,$interval) {
      $log.debug('UserController is made')
      var ctrl = this
      ctrl.flights

      $scope.refresh = function () {
        scheduleService.getFlights().then(function (flights) {
          ctrl.flights = flights.data
        })
      }

      $scope.intervalPromise = $interval(function () {
        $scope.refresh()
      }, 2500)

      $scope.refresh()
    }
}
