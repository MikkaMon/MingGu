$(function(){

$(".sub_slider").slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
});


$("#content05 .xi-arrow-left").on("click", function(){
    $(".sub_slider").slick("slickPrev");
});

$("#content05 .xi-arrow-right").on("click", function(){
    $(".sub_slider").slick("slickNext");
});

$(".sub_slider figure").eq(1).addClass("on");
$(".sub_slider").on("afterChange", function(e,s,c){
    $(".sub_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
});


$("#bgndVideo").YTPlayer({
    showControl:false,
    containment:'#content04',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    playOnlyIfVisible:true
    
});



});