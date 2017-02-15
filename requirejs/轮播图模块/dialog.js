/**
 * Created by admin on 2017/2/14.
 */
requirejs.config({
    paths: {
        jquery : "jquery-1.12.4"
    }
});
define(['jquery'],function($){
    function dialog(){
        this.defaultSeeting = {
            width : '400px',
            height : '250px',
            img :['1.jpg','2.jpg','3.jpg','4.jpg'],
            liInner :[1,2,3,4],
            conPosition :{
                top:30,
                left:50,
                right:'',
                bottom:'',
            },
            prevPosition :{
                left:15,
                bottom :10
            },
            nextPosition :{
                left:40 ,
                bottom :10
            },
            time : 3000
        };
        this.container = $('<div id="container"></div>');
        this.imgBox = $('<div id="img"></div>');
        this.ul = $('<ul></ul>');
        str = '<img />';
        str2 = '<li class="selected"></li>';
        for(var i=0;i<this.defaultSeeting.img.length - 1;i++){
              str = str + '<img />';
              str2 = str2 + '<li></li>';
         }
        this.img = $(str);
        this.li = $(str2);
        this.prev = $('<span id="prev">&lt</span>');
        this.next = $('<span id="next">&gt</span>');
    }
    dialog.prototype.create = function(option){
        $.extend( this.defaultSeeting,option);
        console.log(this.defaultSeeting.liInner)
        this.imgBox.append(this.img);
        this.ul.append(this.li);
        this.container.append(this.imgBox).append(this.ul).append(this.prev).append(this.next);
        $('body').append(this.container);
        this.li.css({
           'border-radius' : this.defaultSeeting.border
        });
        for(var i=0;i<this.defaultSeeting.img.length;i++) {
           this.img.eq(i).attr('src',this.defaultSeeting.img[i]);
                this.li.eq(i).html(this.defaultSeeting.liInner[i]);
        }
        this.container.css({
            width:this.defaultSeeting.width,
            height:this.defaultSeeting.height,
            top:this.defaultSeeting.conPosition.top,
            left:this.defaultSeeting.conPosition.left,
            right:this.defaultSeeting.conPosition.right,
            bottom:this.defaultSeeting.conPosition.bottom
        });
        this.prev.css({
            top:this.defaultSeeting.prevPosition.top,
            left:this.defaultSeeting.prevPosition.left,
            right:this.defaultSeeting.prevPosition.right,
            bottom:this.defaultSeeting.prevPosition.bottom
        });
        this.next.css({
            top:this.defaultSeeting.nextPosition.top,
            left:this.defaultSeeting.nextPosition.left,
            right:this.defaultSeeting.nextPosition.right,
            bottom:this.defaultSeeting.nextPosition.bottom
        });
        this.img.eq(0).css({
            display : 'block'
        });
        var that = this;
        var show = 0;
        this.li.on('mouseover',function(){
            show = $(this).index();
            changeImg(show);
        });
        this.prev.on('click',function(){
            show--;
            if(show == -1){
                show = that.defaultSeeting.img.length - 1;
            }
            changeImg(show);
        });
        this.next.on('click',function(){
            show++;
            if(show == that.defaultSeeting.img.length){
                show = 0;
            }
            changeImg(show);
        });
        var timer;
        function run(){
            timer = setInterval(function(){
                that.next.trigger('click');
            },that.defaultSeeting.time);
        }
        run();
        this.container.hover(function(){
            clearInterval(timer);
        },function(){
            run();
        });
        function changeImg(show){
           that.li.eq(show).addClass('selected').siblings().removeClass('selected');
            that.img.eq(show).css({
                display : 'block'
            }).siblings().css({
                display : 'none'
            });
        }
    };

    return dialog;
});