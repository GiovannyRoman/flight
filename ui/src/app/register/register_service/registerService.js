

export default class RegisterService {
  /* @ngInject */
  constructor ($http, apiUrl) {
    var service = this
    service.$http = $http

    this.createUser = function (User) {
      return service.$http.post(apiUrl + '/users', User).then(result => result.data)
    }

  }
}
