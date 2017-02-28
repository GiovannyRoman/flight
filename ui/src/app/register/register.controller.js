'use strict'

var bcrypt = require('bcryptjs')

export default class RegisterController {
  /* @ngInject */
  constructor (registerService, $log, $state) {
    var ctrl = this
    ctrl.user

    ctrl.register = function () {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(ctrl.user.password, salt, function(err, hash) {
              ctrl.user.password = hash
                registerService.createUser(ctrl.user)
                $state.go('home')
            })
          })
        }
  }
}
