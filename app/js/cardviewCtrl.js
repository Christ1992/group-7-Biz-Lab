weatherDressApp.controller('cardviewCtrl', function ($scope,$routeParams,$sce,Weather) {
	var genre = $routeParams.OutfitNum;
	$scope.gender = $routeParams.Gender;
  	switch(genre){
  		case 'genre1':$scope.genre= 'Casual'; break;
  		case 'genre2':$scope.genre= 'Outdoor'; break;
  		case 'genre3':$scope.genre= 'Office'; break;
  		case 'genre4':$scope.genre= 'Fashion'; break;

  	}
  	


 });