/// <reference path="angular.min.js" />
var app = angular.module("param", []);
app.controller("myctrl", function ($scope) {

    $scope.params=[{image:"download.png",alt:"angularjs",
        details:"<b>Angularjs</b><br>Angular js is a structural framework for synamic web apps.<br>AngularJs is perfect for Single Page Applications(SPAs)"},
        {image:"download1.jpg",alt:"bootstrap",
            details:"<b>Bootstrap</b><br>bootstrap is the most popular HTML,CSS and JavaScript framework for developing responsive,mobile-first web sites."}
]
});
app.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };

});