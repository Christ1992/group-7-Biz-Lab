//Auth0
weatherDressApp.controller( 'loginCtrl', function ( $scope, auth, $firebaseArray, Weather) {

  $scope.auth = auth;
  
  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/home');
  }
  
  $scope.resetPassword = function(){
    auth.reset({
        connection: 'Username-Password-Authentication'
      });
  };
  
  
  
  $scope.getCloth = function(){
    
  var t=Weather.getWeatherCloth(8,100,"Female",1);
     
  }
  
  //var outfit={id:"244",url:"http://stackoverflow.com/questions/4539253/what-is-console-log"};
  // var outfit="244";
  // var url="http://stackoverflow.com/questions/4539253/what-is-console-log";
  // Weather.del_outfit(outfit,url);
  
});