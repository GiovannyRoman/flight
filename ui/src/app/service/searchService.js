import apiUrl from '../api.url'

export default class SearchService {
  /* @ngInject */
  constructor ($http) {
    this.$http = $http

    this.getRoute = function (origin, destination) {
      return this.$http.get(apiUrl + '/flights/route/' + origin + '/' + destination)
    }

    this.save = function (username, route) {
      return this.$http.post(apiUrl + '/users/'+  username + '/routes'  , route)
    }
  }
}
