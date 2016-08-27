var links = angular.module('shortly.links', []);

links.controller('LinksController', function ($scope, Links) {
  // Your code 
  $scope.data = {};

  Links.getAll().then(function(resp) {
    $scope.data.links = resp;
  });
});

links.factory('LinkFactory', function ($http) {
  return {
    getLinks: function() {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/z'
      });
    }
  };
});
