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
            $scope.totalTickerAmount = 0;
            for (var i in response.data) {
                if (response.data[i].tickerCompany === "Vanguard") {
                    var newData = response.data[i];

                    newData.tickerTotal = (newData.tickerPrice * 5).toFixed(2);
                    $scope.vanguardTickerData.push(newData);
                } else {
                    var newData = response.data[i];

                    newData.tickerTotal = (newData.tickerPrice * 5).toFixed(2);
                    $scope.nonVanguardTickerData.push(newData);
                }
            }
        }, function errorCallback(response) {

        });
	}])
	;
})(angular);
