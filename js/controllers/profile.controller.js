(function() {
  'use strict';

  angular
    .module("app")
    .controller("ProfileController", ProfileController);

  ProfileController.$inject = ["$log", "$http", "$state", "authService"];

function ProfileController($log, $http, $state, authService) {
  var vm = this
  console.log(authService.currentUser())
  vm.title = "ProfileController"
  console.log(vm.title)
  $http.get("https://gram-gram.herokuapp.com/submissions")
  .then(function(response) {
    vm.submissions = response.data.submissions.filter(function(submission){
      return submission.user !== authService.currentUser._id;
    });
    console.log(vm.submissions);
  }, function(error) {
    console.log(error)
  });

  $http.get("https://gram-gram.herokuapp.com/compositions")
  .then(function(response) {
    vm.messages = response.data.compositions.filter(function(composition){
      return composition.user !== authService.currentUser._id;
    });
    console.log(vm.messages);
  }, function(error) {
    console.log(error)
  });

  //when clicked, the row will take you back to the home page
  vm.handleMessageClick = function (submission){
    $state.go('welcome')
    console.log(submission.title);
  }
}
}());
