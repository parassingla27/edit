/// <reference path="../Scripts/angular.js" />
var myapp = angular.module('myapp', ["ui.router"])
myapp.run(['$state', function ($state) {
    $state.transitionTo('editCourse');
}])
myapp.config(function ($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
  
        .state('editCourse', {
            url: "editCourse.html",
            views: {
                "viewA": {
                    templateUrl: 'editCourse.html',

                }

            }
        })
  
        .state('sections', {
            url: "sections.html",
            views: {
                "viewA": {
                    templateUrl: 'sections.html'

                }
            }

        })
         .state('preview', {
             url: "preview.html",
             views: {
                 "viewA": {
                     templateUrl: 'preview.html'
                 }
             }
         })
         .state('approval', {
             url: "approval.html",
             views: {
                 "viewA": {
                     templateUrl: 'approval.html'
                 }
             }
         })



})

myapp.controller("editcourseController", function ($scope) {

    var coursesList = 
        { coursename: 'Java Programming', courseCategory: "Java", Description: "some sample description", CourseCredit: "4", Type: "Intermediate", Level: "2", Author: "Cognizant", CourseDuration: "30", Purpose: "Cognizant Academy", Tags: "Java", Image: "some image " }
       
    $scope.coursesList = coursesList;
});