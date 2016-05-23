weatherDressApp.controller('cardviewCtrl', function ($scope,$routeParams,$sce,Weather,$cookies,$location) {
	var genre = $routeParams.OutfitNum;
	$scope.gender = $routeParams.Gender;
  	switch(genre){
  		case 'genre1':$scope.genre= 'Casual'; break;
  		case 'genre2':$scope.genre= 'Outdoor'; break;
  		case 'genre3':$scope.genre= 'Office'; break;
  		case 'genre4':$scope.genre= 'Fashion'; break;

  	}
  	$scope.goSearch=function(query){
		$cookies.put('query',query);
		$location.path('/search/'+query);
  	}


 });