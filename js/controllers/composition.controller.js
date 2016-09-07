(function() {
  'use strict';

  angular
    .module("app")
    .controller("CompositionController", CompositionController);

    CompositionController.$inject = ["$log", "authService"];

    function CompositionController($log, authService) {
      var vm = this;

      vm.authService = authService;

      $log.info("CompositionController loaded!");
    }
}());
