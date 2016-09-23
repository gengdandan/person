//鼠标跟随
var H = 0;
$(document).bind('mousemove touchmove',function(e) {
    e.preventDefault();
    var drawSize = 55;
    var floatTypes = Array('floatOne','floatTwo','floatThree','floatFour','floatFive');
    var floatType = floatTypes[Math.floor(Math.random()*floatTypes.length)];
    var xPos = e.originalEvent.pageX;
    var yPos = e.originalEvent.pageY;
    $('body').append('<div class="draw" style="font-size:'+drawSize+'px;left:'+xPos+'px;top:'+yPos+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;color:hsla('+H+',100%,70%,1)">✧</div>');
    $('.draw').each(function() {
        var div = $(this);
        setTimeout(function() {$(div).remove();},800);
    });
});

setInterval(function() {
    if(H<=360) {H++;}
    else {H=0;}
},10);

//导航部分的响应
var flag=true
$(".small-right").click(function(){
    if(flag){
        $(".small-one").css({"transform":"translate(0,8px) rotate(45deg)"})
        $(".small-two").css({"transform":"translate(0,-5px) rotate(-45deg"})
        $(".menu").css({"height":200})
        $(".menu li a").each(function(index,obj){
            $(obj).css({
                "opacity":1,
                "transition":"all 0.4s ease "+index*0.2+"s"
            })
        })
        flag=false
    }else{
        $(".small-one").css({"transform":""})
        $(".small-two").css({"transform":""})
        $(".menu").css({"height":0})
        $(".menu li a").each(function(index,obj){
            $(obj).css({
                "opacity":0,
                "transition":"all 0.4s ease "+index*0.2+"s"
            })
        })
        flag=true
    }
})

//字的逐渐出现
jQuery(document).ready(function($){
    $(".word1").lbyl({
        content: "Welcome To My Personal Homepage",
        speed: 100,
        type: 'show',
        finished: function(){
            $('.word2').lbyl({
                content:"Geng Dan",
                speed: 150,
                type: 'fade',
                fadeSpeed: 500
            })
        }
    });
});


$(".ban-top").hover(function(){
    $(this).css({opacity:0})
    $(".ban-top1").css({opacity:1,animation:"ml 1s linear",color:"#d72262"})
},function(){
    $(this).css({opacity:1})
    $(".ban-top1").css({opacity:0,animation:"",color:"#fff"})
})


//my skills部分的点击效果
var falg=true
$(".con2-top").click(function(){
    var index=$(".con2-top").index(this)
    //alert(index)
    if(flag){
        $(".con2-bot").eq(index).css({display:"block"});
        $(".sanjiao").eq(index).css({transform:"rotate(180deg)"})
        flag=false;
    }else{
        $(".con2-bot").eq(index).css({display:"none"})
        $(".sanjiao").eq(index).css({transform:"rotate(0deg)"})
        flag=true
    }

})


$(".sanjiao").click(function(){
    var index=$(".sanjiao").index(this)
    //alert(index)
    if(flag){
        $(".sanjiao").eq(index).css({transform:"rotate(180deg)"})
        $(".con2-bot").eq(index).css({display:"block"})
        flag=false
    }else{
        $(".sanjiao").eq(index).css({transform:"rotate(0deg)"})
        $(".con2-bot").eq(index).css({display:"none"})
        flag=true
    }

})

//photoshop作品展示部分开始
$(".con3-left").hover(function(){
    var index=$(".con3-left").index(this)
    $(".con3-left img").eq(index).css({
        transfrom:"scale(0,0)",
        opacity:0

    })
    $(".mask").eq(index).css({
        opacity:1,
        transform:"scale(1,1)",
        transform:"rotate(360deg)"

    })
},function(){
    var index=$(".con3-left").index(this)
    $(".con3-left img").eq(index).css({
        transfrom:"scale(1,1)",
        opacity:1

    })
    $(".mask").eq(index).css({
        opacity:0,
        transform:"scale(0.3,0.3)",
        transform:"rotate(0deg)"

    })
})



//遮罩的消失与出现
var index;
var now
var next
$(".more").click(function(){
    $(".zhezhao").css({display:"block"})
    index=$(".more").index(this)
    now=index
    next=now
    $(".ptu").css({left:"100%"}).eq(now).css("left",0)

})
$(".cuo").click(function(){
    $(".zhezhao").css({display:"none"})
})

//隐藏的轮播

function lunbo(){
    next++
    if(next>$(".ptu").length-1){
        next=0
    }
    $(".ptu").eq(now).stop().animate({left:"-100%"})
    $(".ptu").eq(next).css({left:"100%"})
    $(".ptu").eq(next).stop().animate({left:0})
    now=next
}
//var t=setInterval(lunbo,2000)
$(".zuojian").click(function(){
    lunbo()
})
$(".youjian").click(function(){
    next--
    if(next<0){
        next=$(".ptu").length-1
    }
    $(".ptu").eq(now).stop().animate({left:"100%"})
    $(".ptu").eq(next).css({left:"-100%"})
    $(".ptu").eq(next).stop().animate({left:0})
    now=next
})



//my works部分的轮播
var ow=$(".work1")[0].offsetWidth+10
var num=$(".con4-midbox a").length
$(".con4-midbox").css({width:ow*num})
$(".con4-left").click(function(){
    $(".con4-midbox").stop().animate({left:-ow},function(){
        $(".con4-midbox a:eq(0)").appendTo( $(".con4-midbox"))
        $(".con4-midbox").css({left:0})
    })
})
$(".con4-right").click(function(){
    $(".con4-midbox").css({left:-ow})
    $(".con4-midbox a:last").insertBefore($(".con4-midbox a:eq(0)"))
    $(".con4-midbox").stop().animate({left:0})
})

var t=setInterval(function(){
    $(".con4-midbox").stop().animate({left:-ow},function(){
        $(".con4-midbox a:eq(0)").appendTo( $(".con4-midbox"))
        $(".con4-midbox").css({left:0})
    })
},2000)
$(".box").hover(function(){
    clearInterval(t)
},function(){
    t=setInterval(function(){
        $(".con4-midbox").stop().animate({left:-ow},function(){
            $(".con4-midbox a:eq(0)").appendTo( $(".con4-midbox"))
            $(".con4-midbox").css({left:0})
        })
    },2000)
})


//流动的线条
var ow=$(".kuang")[0].offsetWidth
var oh=$(".kuang")[0].offsetHeight
$(".kuang").hover(function(){
    $(this).find(".tops").animate({width:ow},300)
    $(this).find(".bottom").animate({width:ow},300)
    $(this).find(".left").animate({height:oh},300)
    $(this).find(".right").animate({height:oh},300)
    $(this).find(".zhao").animate({bottom:80,opacity:1},800)
},function(){
    $(".tops").animate({width:0},300)
    $(".bottom").animate({width:0},300)
    $(".left").animate({height:0},300)
    $(".right").animate({height:0},300)
    $(this).find(".zhao").animate({bottom:-150,opacity:0},800)
    //$(this).find(".zhao").animate({display:"none"})
})



//导航和内容相关联
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
$(".next").click(function(){
    var index=$(".next").index(this)
    var hei=$(".hezi").eq(index).offset().top//内容部分距离最上面的高度
    //console.log(hei)
    $(".next").removeClass("shou").eq(index).addClass("shou")
    $(obj).animate({scrollTop:hei})//滚动条的距离
})

$(".hongzi").click(function(){
    var index=$(".hongzi").index(this)
    var hei=$(".hezi").eq(index).offset().top//内容部分距离最上面的高度
    //console.log(hei)
    $(".hongzi").removeClass("shou").eq(index).addClass("shou")
    $(obj).animate({scrollTop:hei})//滚动条的距离
})

//导航与内容相对应的显示

//document.documentElement.scrollTop=1;
//var obj1=document.documentElement.scrollTop?document.documentElement:document.body;
//var ch=document.documentElement.clientHeight
//
//
//$(window).scroll(function(){
//    if(obj1.scrollTop==620){
//     alert(1)
//        $(".hongzi").removeClass("shou").eq(1).addClass("shou")
//
//    }
//    if(obj1.scrollTop==1176){
//        alert(2)
//        $(".hongzi").removeClass("shou").eq(2).addClass("shou")
//    }
//    if(obj1.scrollTop==1777){
//
//        $(".hongzi").removeClass("shou").eq(3).addClass("shou")
//    }
//    if(obj1.scrollTop==3726){
//
//        $(".hongzi").removeClass("shou").eq(4).addClass("shou")
//    }
//
//
//})
document.documentElement.scrollTop=1;
var obj1=document.documentElement.scrollTop?document.documentElement:document.body;
// obj.scrollTop=300;
var next1=document.getElementsByClassName("next");

window.onscroll=function  () {
    if (obj1.scrollTop>=0) {
        $(".next").removeClass("shou").eq(0).addClass("shou")
    }
    if (obj1.scrollTop>=620) {
        $(".next").removeClass("shou").eq(1).addClass("shou")
    }
    if (obj1.scrollTop>=1176) {
        $(".next").removeClass("shou").eq(2).addClass("shou")
    }
    if (obj1.scrollTop>=1777) {
        $(".next").removeClass("shou").eq(3).addClass("shou")
    }if (obj1.scrollTop>=3726) {
        $(".next").removeClass("shou").eq(4).addClass("shou")
    }


}







