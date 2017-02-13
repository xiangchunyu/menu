/**
 * Created by admin on 2017/2/13.
 */
requirejs.config({
    paths: {
        jquery : "jquery-1.12.4"
    }
});
define(['jquery'],function($){
  function dialog(option){
      var defaultSetting = {
          width : '400px',
          height :'300px',
          title : '我的弹出层',
          content : 'hello'
      };
      $.extend(defaultSetting,option);
      var html = '<div class="dialog-container">'
          + '<div class="dialog-mask"></div>'
          + '<div class="dialog-box">'
           + '<div class="dialog-title">'
          + '<div class="dialog-title-item">'+ defaultSetting.title+'</div>'
          + '<div class="dialog-title-close">[x]</div>'
          + '</div>'
           + '<div class="dialog-content"></div>'
       + '</div>'
      + '</div>';
          $('body').append(html);
          $('.dialog-box').css({
              width:defaultSetting.width,
              height:defaultSetting.height
          });
          $('.dialog-content').css({
          height:defaultSetting.height-30
          }).html(defaultSetting.content);
      $('.dialog-title-close').on('click',function(){
        $('.dialog-container').remove();
      });
  }
    return dialog;
});


