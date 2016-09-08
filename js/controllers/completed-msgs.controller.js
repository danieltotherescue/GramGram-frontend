(function() {
  'use strict';

  angular
    .module("app")
    .controller("CompletedMsgController", CompletedMsgController);

  CompletedMsgController.$inject = ["$log", "$http", "$state"];

function CompletedMsgController($log, $http, $state) {
  var vm = this
  vm.title = "CompletedMsgController"
  console.log(vm.title)
  $http.get("http://localhost:3000/submissions")
  .then(function(response) {
    vm.submissions = response.data.submissions;
    console.log(vm.submissions);
  }, function(error) {
    console.log(error)
  });

  // $http.get("http://localhost:3000/compositions")
  // .then(function(response) {
  //   vm.messages = response.data.compositions;
  // }, function(error) {
  //   console.log(error)
  // });

  //whne clicked, the row will take you back to the home page
  vm.handleMessageClick = function (submission){
    $state.go('welcome')
    console.log(submission.title);
  }
}
}());
