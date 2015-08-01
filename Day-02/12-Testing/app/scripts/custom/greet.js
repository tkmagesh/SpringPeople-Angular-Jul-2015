angular
	.module("greetApp", [])
	.controller("greetController", function($scope){
		$scope.name = '';
		$scope.greet = function(){
			$scope.greetMsg = 'Hi ' + $scope.name;
		};
		$scope.greetMsg = '';
	})
	.factory("greet", function(){
		return {
			whoAmI : "I am a greetService"
		}
	});
