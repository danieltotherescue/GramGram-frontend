(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("welcome", {
        url:         "/",
        templateUrl: "/js/templates/welcome.html"
      })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/templates/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      })
      .state("signup", {
        url:          "/signup",
        templateUrl:  "/js/templates/signup.html",
        controller:   "SignInController",
        controllerAs: "vm"
      })
      .state("profile", {
        url:         "/profile",
        templateUrl: "/js/templates/profile.html"
      })
      .state("about", {
        url:         "/about",
        templateUrl: "/js/templates/about.html"
      })
      .state("compose", {
        url:         "/compose",
        templateUrl: "/js/templates/compose.html"
      })
      .state("completed-msgs", {
        url:         "/completed-msgs",
        templateUrl: "/js/templates/completed-msgs.html"
      })
      .state("realize-msg", {
        url:         "/realize-msg",
        templateUrl: "/js/templates/realize-msg.html"
      })
      .state("select-msg", {
        url:         "/select-msg",
        templateUrl: "/js/templates/select-msg.html"
      });

    $urlRouterProvider.otherwise("/");
  }

})();
