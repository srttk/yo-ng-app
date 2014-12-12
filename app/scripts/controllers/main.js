'use strict';

/**
 * @ngdoc function
 * @name animatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the animatorApp
 */
angular.module('animatorApp')
  .controller('MainCtrl', function ($scope,$rootScope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pageClass="page";

    // Go Method
    $rootScope.go = function (path, pageAnimationClass) {
	 
	    if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
	        $rootScope.pageAnimationClass = 'crossFade';
	    }
	         
	    else { // Use the specified animation
	        $rootScope.pageAnimationClass = pageAnimationClass;
	    }
	 
	    if (path === 'back') { // Allow a 'back' keyword to go to previous page
	        $window.history.back();
	    }
	         
	    else { // Go to the specified path
	        $location.path(path);
	    }
	};
    //End Go method
  });
