import apiUrl from '../api.url'

export default class LoginService {
  /* @ngInject */
  constructor ($http) {
    var service = this
    service.$http = $http

    service.login = function (username) {
      return this.$http.get(apiUrl + '/users/' + username)
    }
  }
}
