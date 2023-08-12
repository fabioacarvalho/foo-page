
var set_theme = () => {
    var body = document.querySelector("#content").classList.add("dark-mode")
    var light_mode = document.querySelector("#light-mode").setAttribute("style", "display: show; cursor: pointer; color: #FFF;")
    var card_body = document.querySelectorAll("#card-mode")
    card_body.forEach(element => {
        console.log(element)
        element.setAttribute("style", "background-color: #323232; box-shadow: 5px 5px 5px #ffffff84")
    })

    var github = document.querySelector("#github").setAttribute("style", "color: #FFF;")
    var linkedid = document.querySelector("#linkedid").setAttribute("style", "color: #FFF;")
    var icon_back = document.querySelector("#icon_back").setAttribute("style", "color: #FFF;")

    this.setAttribute("style", "display: none;")
}

var dark_mode = document.querySelector("#dark-mode").addEventListener("click", function () {
    if (confirm("Are you sure that you wish change the dark mode?")) {
        set_theme()
    }
})

var light_mode = document.querySelector("#light-mode").addEventListener("click", function () {
    if (confirm("Are you sure that you wish change the light mode?")) {
        var body = document.querySelector("#content").classList.remove("dark-mode")
        var dark_mode = document.querySelector("#dark-mode").setAttribute("style", "display: show; cursor: pointer; color: #323232;")
        var card_body = document.querySelectorAll("#card-mode")
        card_body.forEach(element => {
            console.log(element)
            element.setAttribute("style", "background-color: #FFF; color: #000; box-shadow: 5px 5px 5px #32323232")
        })
        var github = document.querySelector("#github").setAttribute("style", "color: #323232;")
        var linkedid = document.querySelector("#linkedid").setAttribute("style", "color: #323232;")

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
    set_theme()
}

//Page chat GPT:

function aks_chat() {
    console.log("AQUIIIII")
        
    if(confirm("Sorry, we are working to delivery this as soon as possible. Now if do you want, we can redirect you to page official, just click ok or cancel to stay here!") === true) {
        window.open('https://chat.openai.com/', '_blank');
    }
}

