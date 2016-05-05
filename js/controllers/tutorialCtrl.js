/**
 * Created by kshah on 5/2/16.
 */
angular.module("tutorialCtrlModule", [])

.controller("tutorialCtrl", ["$scope", "$location", function ($scope, $location) {

    $scope.message = "Hello World!";
    $scope.tutorialCtrlObject = {};

    $scope.tutorialCtrlObject.title = "My First Angular Page!";
    $scope.tutorialCtrlObject.subTitle = "I`m very excited.";
    $scope.tutorialCtrlObject.fName = "Kaushal";
    $scope.tutorialCtrlObject.lName = "Shah";

    $scope.tutorialCtrlObject.manyNames = ["Kaushal", "Jainam", "Chetan", "Chetana"];

    $scope.tutorialCtrlObject.binding = 2;

    $scope.multiply = function () {
        $scope.tutorialCtrlObject.binding *= 2;
    }
    
    $scope.addition = function () {
        $scope.tutorialCtrlObject.binding +=2;
    }

    $scope.myUrl = $location.absUrl();
    
}])

.directive ("ksmyDirective", function () {
    return {
        restrict: "E",
        template: "<h1>This is a Directive</h1>"
    }


})