// Dinner controller that we use whenever we want to display detailed
// information for one dish

weatherDressApp.controller('homeCtrl', function ($scope,Weather) {

    $scope.location = Weather.getLocation();

    Weather.getCurrent.get(function(data){



        $scope.currentWeather = data;
        console.log(data);
       // $scope.CurrentWeather.wind = data.wind.speed;
        //  $scope.humidity = data.main.humidity;
        //  $scope.precipitation = data.rain;
        
        //一句话描述
        $scope.description= data.weather[0].main;
        

        //当前温度
        $scope.temperature= Math.round(data.main.temp-273);

        //图片
        $scope.imgUrl = Weather.getWeatherImg(data.weather[0].main);

       });
    



     Weather.getForecast.get(function(data){

      var result = data['HeWeather data service 3.0']
      console.log(data['HeWeather data service 3.0']);
      
//今天
      var todayWeather= result[0].daily_forecast[0];
      
      //气温
      $scope.maxTempToday = todayWeather.tmp.max;
      $scope.minTempToday = todayWeather.tmp.min;

      //体感
      $scope.flTempToday = result[0].now.cond.fl;

      //图标相关
      var iconIDToday = todayWeather.cond.code_d;
      $scope.iconToday = Weather.getForeImg(iconIDToday);
      //$scope.condToday = todayWeather.cond.text_d;

      //$scope.description=todayWeather.cond.text_d;

      //日期
      $scope.dateToday = todayWeather.date;
      //湿度
      $scope.humToday = todayWeather.hum;
      //风力
      $scope.windToday = todayWeather.wind.sc; 
      //概率
      $scope.precToday = todayWeather.pop;
      //能见度
      $scope.visToday =  todayWeather.vis;
       


//明天
      var tmrWeather= result[0].daily_forecast[1];
      //气温
      $scope.maxTempTmr = tmrWeather.tmp.max;
      $scope.minTempTmr = tmrWeather.tmp.min;
      
      //图标相关
      var iconIDTmr = tmrWeather.cond.code_d;
      $scope.iconTmr = Weather.getForeImg(iconIDTmr);
      //$scope.condToday = todayWeather.cond.text_d;

      //日期
      $scope.dateTmr = tmrWeather.date;
      //湿度
      $scope.humTmr = tmrWeather.hum;
      //风力
      $scope.windTmr = tmrWeather.wind.sc; 
      //概率
      $scope.precTmr = tmrWeather.pop;
      //能见度
      $scope.visTmr =  tmrWeather.vis;

//后天
      var aftWeather= result[0].daily_forecast[2];
      //气温
      $scope.maxTempAft = aftWeather.tmp.max;
      $scope.minTempAft = aftWeather.tmp.min;
      
      //图标相关
      var iconIDAft = aftWeather.cond.code_d;
      $scope.iconAft = Weather.getForeImg(iconIDAft);
      //$scope.condToday = todayWeather.cond.text_d;

      //日期
      $scope.dateAft = aftWeather.date;
      //湿度
      $scope.humAft = aftWeather.hum;
      //风力
      $scope.windAft = aftWeather.wind.sc; 
      //概率
      $scope.precAft = aftWeather.pop;
      //能见度
      $scope.visAft =  aftWeather.vis;
       

       });
    $scope.weatherDetail=function(){
        $('#generW').hide();
        $('#detailW').show();
    }
    $scope.weatherGener=function(){
        $('#generW').show();
        $('#detailW').hide();
    }




    $scope.toToday= function () {
      $('#generW').show();
      $('#detailW').hide();
      $('#toTmr').hide();
      $('#toAft').hide();

      $('#todaySelected').show();
      $('#tmrSelected').hide();
      $('#aftSelected').hide();
    }
    $scope.toTmr= function () {
      $('#generW').hide();
      $('#detailW').hide();
      $('#toTmr').show();
      $('#toAft').hide();

      $('#todaySelected').hide();
      $('#tmrSelected').show();
      $('#aftSelected').hide();
    }
    $scope.toAft= function () {
      $('#generW').hide();
      $('#detailW').hide();
      $('#toTmr').hide();
      $('#toAft').show();

      $('#todaySelected').hide();
      $('#tmrSelected').hide();
      $('#aftSelected').show();
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




  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  

});
