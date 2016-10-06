
export default class SearchController {
  /* @ngInject */
  constructor ($stateParams, $scope, $log, searchService, $interval) {
    var ctrl = this
    ctrl.routes
    ctrl.airTime = []

    ctrl.origin = $stateParams.start
    ctrl.destination = $stateParams.destination

    ctrl.save = function (route) {

      console.log(route)
      searchService.save($stateParams.username, route)
    }

    $scope.getRoute = function () {
      searchService.getPaths(ctrl.origin, ctrl.destination).then(function (paths) {
        console.log(paths.data)
        ctrl.routes = paths.data
      })
    }

    $scope.intervalPromise = $interval(function () {
      $scope.getRoute()
    }, 2500)

    $scope.getRoute()
  }
}
