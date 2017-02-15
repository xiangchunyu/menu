/**
 * Created by admin on 2017/2/14.
 */
require(['dialog'],function(Dialog){
    var option1 = {

    };
    var option2 = {
        width : '400px',
        height : '250px',
        img :['5.jpg','6.jpg','7.jpg','8.jpg'],
        liInner :[],
        conPosition :{
            top:100,
            left:500,
            right:'',
            bottom:''
        },
        prevPosition :{
            top:'',
            left:0,
            right:'',
            bottom:110
        },
        nextPosition :{
            top:'',
            left:380,
            right:'',
            bottom:110
        },
        time :1000,
        border :'50%'
    };
    var demo1 = new Dialog();
    demo1.create(option1);
    var demo2 = new Dialog();
    demo2.create(option2);
});