// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('detailCtrl', function ($scope,$routeParams,$sce,Weather,$analytics) {
    
  $analytics.eventTrack('Buy');
 $scope.buyContrl = false;

    Weather.getCloth.get({id:$routeParams.clothID},function(data){
  	    $scope.cloth = data;
  	    $scope.clickUrl = data.clickUrl;
  	    $scope.playerUrl=$sce.trustAsResourceUrl($scope.clickUrl);

        $scope.cloth_description = $sce.trustAsHtml(data.description);
  	  });
       
    $scope.setLike_amt = function(){
        Weather.setLike_amt();
    }
    $scope.likedInfo=false;
   // $scope.like_amt = Weather.getLike_amt();
   
});