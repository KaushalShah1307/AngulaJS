/**
 * Created by kshah on 5/2/16.
 */

var app = angular.module("tutorialApp", ["ngRoute","tutorialCtrlModule"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider


        .when("/", {

            templateUrl: "newPage.html",
            controller: "tutorialCtrl"
        })

        .when("/newPage", {
            redirectTo: "newPage2.html",
            controller: "tutorialCtrl"
        })

}]);