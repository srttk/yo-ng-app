'use strict';

/**
 * @ngdoc function
 * @name animatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the animatorApp
 */
angular.module('animatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pageClass="page";
  });
