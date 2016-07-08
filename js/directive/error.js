app.directive('bfFielError',['$compile',function($compile){
	return {
		restrict:'A',
		require:'ngModel',
		scope:{},
		link:function(scope,element,attr,ngModel){
         scope.hasError=function(){
         	//判断是否输入过，并且输入的是否合法
          return ngModel.$invalidate&&ngModel.$dirty;
         };
         scope.erros=function () {
         	//表单的错误信息
         	return ngModel.$erros;
         };
         var hint=$compile('<ul ng-if="hasError()">{{erros}}</ul>')
		}
	}
}])