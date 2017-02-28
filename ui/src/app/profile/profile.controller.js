import colors from './routeColors.js'

export default class ProfileController {
  zoom = 7
  center = [35.5175, -86.5804]
  markers = []
  paths = []
  colors = colors

  /* @ngInject */
  constructor (profileService, $scope, $interval,$stateParams) {

    var ctrl = this
    ctrl.flights
    ctrl.user
    ctrl.locations
    ctrl.origin
    ctrl.destination
    ctrl.flightroutes
    ctrl.selectedflight
    ctrl.flightplans

    //starting index for colors
    ctrl.col = 0

    ctrl.bookSingleflight = function (flight) {
      const route = {}
      const bookflight = {}
      route.origin = flight.origin
      route.destination = flight.destination
      route.flightTime = flight.flightTime
      route.layovertime = 0
      bookflight.origin = flight.origin
      bookflight.destination = flight.destination
      bookflight.flightTime = flight.flightTime
      bookflight.offset = flight.offset
      route.flights = []
      route.flights[0] = bookflight
      profileService.bookflight($stateParams.username, route).then(function (result) {
        $scope.getUser()
      })
    }

    //gets all possible routes
    ctrl.allPaths = function () {
      profileService.findFlightRoutes(ctrl.origin, ctrl.destination).then(function (result) {
        ctrl.flightplans = result
      })
    }

    //save the flight route
    ctrl.save = function (route) {
      profileService.save($stateParams.username, route).then(function (result) {
        $scope.getUser()
      })
    }

    ctrl.mapRoute = function (route) {
      //resets the path so different paths are not displayed
      ctrl.paths = []
      for (let i = 0; i < route.flights.length; i++) {
        let flight = route.flights[i]
        ctrl.getflightPath(flight.origin, flight.destination)
      }
      ctrl.col = 0
    }

    ctrl.getflightPath = function (origin, destination) {
      profileService.getMarkerByCityName(origin).then(function (start) {
        origin = start
        profileService.getMarkerByCityName(destination).then(function (end) {
          destination = end
          let color = ctrl.colors[ctrl.col]
          ctrl.addPath(origin, destination, color.value)
          ctrl.col++
        })
      })
    }

    //adds markers on the map
    ctrl.addMarker = function (latitude, longitude) {
      ctrl.markers.push({
        position: `[${latitude}, ${longitude}]`
      })
    }

    //adds path between two points on the map
    ctrl.addPath = function (a, b, color) {
      ctrl.paths.push({
        path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
        strokeColor: color,
        strokeOpacity: 1.0,
        strokeWeight: 3,
        geodesic: true
      })
    }

    $scope.getUser = function () {
      profileService.getUser($stateParams.username).then(function (result) {
        ctrl.user = result
      })
    }

    $scope.getLocations = function () {
      profileService.getLocations().then(function (result) {
        ctrl.locations = result

        ctrl.locations.forEach(function (marker) {
          ctrl.addMarker(marker.latitude, marker.longitude)
        })
      })
    }

    $scope.refresh = function () {
      profileService.getFlights().then(function (flights) {
        ctrl.flights = flights
      })
    }

    $scope.intervalPromise = $interval(function () {
      $scope.refresh()
      ctrl.allPaths()
    }, 1000)

    $scope.refresh()
    $scope.getUser()
    $scope.getLocations()

  }

}
