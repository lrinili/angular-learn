 var app = angular.module('app', ['ui.router','ui.bootstrap']);
 app.config(['$controllerProvider','$compileProvider','$filterProvider','$provide','$stateProvider',function($controllerProvider,$compileProvider,$filterProvider,$provide,$stateProvider) {
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
    $stateProvider
    .state('index',{
    	url:'/index',
    	abstract:true,
    	templateUrl:'view/app.html',
    	
    }).state('index.list',{
    	url:'/list',
    	templateUrl:'view/list.html'
    }).state('index.list2',{
    	url:'/list2',
    	templateUrl:'view/list2.html'
    })




 }]);
 app.run(['$state','$rootScope','$stateParams',function($state,$rootScope,$stateParams) {
         
}]);
