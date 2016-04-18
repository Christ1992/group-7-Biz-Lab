// Dinner controller that we use whenever we want to display detailed
// information for one dish
weatherDressApp.controller('BottomBarCtrl', function ($scope,$routeParams,Weather) {
  
  //设定人数
  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  
});

//人数，加入菜单，detail id，菜的单价，总价，成分