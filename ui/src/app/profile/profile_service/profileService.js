
export default class ProfileService {
  /* @ngInject */
  constructor ($http, apiUrl) {
    var service = this
    service.$http = $http

    service.getUser = function (username) {
      return service.$http.get(apiUrl + '/users/' + username).then(result => result.data)
    }

    service.bookflight = function (username, route) {
      return service.$http.post(apiUrl + '/users/' + username + '/routes', route).then(result => result.data)
    }

    service.getFlights = function () {
      return service.$http.get(apiUrl + '/flights').then(result => result.data)
    }

    service.getLocations = function () {
      return service.$http.get(apiUrl + '/location').then(result => result.data)
    }

    service.findFlightRoutes = function (origin, destination) {
      return service.$http.get(apiUrl + '/flights/route/' + origin + '/' + destination).then(result => result.data)
    }

    service.save = function (username, route) {
      return service.$http.post(apiUrl + '/users/'+  username + '/routes', route).then(result => result.data)
    }

    service.getLocations = function () {
      return service.$http.get(apiUrl + '/location').then(result => result.data)
    }

    service.getMarkerByCityName = function (name) {
      return service.$http.get(apiUrl + '/location/' + `name`, { params: { name } }).then(result => result.data)
    }

  }
}
