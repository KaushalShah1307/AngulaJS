/**
 * Created by kshah on 5/2/16.
 */
angular.module("tutorialCtrlModule", [])

.controller("tutorialCtrl", ["$scope", function ($scope) {

    $scope.message = "Hello World!";
    $scope.tutorialCtrlObject = {};

    $scope.tutorialCtrlObject.title = "My First Angular Page!";
    $scope.tutorialCtrlObject.subTitle = "I`m very excited.";

    $scope.tutorialCtrlObject.binding = 2;

    $scope.multiply = function () {
        $scope.tutorialCtrlObject.binding *= 2;
    }
    
    $scope.addition = function () {
        $scope.tutorialCtrlObject.binding +=2;
    }
    
}]);