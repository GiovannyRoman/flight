import apiUrl from '../api.url'

export default class RegisterService {
  /* @ngInject */
  constructor ($http) {
    this.$http = $http

    this.getFlights = function () {
      return this.$http.get(apiUrl + '/flights')
    }
  }
}
