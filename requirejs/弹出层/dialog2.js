/**
 * Created by admin on 2017/2/13.
 */
requirejs.config({
    paths: {
        jquery : "jquery-1.12.4"
    }
});
define(['jquery'],function($){
    function dialog(){
        this.defaultSetting = {
            width : '400px',
            height :'300px',
            title : '我的弹出层',
            content : ''
        };
        this.container = $('<div class="dialog-container"></div>');
        this.mask = $('<div class="dialog-mask"></div>');
        this.box = $('<div class="dialog-box"></div>');
        this.title = $('<div class="dialog-title"></div>');
        this.item = $('<div class="dialog-title-item"></div>');
        this.close = $('<div class="dialog-title-close">[x]</div>');
        this.content = $('<div class="dialog-content"></div>');
    }
    dialog.prototype.open = function(option){
        $.extend(this.defaultSetting,option);
        this.title.append(this.item).append(this.close);
        this.box.append(this.title).append(this.content);
        this.container.append( this.mask).append(this.box);
        $('body').append(this.container);
        this.item.html(this.defaultSetting.title);
        this.box.css({
            width:this.defaultSetting.width,
            height:this.defaultSetting.height
        });
        this.content.css({
            height:this.defaultSetting.height-30
        }).load(this.defaultSetting.content);
        var that = this;
        $(this.close).on('click',function(){
            that.closeDialog();
        });
    };
    dialog.prototype.closeDialog = function(){
        this.container.remove();
    };
    return dialog;
});