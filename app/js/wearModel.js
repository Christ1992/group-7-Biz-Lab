// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
weatherSportsApp.factory('App',function ($resource,$cookieStore) {

  //TODO Lab 2 implement the data structure that will hold number of guest
  // and selected dinner options for dinner menu
 
  var likedSet=[];
  var Gender=0;
  var todaysDate='';
  var Intensity=1;
  var Location="Beijing";
  var Weather=[];
  

//Change gender   性别
  this.setGender=function(value){}
  this.getGender=function(){
    //return Gender
  }


//Change intensity   运动强度
  this.setIntensity=function(value){}
  this.getIntensity=function(){
    //return Intensity
  }


//Change Location   地点信息
  this.setLocation=function(value){}
  this.getLocation=function(){
    //return Location
  }



//get weather info  天气相关
  this.getDate=function() {
    // return today's date
  }

  this.getTodaysWeather=function(){
    //return dataset: date信息+weather信息
  }

  this.getTmrsWeather=function(){
    //return dataset: date信息+weather信息
  }

  this.getWeekendsWeather=function(){
    //return dataset: date信息+weather信息 
  }
  


//other func in home interface  主页用到的其他函数

  //get suggested outfit for certain weather or date？   根据天气？日期？获取推荐的搭配图片，适合类别
  this.getSugOutfit=function(weather?还是date?){
    //return dataset：pic，hotspot related info(index，position x,y, link)）
  }
  this.getSugOutfitSubcat=function(weather?还是date?){
    //return dataset: category(头部),Subcategory（有沿帽）)
  }
  this.getPicForSubcat=function(subcategory){
    //return pic url
  }


  //if click: set selected subcategory  得到用户点击的subcat
  this.setSelSubcat=function(subcategory){}
  

 
//Suggested Subcategory 界面
  
  this.getSelSubcat=function(){
    //return dataset: selected subcategory(有沿帽）, description 
  }

  this.getItemsBySubcat=function(subcategoty){
    //return dataset: pic, liked info, price, name
    //返回产品数组，包含图片,喜欢信息，价格，名字
  }

  //price
  this.getPriceForItem=function(id) {
    // return price
  }

  //function related to liked info  控制界面现实的红心状态
  this.setLikedID=function (id) {
    //save a id as liked
  }
  this.getLikedInfo=function(id) {
    // return 0 or 1
  }
  this.removeLikedID=function(id) {
    // remove saved id
  }

  this.setSelectedItemID=function(){
    //可能用angular直接获得地址里的ID，可能用不到
  }
  
  


//other func in explore interface  探索界面用到的其他函数
  //show Ad。  探索界面广告位展示
  this.getAd=function(date){
    //return dataset: ad pics, links
  }
  
  this.getPicForCat=function(category){
    //return pic url
  }
  //if click
  this.setCat=function(value){}
  
  //是否需要by weather?？？？？用于探索界面下部
  this.getFashionOutfit=function(weather? or Date?){}

  //control which category will be displayed  得到选中的分类和图片
  this.getCat=function(){
    //return selected category Name
  }


//Search Interface 搜索界面  
  this.getSearchResult=function(keyword,Category,Subcategory){
    //return items dataset: id，pic，name，price
    //返回id，图片，名字，price
  }
  





//Me 界面
  this.setNotification=function(value){}

  this.setSharing=function(){}

  this.getProfile=function(){} //返回数组，包含ID，名字，图片，初始设置？

  this.setLogout=function(value){}
  
  this.getLikedItems=function(){
    //return items dataset by liked id: pic，name，price
    //返回id，图片，名字，price
  }
  this.getLikedOutfits=function(){
    //return outfit dataset by liked id: pic，name,link
    //返回图片，名字,link
  }



  

//Item Detail Interface   产品详情页
  this.getItem=function(id){
  }

  this.getOutfitsByItem=function(id){}

  
  


/*  HERE are examples of how to write a function
  
  this.initialization=function(){
    console.log("hihihi-initialization;");
     $cookieStore.put("fullMenuID",menuID);
     $cookieStore.put("numberOfGuests",1);
     console.log($cookieStore.get('fullMenuID'));
     console.log($cookieStore.get('numberOfGuests'));
  }
 
// 设定人数 OK
  this.setNumberOfGuests = function(num) {
    if(num>0){
      
      $cookieStore.put("numberOfGuests",num);
    }
  }

  // 输出人数 OK
  this.getNumberOfGuests = function() {
    return $cookieStore.get("numberOfGuests");
  }
/*
  this.setKeyword= function(keyword){
    console.log("setkey"+keyword);
    $cookieStore.put("keyword",keyword);
  }
  this.getKeyword= function(){
    console.log("gettype"+$cookieStore.get("type"));
    
    return $cookieStore.get("keyword");
  }
  this.setType= function(Type){
    console.log("settype"+Type);
    
    $cookieStore.put("type",Type);
  }
  this.getType= function(){
    console.log("gettype"+$cookieStore.get("type"));
    return $cookieStore.get("type");
  }
*/
 
/* 
 // 关键词搜索 OK
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:10,api_key:'d6Wz1E41ENng5iGi9xAbE6Mc64F4fZj1'});
  // dish详情 OK
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'d6Wz1E41ENng5iGi9xAbE6Mc64F4fZj1'});
  this.getDish=function(inputID){
      var dish;
      this.Dish.get({id:inputID},function(data){
          dish=data;
         

      });
      return dish;
  };
    
  

  
  this.setPendingID = function(id){
    
    pendingID=id;
  };

  this.getPendingID = function(){
    
    return pendingID;
  }
  var backMenuDish="";
  this.getMenuDish=function(){
    return backMenuDish;
  }
//返回所有menu上面的id 的 数组
  this.getFullMenu = function() {
    var allDishesID = [];
    var dishID=$cookieStore.get("fullMenuID");
    
    
    for(var i=0; i<dishID.length;i++){
      if(dishID[i].id!=0){
       
      allDishesID.push(dishID[i].id);
      }
    }
    console.log("allDishesID");
    console.log(allDishesID);
    
    return allDishesID;
  }

//返回dish的成分 的 数组, 已改
  this.getAllIngredients = function(dish) {
    var allIngredients = [];

    var ingredients = dish.Ingredients;
    
    for(ingredient in ingredients){
      allIngredients.push(ingredient);
    }

    return allIngredients;
  }

//通过菜的id  返回  总价格，已改为根据菜的数组 返回价格
  this.getPriceForDish = function(dish) {
    var dishPrice = 0;
    
    var dishIngredients = dish.Ingredients;
    
    for(f in dishIngredients){
      
      dishPrice += dishIngredients[f].Quantity;
      
    }

    return parseFloat(dishPrice.toFixed(2));

    };


//设置菜单的总价（未乘人数）
  this.setTotalMenuPrice = function(price) {
    
    $cookieStore.put("totalMenuPrice",price);
  }
  this.getTotalMenuPrice = function(){
    
    return $cookieStore.get("totalMenuPrice");
  }

//判断id的类型是否已存在，如果未存在增加，如果存在替换
  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id,type) {
    
    var dishID= $cookieStore.get("fullMenuID");

    for(x in dishID){ 
      if(dishID[x].Category==type){
        
          dishID[x].id=id;
          console.log("dishID["+x+"]="+id);
      }

    }
    menuID=dishID;
    console.log("运行addDishToMenu之后的menuID");
    console.log(menuID);
    $cookieStore.put("fullMenuID",menuID);
    
   
  }

//从menu中删除特定dish 的 id
  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    
    var dishID= $cookieStore.get("fullMenuID");

    for(key in dishID){ 
      console.log("运行model的delete之前的menuID");
      console.log(dishID);
      if( dishID[key].id == id)
      {
        dishID[key].id=0;
      }
    }
    menuID=dishID;
    console.log("运行model的delete之后的menuID");
    console.log(menuID);
    $cookieStore.put("fullMenuID",menuID);
    console.log($cookieStore.get("fullMenuID"));

    

    //TODO Lab 2 
  }
  */


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});