// shoot for 10/10/10 | 15 | 10/10/10
// that means 40/15 (55)
// 1min = 60,000
// 10 min = 600,000
// 15 min = 900,000

let thingsthings = ["./hydrate.html", "./center.html", "./posture.html"]
let audio = new Audio("./paging_sound.mp3")
let traverse = 0
let interval = setInterval(() => {
    window.open(thingsthings[traverse % 3])
    audio.play()
    traverse += 1
    if (traverse % 3 == 1 & traverse > 1) {
        window.open("./chill.html")
    }
}, 600000);
// }, 10000); (for testing; 10 secs)