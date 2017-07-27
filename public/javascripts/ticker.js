(function(angular, undefined) {
	angular.module("ticker", [

    ])

	.controller("tickerMainCtrl", ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: '/api/ticker'
        }).then(function successCallback(response) {
            $scope.vanguardTickerData = [];
            $scope.nonVanguardTickerData = [];
            for (var i in response.data) {
                if (response.data[i].tickerName.indexOf("Vanguard") != -1) {
                    $scope.vanguardTickerData.push(response.data[i]);
                } else {
                    $scope.nonVanguardTickerData.push(response.data[i]);
                }
            }
        }, function errorCallback(response) {

        });
	}])
	;
})(angular);
