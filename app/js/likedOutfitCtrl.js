// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('likedOutfitCtrl', function ($scope,Weather,auth,$cookieStore) {
var userID=Weather.getUserID();

if(userID==undefined||userID==""){
	
    auth.signin();
    $scope.status="You need to log in to see your liked item/outfit.";
}else{


Weather.checkAccount(userID,function(data){
    
//ourfit
    //得到cookie里的id存储字符串
    var r=$cookieStore.get("likedOutfit");
    console.log(r);
    var string2=[];
    var j=1;
    if(r!=undefined){
      //字符串转化为数组形式
      r=r+'';
        string2[0]=r.substr(0,5);
         for(var i=0;i<r.length-1;i++)
        {
           if(r.charAt(i)== ',' ){
            string2[j]=r.substr(i+1 , 5 );
            j++;
            }
        }
        Weather.getLike_outfit(function(data){
            $scope.likedOutfit=data;
            console.log(data);
            $scope.$apply(); // notice the anular data has changed
        },userID);
    }else{
        $scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something.";
    }
//outfit callback 结束 
    $scope.$apply();
//check account callback 结束
},function(){
  $scope.status="You didn't add any liked item/outfit. Why don't you CLICK hearts to like something.";
  $scope.$apply();
});
}});
