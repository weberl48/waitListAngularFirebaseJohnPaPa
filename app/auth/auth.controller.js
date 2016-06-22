(function() {
    'use strict'
    angular.module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', 'authService'];

    function AuthController($location, authService) {
        var vm = this;

        // var firebaseReference = new Firebase(FIREBASE_URL)
        // var firebaseAuthObject = $firebaseAuth(firebaseReference)

        vm.user = {
            email: "",
            password: ""
        }

        vm.register = register;
        vm.logIn = logIn;
        // vm.logOut = logOut;
        // vm.isLoggedIn = authService.isLoggedIn

        function register(user) {
            return authService.register(user)
                .then(function() {
                    vm.login(user);
                })
                .catch(function(error) {
                    console.log(error);
                })

        }

        function logIn(user) {
            return authService.logIn(user)
                .then(function(loggedInUser) {
                    console.log(loggedInUser);
                    $location.path('/')
                })
                .catch(function(error) {
                    console.log(error);
                })

        }

        // function logOut() {
        //     authService.logOut();
        //     $location.path('/');
        // }
    }
})();
