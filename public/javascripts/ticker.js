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
            $scope.portfolioTotal = 0;
            for (var i in response.data) {
                if (response.data[i].tickerCompany === "Vanguard") {
                    var newData = response.data[i];

                    newData.tickerTotal = (newData.tickerPrice * 1000).toFixed(2);
                    $scope.portfolioTotal += parseFloat(newData.tickerTotal);
                    $scope.vanguardTickerData.push(newData);
                } else {
                    var newData = response.data[i];

                    newData.tickerTotal = (newData.tickerPrice * 1000).toFixed(2);
                    $scope.portfolioTotal += parseFloat(newData.tickerTotal);
                    $scope.nonVanguardTickerData.push(newData);
                }
            }
        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: '/api/rando'
        }).then(function successCallback(response) {
            $scope.procRando = response.data;
        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: '/api/users'
        }).then(function successCallback(response) {
            var randomUser = Math.random() * response.data.length
            $scope.currentUser = response.data[Math.floor(randomUser)].userName;
        }, function errorCallback(response) {

        });
	}])
	;
})(angular);
