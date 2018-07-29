(function () {

  'use strict';

  angular
    .module('tokenAuthApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController'
      })
      .when('/login', {
        templateUrl: 'js/components/auth/auth.login.view.html',
        controller: 'authLoginController',
        controllerAs: 'authLoginCtrl'
      })
      .when('/register', {
        templateUrl: 'js/components/auth/auth.register.view.html',
        controller: 'authRegisterController',
        controllerAs: 'authRegisterCtrl'
      })
      .when('/status', {
        templateUrl: 'js/components/auth/auth.status.view.html',
        controller: 'authStatusController',
        controllerAs: 'authStatusCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
