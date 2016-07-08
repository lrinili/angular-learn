app.controller("appCtrl",['$scope','$state','$stateParams',function ($scope,$state,$stateParams) {
	$scope.go=function(){
		$state.go('index.list',{ Id: [0,1,2,3] })
	};
	$scope.page='angular';

}])