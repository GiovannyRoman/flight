
export default class MainpageService {
  /* @ngInject */
  constructor ($http, apiUrl) {
    var service = this
    service.$http = $http

    service.login = function (username) {
      return service.$http.get(apiUrl + '/users/' + username).then(result => result.data)
    }
    service.getFlights = function () {
      return service.$http.get(apiUrl + '/flights').then(result => result.data)
    }
  }
}
