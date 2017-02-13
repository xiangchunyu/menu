/**
 * Created by admin on 2017/2/13.
 */
requirejs.config({
    paths: {
        jquery : "jquery-1.12.4"
    }
});
require(['jquery','dialog2'],function($,Dialog){
   var option = {
       width : '500px',
       height :'400px',
       title : '我的弹出层',
       content : 'login.html'
   };
    $('#open').on('click',function(){
       // Dialog(option);
        var dialog = new Dialog();
        dialog.open(option);
    });

});