var bcrypt = require('bcryptjs')

export default class LoginController {
  /* @ngInject */
  constructor (userService, $log, $state) {
    $log.debug('LoginController made')
    var ctrl = this
    ctrl.user
    ctrl.login = function () {
      userService.login(ctrl.user.username).then(function (valid) {
        $log.debug(valid.data.password)
        $log.debug(ctrl.user.password)
        if (bcrypt.compareSync(ctrl.user.password, valid.data.password)) {
          userService.user = valid.data
          $log.debug(userService.user)
          $state.go('user')
        }
        $log.debug(userService.user)
      })
    }
  }
}
