import apiUrl from '../api.url'

export default class MapService {
  /* @ngInject */
  constructor ($http) {
    this.$http = $http

    this.getPaths = function (origin, destination) {
      return this.$http.get(apiUrl)
    }

    this.save = function (username, route) {
      return this.$http.post(apiUrl, route)
    }
  }
}
