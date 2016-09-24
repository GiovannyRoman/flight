import apiUrl from '../api.url'

export default class UserService {
  /* @ngInject */
  constructor ($http) {
    var service = this
    service.$http = $http
    service.user

    service.login = function (username) {
      return this.$http.get(apiUrl + '/users/' + username)
    }
  }
}
