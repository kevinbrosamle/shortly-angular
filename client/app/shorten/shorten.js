var shorten = angular.module('shortly.shorten', []);

shorten.controller('ShortenController', function ($scope, $location, Links) {
  
  $scope.link = {};

  $scope.addLink = function() {

    Links.addOne($scope.inputLink);

  };
});


