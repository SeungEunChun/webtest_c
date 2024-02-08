window.onload = function () {
    console.log("hello")
    document.querySelector("#popup button").addEventListener('click', function () {
        document.querySelector("#popup").classList = "d-none"
    })
}