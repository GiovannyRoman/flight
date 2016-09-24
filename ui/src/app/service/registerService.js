import apiUrl from '../api.url'

export default class RegisterService {
  /* @ngInject */
  constructor ($http) {
    this.$http = $http

    this.createUser = function (User) {
      return this.$http.post(apiUrl + '/users', User)
    }
  }
}
