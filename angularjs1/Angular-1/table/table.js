var myApp = angular.module('myApp',[]);
myApp.controller('firstController',function($scope){
   $scope.carts = [
   {
     pId : 1000,
     pName : 'iphone6s',
     pNum : 3,
     price : 5400,
   },
   {
     pId : 1200,
     pName : 'mac',
     pNum : 3,
     price : 15400,
   },
   {
     pId : 2000,
     pName : 'iphone7s',
     pNum : 10,
     price : 7400,
   },
   {
     pId : 3000,
     pName : 'ipad',
     pNum : 24,
     price : 2400,
   }
   ];

   $scope.sum = function(){
   	 var sum = 0;
   	 angular.forEach($scope.carts,function(cart,key){
         sum += cart.pNum * cart.price;
   	 });
   	 return sum;
   }

   $scope.total = function(){
   	var total = 0;
   	angular.forEach($scope.carts,function(cart,key){
        total+=parseInt(cart.pNum);
   	});
   	return total;
   }

   $scope.del = function(pId){
    var index = -1;
    angular.forEach($scope.carts,function(cart,key){
        if(cart.pId == pId){
        	//index = key;
        	$scope.carts.splice(key,1);
        }
   	});
    /* if(index !=-1){
     	$scope.carts.splice(index,1);
     }*/
   }

   $scope.destroy = function(){
   	$scope.carts = [];
   }

   $scope.add = function(pId){
   	 angular.forEach($scope.carts,function(cart,key){
        if(cart.pId == pId){
        	cart.pNum++;
        }
   	});
   }

   $scope.sub = function(pId){
   	 angular.forEach($scope.carts,function(cart,key){
        if(cart.pId == pId){
        	cart.pNum--;
        	if (cart.pNum==0) {
        		if(confirm("确定从购物车删除该产品？")){
        			$scope.carts.splice(key,1);
        		}
        	}
        }
   	});
   }
});