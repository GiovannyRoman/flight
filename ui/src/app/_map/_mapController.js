export default
/* @ngInject */
class MapController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []

  constructor (userService, $log, $scope) {
    var ctrl = this
    let markers = []

    $scope.getRoute = function () {
      ctrl.route = userService.route
      console.log(userService.route)
    }

    $log.debug('MapController is made')

    userService.getLocations().then(function (data) {
      markers = data.data
    })

    markers.forEach(marker => this.addMarker(marker.latitude, marker.longitude))
    let origin = ''
    let destination = ''
    for (let i = 0; i < ctrl.route.flights.length; i++) {
      let flight = ctrl.route.flights[i]
      origin = userService.getMarkerByCityName(flight.origin)
      destination = userService.getMarkerByCityName(flight.destination)
      this.addPath(origin, destination, '#FF3388')
    }
    $scope.getRoute()
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }
}
