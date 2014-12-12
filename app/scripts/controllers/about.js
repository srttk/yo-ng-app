'use strict';

/**
 * @ngdoc function
 * @name animatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the animatorApp
 */
angular.module('animatorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
