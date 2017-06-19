var vm = new Vue({
	el:'#tab',//作用域
	data:{
       productList:[],
		cartList:[],
		totalPrice:0
	},
	computed:{

	},
	methods:{
		addCart:function(product){
			var index = this.cartList.indexOf(product);
			if(index == -1){
				this.cartList.push(product);
			}else{
				this.cartList.splice(index,1);
			}
			this.countTotalPrice();
		},
		countTotalPrice: function(){
			var that = this;
			this.totalPrice = 0;
			this.cartList.forEach(function(product){
				that.totalPrice += product.productQuentity * product.productPrice;
			});
		},
		subProduct: function(product){
			product.productQuentity--;
			if(product.productQuentity <=1){
				product.productQuentity = 1;
			}
			this.countTotalPrice();
		},
		addProduct: function(product){
			product.productQuentity++;
			this.countTotalPrice();
		},
		del: function(product){
			var index = this.productList.indexOf(product);
			this.productList.splice(index,1);
		}
	},
	mounted:function(){
      var that = this;//this指vm对象
		this.$nextTick(function(){
			axios.get('cart.json').then(function(res){
				that.productList = res.data.result.productList;
			});	//100%保证组件加载完毕
		});
	}//挂载函数,基本保证组件加载完毕
    
});