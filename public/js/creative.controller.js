angular.module('tantra.controllers', []) 
.controller('test', function($scope,$http,$sce) {

$scope.exportData = function(){
console.log("helo");
var blob = new Blob([document.getElementById('exporttable').innerHTML], {
  type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
});


saveAs(blob,"Report.xls");

};

$scope.send= function(){

  console.log(this);

var date = $('#dateData').val();

 var dateRequest = {

    "date" :date
 }

 $http({
    method: 'POST',
    url: '/reports/daily/',
    headers:  'Content-Type : application/json;charset=UTF-8',
    data: dateRequest
    })
    .success(function(data) {
    
    console.log(data);
    $scope.dailyData = data.dataRow;

    $scope.total = data.dataTotal ;

    console.log(data.dataTotal);
   
    })
    .error(function() {
  
console.log("hello i ma eero")
   

    });




 }  
console.log($scope);

  })
.controller('monthly', function($scope,$http,$sce) {

$scope.exportData = function(){
console.log("helo");
var blob = new Blob([document.getElementById('exporttable').innerHTML], {
  type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
});


saveAs(blob,"Report.xls");

};


$scope.send= function(){

  console.log(this);

var date = $('#dateData').val();

 var dateRequest = {

    "date" :date
 }

 $http({
    method: 'POST',
    url: '/reports/monthly/',
    headers:  'Content-Type : application/json;charset=UTF-8',
    data: dateRequest
    })
    .success(function(data) {
      console.log("sucess")
    
    console.log(data);
    $scope.dailyData = data.dataRow;

    $scope.total = data.dataTotal ;

    console.log(data.dataTotal);
   
    })
    .error(function() {
  
console.log("hello i ma eero")
   

    });




 }  


  })

.controller('yearly', function($scope,$http,$sce) {

$scope.exportData = function(){
console.log("helo");
var blob = new Blob([document.getElementById('exporttable').innerHTML], {
  type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
});


saveAs(blob,"Report.xls");

};


$scope.send= function(){

  console.log(this);

var date = $('#dateData').val();

 var dateRequest = {

    "date" :date
 }

 $http({
    method: 'POST',
    url: '/reports/yearly/',
    headers:  'Content-Type : application/json;charset=UTF-8',
    data: dateRequest
    })
    .success(function(data) {
      console.log("sucess")
    
    console.log(data);
    $scope.dailyData = data.dataRow;

    $scope.total = data.dataTotal ;

    console.log(data.dataTotal);
   
    })
    .error(function() {
  
console.log("hello i ma eero")
   

    });




 }  


  })
.controller('dashboard', function($scope,$http,$sce) {





// $scope.daily= function(){

// $http({
//   method: 'GET',
//   url: '/dailyreports'
// }).then(function successCallback(response) {
//    $scope.dailyrepHtml = $sce.trustAsHtml(response.data);
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });

//  }  

// $scope.monthly= function(){

// $http({
//   method: 'GET',
//   url: '/monthlyreports'
// }).then(function successCallback(response) {
//    $scope.dailyrepHtml = $sce.trustAsHtml(response.data);
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });

//  }  

// $scope.yearly= function(){

// $http({
//   method: 'GET',
//   url: '/yearlyreports'
// }).then(function successCallback(response) {
//    $scope.dailyrepHtml = $sce.trustAsHtml(response.data);
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });

//  }  
})
.controller('loginController', function($scope,$window,$http) {
  $scope.loginData = {};

$scope.doLogin = function() {

  var userDetails = $scope.loginData;

  console.log(userDetails);

   if(userDetails.username == "" ||  userDetails.username ==  null || userDetails.password ==  "" || userDetails.password ==  null){

alert("all the feild are mandatory");


}else{

   $http({
    method: 'POST',
    url: '/users/authentication/',
    headers:  'Content-Type : application/json;charset=UTF-8',
    data: userDetails
    })
    .success(function(data) {
     if(data == "validuser"){
 $window.location.href = '/dashboard';
     }else if(data == "invalidusers"){

   alert("invalid user");

     }else{
      
  alert("some thing went wrong");
     }
  
    })
    .error(function() {
    alert("error");

    });
}
}

})