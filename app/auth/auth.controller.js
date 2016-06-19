(function() {
    'use strict'
    angular.module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location','$firebaseAuth','FIREBASE_URL'];

    function AuthController($location, $firebaseAuth, FIREBASE_URL) {
        var vm = this;

        var firebaseReference = new Firebase(FIREBASE_URL)
        var firebaseAuthObject = $firebaseAuth(firebaseReference)

        vm.user = {
            email: "",
            password: ""
        }

        vm.register = register;
        vm.logIn = logIn;
        vm.logOut = logOut;

        function register(user) {
            return firebaseAuthObject.$createUser(user)
                .then(function() {
                    vm.login(user);
                })
                .catch(function(error) {
                    console.log(error);
                })

        }

        function logIn(user) {
            return firebaseAuthObject.$authWithPassword(user)
                .then(function(loggedInUser) {
                    console.log(loggedInUser);
                    $location.path('/')
                })
                .catch(function(error) {
                    console.log(error);
                })

        }

        function logOut() {
          firebaseAuthObject.$unauth();
          $location.path('/');
        }
    }
})();
