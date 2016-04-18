// Dinner controller that we use whenever we want to display detailed
// information for one dish

weatherDressApp.controller('homeCtrl', function ($scope,Weather) {
    $scope.curWea= Weather.getCurrentWeather();
    $scope.forWea= Weather.getForecast();
    $scope.location= Weather.getLocation();
    


    $scope.toToday= function () {
      // body...
    }
    $scope.toTmr= function () {
      // body...
    }
    $scope.toAfter= function () {
      // body...
    }
    $scope.toDetailWeather= function (date) {
      // 点击出现详情
    }


    $scope.toSidebar= function(){
      //出现侧边栏
    }
    $scope.toSearch= function(){
      //搜索框
    }
    



    $scope.toCardview= function(style) {
      //  进入选中详情页
    }
    



    $scope.toCasual= function() {
      // scroll
    }
    $scope.toOutdoor= function(){
      //scroll
    }
    $scope.toOffice= function(){
      //scroll
    }
    $scope.toFashion= function(){
      //scroll
    }






    $scope.location = Weather.getLocation();

    Weather.getCurrentWeather.get(function(data){



        $scope.currentWeather = data;
       // $scope.CurrentWeather.wind = data.wind.speed;
        //  $scope.humidity = data.main.humidity;
        //  $scope.temperature = data.main.temp;
        //  $scope.precipitation = data.rain;
        $scope.currentWeather.Img = Weather.getWeatherImg(data.weather.main);
    });
    
 




  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  

});
