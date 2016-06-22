(function(){
  'use strict'

  angular.module('app.layout')
  .directive('lwNavbar', lwNavbar)

  function lwNavbar(){
    return {
      templateUrl: 'app/layout/navbar.html',
      restrict: 'E',
      scope: {},
      controller: NavbarController,
      controllerAs:'vm'
    }
  }

NavbarController.$inject = ['$location', 'authService']
  function NavbarController ( $location, authService) {
    var vm = this;

    vm.isLoggedIn = authService.isLoggedIn
    vm.logOut = logOut

    function logOut() {
      authService.logOut();
      $location.path('/');
    }
  }
})()
