
export default class SearchController {
  /* @ngInject */
  constructor ($stateParams, $scope, $log, searchService, $interval,$state) {
    var ctrl = this
    ctrl.routes

    ctrl.origin = $stateParams.start
    ctrl.destination = $stateParams.destination

    ctrl.save = function (route) {
      searchService.save($stateParams.username, route)
      $state.go('user', {username: $stateParams.username})
    }

    $scope.getRoute = function () {
      searchService.getRoute(ctrl.origin, ctrl.destination).then(function (paths) {
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
