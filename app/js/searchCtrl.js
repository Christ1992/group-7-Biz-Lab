// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('searchCtrl', function ($scope,Weather,$routeParams,$cookies) {
    $scope.query=$cookies.get("query");
    if($scope.query==undefined){
        $scope.query=$routeParams.Query;
        $cookies.put("query",$scope.query);
    }
    
    console.log($scope.query);
    $scope.search = function(keywords) {
  	//var any_kw = type + " " + keywords;
        $scope.query=keywords;
        $cookies.put("query",$scope.query);
        $scope.status = "Searching...";
    Weather.getAllClothes.get({fts:keywords,offset:0,limit:20},function(data){
        $scope.clothes=data.products;
          });
     }
     $scope.search($scope.query);

     $scope.getClothing = function(){
        $cookies.put("query",'dress');
         Weather.getClothing.get(function(data){
             $scope.clothes=data.products;
         });
     }
     
     $scope.getAccessories = function(){
        $cookies.put("query",'Accessory');
         Weather.getAccessories.get(function(data){
             $scope.clothes=data.products;
         });
     }
     
    $scope.getShoes = function(){
        $cookies.put("query",'shoe');
         Weather.getShoes.get(function(data){
             $scope.clothes=data.products;
         });
     }
    
    

    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    $scope.myFunction=function(){
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    var num=1;
    $scope.loadmore=function(){
         Weather.getAllClothes.get({fts:$scope.query,offset:20*num,limit:20*num+20},function(data){
            num++;
            $scope.clothes=$scope.clothes.concat(data.products);
            console.log("ddd");
        //$scope.status = "Showing " + data.Results.length + " results";
    //     },function(data){
    //         $scope.status = "There was an error";
          });
    }
 
});