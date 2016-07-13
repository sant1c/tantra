  /*************************************************************************
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   : creative.js

description :  to and fro manipulation fo screen  

**************************************************************************/

  var scotchApp = angular.module('app', ['ngRoute', 'tantra.controllers']);

    scotchApp.run(function ($rootScope) {
    $rootScope.$on('scope.stored', function (event, data) {
        console.log("scope.stored", data);
    });
});

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider
            // route for the about page
            .when('/#dashboard', {
                templateUrl : '../views/dashboard/dashb.html',
                controller  : 'dashboardController'
            })

            // route for the contact page
            .when('/dailyreports', {
                templateUrl : './views/tables/data.html',
                     controller  : 'test'
            })
            // route for the contact page
            .when('/monthlyreports', {
                templateUrl : './views/tables/data.html',
                controller  : 'monthly'
        
            })

            // route for the contact page
            .when('/yearlyreports', {
                templateUrl : './views/tables/data.html',
                controller  : 'yearly'
        
            });
           
    });




