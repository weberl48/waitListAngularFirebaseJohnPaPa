(function() {
    'use strict'

    angular.module('app.waitList')
        .config(configFunction)
        //$inject is preferred over array-style annotation  easier to read and has an easier syntax, Protects agains minificaiton errors aswell
    configFunction.$inject = ['$routeProvider']

    function configFunction($routeProvider) {
        $routeProvider.when('/waitlist', {
            templateUrl: 'app/waitList/waitList.html',
            controller: 'WaitListController',
            controllerAs: 'vm',
            resolve: {
                user: resolveUser
            }
        })
    }

    resolveUser.$inject = ['authService'];

    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireAuth();
    }

})()
