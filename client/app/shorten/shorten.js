var shorten = angular.module('shortly.shorten', []);

var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

isValidUrl = function(url) {
  return url.match(rValidUrl);
};

shorten.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
    console.log('here');
    if (!isValidUrl(link)) {
      console.log('Not a valid url');
    } else {
      Links.addOne(link);
    }
  };
});


