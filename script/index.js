
var dark_mode = document.querySelector("#dark-mode").addEventListener("click", function () {
    if (confirm("Are you sure that you wish change the dark mode?")) {
        var body = document.querySelector("#content").classList.add("dark-mode")
        var light_mode = document.querySelector("#light-mode").setAttribute("style", "display: show; cursor: pointer; color: #FFF;")

        this.setAttribute("style", "display: none;")
    }
})

var light_mode = document.querySelector("#light-mode").addEventListener("click", function () {
    if (confirm("Are you sure that you wish change the light mode?")) {
        var body = document.querySelector("#content").classList.remove("dark-mode")
        var dark_mode = document.querySelector("#dark-mode").setAttribute("style", "display: show; cursor: pointer; color: #323232;")

        this.setAttribute("style", "display: none;")
    }
})

var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var sec = date.getSeconds()

console.log(`${hour}:${min}:${sec}`)

var time_full = hour + ":" + min + ":" + sec

if (hour >= 18) {
    var body = document.querySelector("#content").classList.add("dark-mode")
    var light_mode = document.querySelector("#light-mode").setAttribute("style", "display: show; cursor: pointer; color: #FFF;")

    this.setAttribute("style", "display: none;")
}