var bcrypt = require('bcryptjs')

export default class LoginController {
  /* @ngInject */
  constructor (userService, $log, $state) {
    $log.debug('LoginController made')
    var ctrl = this
    ctrl.user
    ctrl.login = function () {
      userService.login(ctrl.user.username).then(function (valid) {
        if (bcrypt.compareSync(ctrl.user.password, valid.data.password)) {
          userService.user = valid.data
          $state.go('user')
        }
      })
    }
  }
}
