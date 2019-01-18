'use strict';

/**
 * @ngdoc function
 * @name controllerQuizApp.controller:BrickCtrl
 * @description
 * # BrickCtrl
 * Controller of the controllerQuizApp
 */
angular.module('controllerQuizApp')
  .controller('BrickCtrl', function () {
    this.color = 'green';
    this.size = '2x6';
    this.price = '$0.03';
    this.quantity = '697';
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
