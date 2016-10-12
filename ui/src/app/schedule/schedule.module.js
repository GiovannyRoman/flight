import scheduleApp from './schedule.component.js'
import scheduleService from '../service/scheduleService.js'

export default
  angular
    .module('scheduleApp', [])
    .component('scheduleApp', scheduleApp)
    .service('scheduleService', scheduleService)
    .name
