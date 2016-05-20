// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('likedCtrl', function ($scope,Weather,auth) {
var userID=Weather.getUserID();
if(userID==""){
	auth.signin();
}else{
	Weather.checkAccount(userID,function(data){
    Weather.getLike_outfit(function(data){
      $scope.likedOutfit=data;
      console.error($scope.likedOutfit);
    });
    Weather.getLike_item(function(data){
        $scope.likedItem=data;
        console.error($scope.likedItem);
        var i=0;
        for(item in data){
          $scope.likedInfo[i]=true;
          i++;
        }
      });
    },function(error){
      $scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something."
  });

}

});
