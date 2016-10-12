import apiUrl from '../api.url'

export default class ScheduleService {
  /* @ngInject */
  constructor ($http) {
    var service = this
    service.$http = $http
    service.route

    this.getFlights = function () {
      return this.$http.get(apiUrl + '/flights')
    }
  }
}
