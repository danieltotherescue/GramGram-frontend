(function () {
  'use strict';

  angular
    .module('app')
    .factory("userService", userService);

  userService.$inject = ["$log", "$http"];

  function userService($log, $http) {
    $log.info("user service loaded!");

    var service = {
      create: create,
      show: show
    };
    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    'http://localhost:3000/users',
        data:   data
      });

      console.log(data)
      return promise;
    }

    function show() {
      var promise = $http({
        method: 'GET',
        url:    'http://localhost:3000/users/me',
      });
      return promise;

  }}

})();
