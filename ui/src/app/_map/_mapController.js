import colors from './routeColors.js'

export default
/* @ngInject */
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []
  colors = colors

  constructor (mapService, $log, $scope, $stateParams) {
    var ctrl = this
    ctrl.route
    ctrl.col = 0

    $scope.getRoute = function () {
      mapService.getRoute($stateParams.routeid).then(function (route) {
        ctrl.route = route.data

        mapService.getLocations().then(function (data) {
          ctrl.loc = data
          ctrl.loc.forEach(function (marker) {
            ctrl.addMarker(marker.latitude, marker.longitude)
          })
        })
        for (let i = 0; i < ctrl.route.flights.length; i++) {
          let flight = ctrl.route.flights[i]
          ctrl.getflightPath(flight.origin, flight.destination)
        }
      })
    }
    ctrl.getflightPath = function (origin, destination) {
      mapService.getMarkerByCityName(origin).then(function (start) {
        origin = start.data
        mapService.getMarkerByCityName(destination).then(function (end) {
          destination = end.data

          let color = ctrl.colors[ctrl.col]
          ctrl.addPath(origin, destination, color.value)
          ctrl.col++
        })
      })
    }

    ctrl.addMarker = function (latitude, longitude) {
      ctrl.markers.push({
        position: `[${latitude}, ${longitude}]`
      })
    }

    $scope.getRoute()
    ctrl.addPath = function (a, b, color) {
      ctrl.paths.push({
        path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
        strokeColor: color,
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true
      })
    }
  }
}
