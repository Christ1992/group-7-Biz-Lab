// Dinner controller that we use whenever we want to display detailed
// information for one dish
weatherDressApp.controller('homeCtrl', function ($scope,$routeParams,Weather) {
    $scope.location = Weather.getLocation();
    $scope.like_amt = Weather.getLike_amt();
    Weather.getCurrentWeather.get(function(data){
        $scope.currentWeather = data;
       // $scope.CurrentWeather.wind = data.wind.speed;
        //  $scope.humidity = data.main.humidity;
        //  $scope.temperature = data.main.temp;
        //  $scope.precipitation = data.rain;
        $scope.currentWeather.Img = Weather.getWeatherImg(data.weather.main);
    });
    
});
