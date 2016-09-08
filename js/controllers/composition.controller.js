(function() {
  'use strict';

  angular
    .module("app")
    .controller("CompositionController", CompositionController);

    CompositionController.$inject = ["$log", "$http", "$state"];

    function CompositionController($log, $http, $state) {
      var vm = this;

      vm.all = [];
      vm.newComposition = {};
      vm.addComposition = addComposition;
      // vm.composeService = composeService;


    function addComposition() {
      $http.post("http://localhost:3000/compositions",
        vm.newComposition)
        .then(function(response) {
          $state.go('select-msg')
          vm.newComposition = {};
        }, function(error) {
          console.log(error)
        });
    }

    function showComposition(){
      $http.get("http://localhost:3000/compositions")
      .then(function(response) {
        vm.all = response.data.compositions;
      }, function(error) {
        console.log(error)
      });
    }


      $log.info("CompositionController loaded!");
    }
}());
