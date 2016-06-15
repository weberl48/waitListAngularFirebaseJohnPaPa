(function(){'use strict'

angular.module('app.auth')
.config(configFunction)
//$inject is preferred over array-style annotation  easier to read and has an easier syntax, Protects agains minificaiton errors aswell
configFunction.$inject = ['$routeProvider']

function configFunction($routeProvider) {
  $routeProvider.when('/register',{
    templateUrl: 'app/auth/register.html',
    controller: "AuthController",
    controllerAs: "vm"
  })
}
})()
