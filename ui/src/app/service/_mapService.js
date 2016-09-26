import apiUrl from '../api.url'

export default class MapService {
  /* @ngInject */
  constructor ($http) {
    this.$http = $http
    this.route

    this.getLocations = function () {
      return this.$http.get(apiUrl + '/location').then(result => result.data)
    }
    this.getMarkerByCityName = function (name) {
      return this.$http.get(`${this.apiUrl}/location/name`, { params: { name } })
    }
  }
}
