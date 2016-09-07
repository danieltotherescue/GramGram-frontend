(function() {
  'use strict';

  angular
    .module("app")
    .controller("CompositionController", CompositionController);

    CompositionController.$inject = ["$log", "$http", "composeService"];

    function CompositionController($log, $http, composeService) {
      var vm = this;
      vm.api = composeService;

      $http.get("http://localhost:3000/api/msgs")
      .then(function(response) {
        vm.all = response.data.msgs;
      }, function(error) {
        console.log(error)
      });

    function newMsg() {
      $http.post("http://localhost:3000/api/msgs",
        vm.newMsg)
        .then(function(response) {
          vm.all.push(response.data.msg);
          vm.newCriminal = {};
        }, function(error) {
          console.log(error)
        });
    }

    function deleteMsg(msg) {
      console.log(msg._id);
      $http.delete("http://localhost:3000/api/msgs/"+msg._id)
        .then(function() {
          vm.all.splice(vm.all.indexOf(msg), 1);
        })
    }

    function updateMsg(msg) {
      if (msg.status == "unknown") {
        msg.status = "dead";
      } else if (msg.status == "dead") {
        msg.status = "alive"
      } else {
        msg.status = "unknown"
      }

      $http.patch("http://localhost:3000/api/msgs/"+msg._id,
        msg)
        .then(function(response) {

        }, function(error) {
          console.log(error)
        })
    }

      $log.info("CompositionController loaded!");
    }
}());
