(function() {
  angular.module('hmo.model.user', [])
  .service('User', function($http){
    this.registerUser = function(user){
      return $http.post('/signup', user);
    }
    this.loginUser = function(user){
      return $http.post('/login', user);
    }
  });
})();
