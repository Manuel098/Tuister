var tuister = angular.module('tuister', ['ngRoute']).config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        controller: 'Demo',
        templateUrl: 'index.html'
    }).when('/index',{
        controller: 'Demo',
        templateUrl: 'card.html'
    }).when('/info',{
        controller: 'Info',
        templateUrl: 'info.html'
    }).when('/login',{
        controller: 'SignIn',
        templateUrl: 'signIn.html'
    }).when('/signUp',{
        controller: 'SignUp',
        templateUrl: 'signUp.html'
    }).when('/profile',{
        controller: 'Profile',
        templateUrl: 'profile.html'
    })
    .otherwise("/");
})
