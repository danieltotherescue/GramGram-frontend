(function() {
  'use strict';

  angular
    .module('app')
    .factory("submissionService", submissionService);

  submissionService.$inject = ["$log", "submissionService", "$http"];

  function userService($log, $http) {
    $log.info("user service loaded!");

    var service = {
      index: index,
      create: create,
      show: show
    };
    return service;

    function index() {
      var promise = $http({
        method: 'GET',
        url:    'https://gram-gram.herokuapp.com/submissions',
    }


    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    'https://gram-gram.herokuapp.com/submissions',
        data:   data
      });

      console.log(data)
      return promise;
    }

    function show() {
      var promise = $http({
        method: 'GET',
        url:    'https://gram-gram.herokuapp.com/submissions/:id',
      });
      return promise;

  }}

}());
