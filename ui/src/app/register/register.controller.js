'use strict'

var bcrypt = require('bcryptjs')

export default class RegisterController {
  /* @ngInject */
  constructor (registerService, $log, $state) {
    $log.debug('RegisterController is a go.')
    var ctrl = this
    ctrl.user

    this.register = function () {
      ctrl.user.password = bcrypt.hashSync(ctrl.user.password, 8)
      registerService.createUser(ctrl.user).then(function () {
        $state.go('home')
      })
    }
  }
}
