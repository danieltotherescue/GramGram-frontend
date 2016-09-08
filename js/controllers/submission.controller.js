
(function() {
  'use strict';

  angular
    .module("app")
    .controller("SubmissionController", SubmissionController);

    SubmissionController.$inject = ["$log", "$http", "$state", "$stateParams"];

    function SubmissionController($log, $http, $state, $stateParams) {
      var vm = this;

      vm.all = [];
      vm.newSubmission = {};
      vm.addSubmission = addSubmission;
      // vm.composeService = composeService;

    function addSubmission() {
      vm.newSubmission.composition = $stateParams.composition_id
      $http.post("http://localhost:3000/submissions",
        vm.newSubmission)
        .then(function(response) {
          $state.go('completed-msgs')
          vm.newSubmission = {};
        }, function(error) {
          console.log(error)
        });
    }

    function showSubmission(){
      $http.get("http://localhost:3000/submissions")
      .then(function(response) {
        vm.all = response.data.submissions;
      }, function(error) {
        console.log(error)
      });
    }


      $log.info("SubmissionController loaded!");
    }
}());
