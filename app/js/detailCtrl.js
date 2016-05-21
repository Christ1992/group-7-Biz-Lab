// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('detailCtrl', function ($scope,$routeParams,$sce,Weather,$analytics,$cookieStore,auth) {
    
  $analytics.eventTrack('Buy');
 $scope.buyContrl = false;

    Weather.getCloth.get({id:$routeParams.clothID},function(data){
  	    $scope.cloth = data;
        console.log(data);
  	    $scope.clickUrl = data.clickUrl;
  	    $scope.playerUrl=$sce.trustAsResourceUrl($scope.clickUrl);

        $scope.cloth_description = $sce.trustAsHtml(data.description);
  	  });
       
    $scope.likedInfo=false;
   // $scope.like_amt = Weather.getLike_amt();

  $scope.setLike_item=function(id,url){
  var userid=Weather.getUserID();
  if (userid==undefined||userid=="") {
    auth.signin();
  }else{
    $scope.likedInfo=!$scope.likedInfo;
    
    Weather.setLike_item(id,url,userid);
  }
}

$scope.del_item=function(id,index){
  $scope.likedInfo=!$scope.likedInfo;
  var userid=Weather.getUserID();
  Weather.del_outfit(id,userid);
}
});