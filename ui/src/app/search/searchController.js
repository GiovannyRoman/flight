
export default class SearchController {
  /* @ngInject */
  constructor ($stateParams, $scope, $log, searchService, $interval) {
    var ctrl = this
    ctrl.routes

    ctrl.origin = $stateParams.start
    ctrl.destination = $stateParams.destination

    ctrl.save = function (route) {
      searchService.save($stateParams.username, route)
    }

    $scope.getPaths = function () {
      searchService.getPaths(ctrl.origin, ctrl.destination).then(function (paths) {
        console.log(paths.data)
        ctrl.routes = paths.data
      })
    }

    $scope.intervalPromise = $interval(function () {
      $scope.getPaths()
    }, 2500)

    $scope.getPaths()
  }
}
