
export default class SearchController {
  /* @ngInject */
  constructor ($stateParams, $scope, $log, searchService, $interval) {
    var ctrl = this
    ctrl.routes
    ctrl.airTime = []

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

    ctrl.findAir = function () {
      for (let i = 0; i < ctrl.routes.length; i++) {
        let route = ctrl.routes[i]
        let time = 0
        for (let j = 0; i < route.length; j++) {
          time = route[j].flightTime
        }
        ctrl.airTime.push(time)
      }
    }

    $scope.intervalPromise = $interval(function () {
      $scope.getPaths()
    }, 2500)

    $scope.getPaths()
  }
}
