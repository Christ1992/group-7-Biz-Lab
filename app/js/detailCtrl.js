// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('detailCtrl', function ($scope,$routeParams,Weather) {
    
    Weather.getCloth.get({id:$routeParams.clothID},function(data){
  	    $scope.cloth = data;
  	  });
       
    $scope.setLike_amt = function(){
        Weather.setLike_amt();
    }
    $scope.like_amt = Weather.getLike_amt();
    
 
});