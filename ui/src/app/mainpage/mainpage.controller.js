export default class MainController {
  /* @ngInject */
  constructor ($log, mainPageService) {
    $log.debug('mainController is a go.')
    var ctrl = this
    ctrl.flights

    this.getFlights = function () {
      ctrl.flights = mainPageService.getFlights().data
      console.log(ctrl.flights)
    }
  }
}
