(function() {
    'use strict'
    angular.module('app.auth')
        .factory('authService', authService)

    authService.$inject = ['$firebaseAuth', 'firebaseDataService'];

    function authService($firebaseAuth, firebaseDataService) {

        var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);
        var service = {
            firebaseAuthObject: firebaseAuthObject,
            register: register,
            logIn: logIn,
            logOut: logOut,
            isLoggedIn : isLoggedIn,
        }

        return service
      ////////////////

        function register(user) {
            return firebaseAuthObject.$createUser(user);
        }

        function logIn(user) {
            return firebaseAuthObject.$authWithPassword(user)
        }

        function logOut() {
          return  firebaseAuthObject.$unauth()
        }

        function isLoggedIn() {
          return firebaseAuthObject.$getAuth();
        }
    }
})()
