(function() {
  'use strict';

  angular
    .module('app')
    .factory("composeService", composeService);

  composeService.$inject = ["$log", "composeService", "$http"];

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
        url:    'https://gram-gram.herokuapp.com/users',
        data:   data
      });

      console.log(data)
      return promise;
    }

    function show() {
      var promise = $http({
        method: 'GET',
        url:    'https://gram-gram.herokuapp.com/users/me',
      });
      return promise;

  }}

}());
