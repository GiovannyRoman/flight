
export default class SearchController {
  /* @ngInject */
  constructor ($stateParams, $scope, $log, searchService, $interval) {
    var ctrl = this
    ctrl.routes
    ctrl.origin = $stateParams.origin
    ctrl.destination = $stateParams.destination

    ctrl.save = function (route) {
      searchService.save($stateParams.username, route)
    }

    $scope.getPaths = function () {
      searchService.getPath($stateParams.origin, $stateParams.destination).then(function (paths) {
        ctrl.routes = paths.data
      })
    }

    $scope.intervalPromise = $interval(function () {
      $scope.getPaths()
    }, 2500)

    $scope.getPaths()
  }
}
