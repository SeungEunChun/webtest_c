window.onload = function () {
    console.log("hello")

}
document.querySelector("#popup button").addEventListener('click', function () {
    document.querySelector("#popup").classList = "d-none"
});


$(function () {
    $(".swiper-wrapper").animate({ "marginLeft": -800 }, 800, function () {

    })
    // $("body").addClass("c")//jquery 손상여부 확인
})  