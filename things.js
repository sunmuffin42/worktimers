// window.open("./drankthings.html")

// shoot for 10/10/10 | 15 | 10/10/10

let thingsthings = ["./drankthings.html", "./awakenthings.html", "./posturethings.html"]
let audio = new Audio("./paging_sound.mp3")
let traverse = 0
let interval = setInterval(() => {
    window.open(thingsthings[traverse % 3])
    audio.play()
    traverse += 1
    if (traverse % 3 == 0) {
        window.open("./chillthings.html")
    }
}, 10000);