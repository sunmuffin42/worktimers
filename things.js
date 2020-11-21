// window.open("./drankthings.html")

// shoot for 10/10/10 | 15 | 10/10/10
// 1min = 60,000
// 10 min = 600,000
// 15 min = 900,000

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
}, 600000);
// }, 10000); (for testing; 10 secs)