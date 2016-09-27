var bcrypt = require('bcryptjs')

export default class LoginController {
  /* @ngInject */
  constructor (loginService, $log, $state) {
    $log.debug('LoginController made')
    var ctrl = this
    ctrl.user
    ctrl.login = function () {
      loginService.login(ctrl.user.username).then(function (valid) {
        if (bcrypt.compareSync(ctrl.user.password, valid.data.password)) {
          $state.go('user', {username: valid.data.username})
        }
      })
    }
  }
}
