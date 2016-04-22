// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.

weatherDressApp.factory('Weather',function ($resource,$cookieStore){
    var location = "Stockholm";
    var country="Sweden"
    var gender="female";
    var OpenWeatherAPI="aaf8a194828942ebcc29a98835489378,c3b7bba4b5ac511ec04d73ac4065ea83"
    var shopstyleAPU="uid1600-33362460-67";
    var hefengAPI="939ca234771f43f29168f5e5d68257a5";
    
    
    var like_amt = 0;
   
   this.setLocation = function(loc){
       location = loc;
   }
   
    this.getLocation = function(){
        return location;
    }
    
    this.setGender = function(gender){
        gender = gender;
    }
    
    this.setLike_amt = function(){
        like_amt = like_amt + 1;
    }
    
    this.getLike_amt = function(){
        return like_amt;
    }
    
    this.getAllClothes = $resource('http://api.shopstyle.com/api/v2/products?',{pid:'uid2964-33820658-6',offset:0,limit:10});
    this.getCloth = $resource('http://api.shopstyle.com/api/v2/products/:id',{pid:'uid2964-33820658-6'});
    
    this.getClothing = $resource('http://api.shopstyle.com/api/v2/products?',{fts:"dresses",pid:'uid2964-33820658-6'});
    this.getAccessories = $resource('http://api.shopstyle.com/api/v2/products?',{fts:"accessories",pid:'uid2964-33820658-6'});
    this.getShoes = $resource('http://api.shopstyle.com/api/v2/products?',{fts:"shoes",pid:'uid2964-33820658-6'});
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
    
    this.getCurrent = $resource('http://api.openweathermap.org/data/2.5/weather?',{q:location, APIKEY:'c3b7bba4b5ac511ec04d73ac4065ea83'});    
    //this.getForecast = $resource('http://api.openweathermap.org/data/2.5//forecast?',{q:location, cnt:3,appid:'c3b7bba4b5ac511ec04d73ac4065ea83'});
    this.getForecast = $resource('https://api.heweather.com/x3/weather?',{city:location, cnty:country,key:'939ca234771f43f29168f5e5d68257a5'});
    
    this.getWeatherImg = function(condition){
         var url;
         if(condition == "clear"){
             url = "http://vector.me/files/images/1/6/166202/symbols_weather_clear_sunny.jpg";
         }
         if(condition == "clouds"){
             url = "https://www.clipartool.com/wp-content/uploads/2016/02/free-cloud-clipart-images.jpg";
         }
         else{
             url = "http://images.clipartpanda.com/cloudy-weather-clipart-04e503de81548c034e906f729f5dd37b-cloudy-weather-clip-art.jpg";
         }
         return url;
     }
    

    this.getForeImg = function(id){
        for (key in iconSet) {
            if(iconSet[key].id==id){
                return iconSet[key].url;
            }
        }
    }
    
    
    
    
    var iconSet = [
{"id":"100","cond":"Sunny/Clear","url":"http://files.heweather.com/cond_icon/100.png"},
{"id":"101","cond":"Cloudy","url":"http://files.heweather.com/cond_icon/101.png"},
{"id":"102","cond":"Few Clouds","url":"http://files.heweather.com/cond_icon/102.png"},
{"id":"103","cond":"Partly Cloudy","url":"http://files.heweather.com/cond_icon/103.png"},
{"id":"104","cond":"Overcast","url":"http://files.heweather.com/cond_icon/104.png"},
{"id":"200","cond":"Windy","url":"http://files.heweather.com/cond_icon/200.png"},
{"id":"201","cond":"Calm","url":"http://files.heweather.com/cond_icon/201.png"},
{"id":"202","cond":"Light Breeze","url":"http://files.heweather.com/cond_icon/202.png"},
{"id":"203","cond":"Moderate/Gentle Breeze","url":"http://files.heweather.com/cond_icon/203.png"},
{"id":"204","cond":"Fresh Breeze","url":"http://files.heweather.com/cond_icon/204.png"},
{"id":"205","cond":"Strong Breeze","url":"http://files.heweather.com/cond_icon/205.png"},
{"id":"206","cond":"High Wind","url":" Near Gale","undefined":"http://files.heweather.com/cond_icon/206.png"},
{"id":"207","cond":"Gale","url":"http://files.heweather.com/cond_icon/207.png"},
{"id":"208","cond":"Strong Gale","url":"http://files.heweather.com/cond_icon/208.png"},
{"id":"209","cond":"Storm","url":"http://files.heweather.com/cond_icon/209.png"},
{"id":"210","cond":"Violent Storm","url":"http://files.heweather.com/cond_icon/210.png"},
{"id":"211","cond":"Hurricane","url":"http://files.heweather.com/cond_icon/211.png"},
{"id":"212","cond":"Tornado","url":"http://files.heweather.com/cond_icon/212.png"},
{"id":"213","cond":"Tropical Storm","url":"http://files.heweather.com/cond_icon/213.png"},
{"id":"300","cond":"Shower Rain","url":"http://files.heweather.com/cond_icon/300.png"},
{"id":"301","cond":"Heavy Shower Rain","url":"http://files.heweather.com/cond_icon/301.png"},
{"id":"302","cond":"Thundershower","url":"http://files.heweather.com/cond_icon/302.png"},
{"id":"303","cond":"Heavy Thunderstorm","url":"http://files.heweather.com/cond_icon/303.png"},
{"id":"304","cond":"Hail","url":"http://files.heweather.com/cond_icon/304.png"},
{"id":"305","cond":"Light Rain","url":"http://files.heweather.com/cond_icon/305.png"},
{"id":"306","cond":"Moderate Rain","url":"http://files.heweather.com/cond_icon/306.png"},
{"id":"307","cond":"Heavy Rain","url":"http://files.heweather.com/cond_icon/307.png"},
{"id":"308","cond":"Extreme Rain","url":"http://files.heweather.com/cond_icon/308.png"},
{"id":"309","cond":"Drizzle Rain","url":"http://files.heweather.com/cond_icon/309.png"},
{"id":"310","cond":"Storm","url":"http://files.heweather.com/cond_icon/310.png"},
{"id":"311","cond":"Heavy Storm","url":"http://files.heweather.com/cond_icon/311.png"},
{"id":"312","cond":"Severe Storm","url":"http://files.heweather.com/cond_icon/312.png"},
{"id":"313","cond":"Freezing Rain","url":"http://files.heweather.com/cond_icon/313.png"},
{"id":"400","cond":"Light Snow","url":"http://files.heweather.com/cond_icon/400.png"},
{"id":"401","cond":"Moderate Snow","url":"http://files.heweather.com/cond_icon/401.png"},
{"id":"402","cond":"Heavy Snow","url":"http://files.heweather.com/cond_icon/402.png"},
{"id":"403","cond":"Snowstorm","url":"http://files.heweather.com/cond_icon/403.png"},
{"id":"404","cond":"Sleet","url":"http://files.heweather.com/cond_icon/404.png"},
{"id":"405","cond":"Rain And Snow","url":"http://files.heweather.com/cond_icon/405.png"},
{"id":"406","cond":"Shower Snow","url":"http://files.heweather.com/cond_icon/406.png"},
{"id":"407","cond":"Snow Flurry","url":"http://files.heweather.com/cond_icon/407.png"},
{"id":"500 ","cond":"Mist","url":"http://files.heweather.com/cond_icon/500.png"},
{"id":"501","cond":"Foggy","url":"http://files.heweather.com/cond_icon/501.png"},
{"id":"502","cond":"Haze","url":"http://files.heweather.com/cond_icon/502.png"},
{"id":"503","cond":"Sand","url":"http://files.heweather.com/cond_icon/503.png"},
{"id":"504","cond":"Dust","url":"http://files.heweather.com/cond_icon/504.png"},
{"id":"507","cond":"Duststorm","url":"http://files.heweather.com/cond_icon/507.png"},
{"id":"508","cond":"Sandstorm","url":"http://files.heweather.com/cond_icon/508.png"},
{"id":"900","cond":"Hot","url":"http://files.heweather.com/cond_icon/900.png"},
{"id":"901","cond":"Cold","url":"http://files.heweather.com/cond_icon/901.png"},
{"id":"999","cond":"Unknown","url":"http://files.heweather.com/cond_icon/999.png"}
] 
    
    
    return this;

 });