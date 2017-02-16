/**
 * Created by admin on 2017/2/15.
 */
$(function(){
    var show = 0;
    var rooler = document.getElementById('roller-one');
    var aimg = rooler.getElementsByTagName('img');
    var offset = aimg[0].offsetWidth;
    console.log(offset);
    $("#banner .next").on('click',function(){
        show++;
        if(show == aimg.length) {
            show = 0;
        }
        $('#roller-one')[0].style.left = -offset*show + "px";
    });
    $("#banner .prev").on('click',function(){
        show--;
        if(show == -1){
            show = aimg.length - 1;
        }
        $('#roller-one')[0].style.left = -offset*show + "px";
    })
});