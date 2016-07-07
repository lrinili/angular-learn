 var app = angular.module('app', ['ui.router']);
 app.config(['$stateProvider',function($stateProvider) {
/*    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;*/
    $stateProvider
    .state('index',{
    	url:'/index',
    	abstract:true,
    	templateUrl:'view/app.html',
    	controller:'appCtrl'
    }).state('index.list',{
    	url:'/list',
    	templateUrl:'view/app.html'
    })




 }]);
 app.run(['$state','$rootScope','$stateParams',function($state,$rootScope,$stateParams) {
         $state.go('index.list');
}]);
