window.onload = function () {
    console.log("hello")

}
document.querySelector("#popup button").addEventListener('click', function () {
    document.querySelector("#popup").classList = "d-none"
});


$(function () {//$(".swiper-wrapper").animate({ "marginLeft": "-="+800 }//끊임없이 옆으로 가게함(추가대입식)


    function swiperfun() {
        $(".swiper-wrapper").animate({ "marginLeft": -$(".swiper-slide").width() }, 500, function () {
            $(".swiper-wrapper .swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("margin-left", 0)
        })
    }
    setInterval(swiperfun, 3000)
    // $("body").addClass("c")//jquery 손상여부 확인
    //$(".swiper-wrapper").animate({ "marginLeft": -$(".swiper-slide").width() }, 800, function () {
    //swiper-slide의 넓이만큼 marginLeft 애니메이션(jquery 짱)
})  