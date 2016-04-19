// Search controller that we use whenever we have a search inputs
// and search results
weatherDressApp.controller('searchCtrl', function ($scope,Weather) {
    
    $scope.search = function(keywords) {
  	//var any_kw = type + " " + keywords;
    $scope.status = "Searching...";
    Weather.getAllClothes.get({fts:keywords},function(data){
        $scope.clothes=data.products;
        //$scope.status = "Showing " + data.Results.length + " results";
    //     },function(data){
    //         $scope.status = "There was an error";
          });
     }
     
     $scope.getClothing = function(){
         Weather.getClothing.get(function(data){
             $scope.clothes=data.products;
         });
     }
     
     $scope.getAccessories = function(){
         Weather.getAccessories.get(function(data){
             $scope.clothes=data.products;
         });
     }
     
    $scope.getShoes = function(){
         Weather.getShoes.get(function(data){
             $scope.clothes=data.products;
         });
     }
    
    $scope.search("dressing");
 
});