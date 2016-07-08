app.controller('listCtrl',['$scope','$state','$stateParams',function ($scope,$state,$stateParams) {
   
	console.log($stateParams.Id[0]);
	console.log($stateParams)
	$scope.page2="pgae2的路由";
	
    	
}])