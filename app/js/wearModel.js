// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.

weatherDressApp.factory('Weather',function ($resource,$cookieStore){
    var location = "London";
    var like_amt = 0;
    var APIKEY = "uid1600-33362460-67";
   
    this.getLocation = function(){
        return location;
    }
    
    this.getLike_amt = function(){
        return like_amt;
    }
    
    this.getClothes = $resource('http://api.shopstyle.com/api/v2/products?',{pid:'uid1600-33362460-67',offset:0,limit:10});
    
    // this.getCurrentWeather = $resource('http://api.openweathermap.org/data/2.5/weather?',{q:location, APIKEY:'c3b7bba4b5ac511ec04d73ac4065ea83'});    
    
    // this.getWeatherImg = function(condition){
    //     var url;
    //     if(condition == "clear"){
    //         url = "http://vector.me/files/images/1/6/166202/symbols_weather_clear_sunny.jpg";
    //     }
    //     if(condition == "clouds"){
    //         url = "https://www.clipartool.com/wp-content/uploads/2016/02/free-cloud-clipart-images.jpg";
    //     }
    //     else{
    //         url = "http://images.clipartpanda.com/cloudy-weather-clipart-04e503de81548c034e906f729f5dd37b-cloudy-weather-clip-art.jpg";
    //     }
    //     return url;
    // }
    
    
    
    
    
    
    return this;

 });