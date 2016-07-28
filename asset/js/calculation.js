angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            var a = Number($scope.a || 0);
            var b = Number($scope.b || 0);
            var c = Number(0.00083);
            $scope.sum = (a*b)*c;
        };
    });
