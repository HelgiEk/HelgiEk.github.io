/* ---------------------- CURSOR ---------------------- */

const cursorDot = document.querySelector(".cursor_dot")
const cursorAura = document.querySelector(".cursor_aura")
const links = document.querySelectorAll(".active_button")

const videos = document.querySelectorAll(".video")
const videoContents = document.querySelectorAll(".content")
const videoButtons = document.querySelectorAll(".video_button")
const progressRings = document.querySelectorAll(".progress_ring")
const progressRingCircles = document.querySelectorAll(".progress_ring_circle")

// const block_projects = document.querySelector(".block_projects")

// block_projects.style.height = 100 75 + "px"

let percentVideo
let radius
let circumference
let offset

window.addEventListener("mousemove", (e) => {

    const posX = e.pageX
    const posY = e.pageY

    cursorDot.style.left = posX + "px"
    cursorDot.style.top = posY + "px"

    cursorDot.classList.remove('hidden')
    cursorAura.classList.remove('hidden')

    cursorAura.animate({
        left: posX + "px",
        top: posY + "px"
    }, { duration: 500, fill: "forwards" })

})

window.addEventListener("mouseout", () => {
    cursorDot.classList.add('hidden');
    cursorAura.classList.add('hidden');
})

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('mouseover', () => {
        cursorDot.classList.add('on_link')
        cursorAura.classList.add('on_link')
    })

    links[i].addEventListener('mouseout', () => {
        cursorDot.classList.remove('on_link')
        cursorAura.classList.remove('on_link')
    })
}

/* ---------------------- CURSOR ---------------------- */
/* --------------------------------------------------- */
/* ---------------------- VIDEO ---------------------- */

// videos[0].addEventListener('loadedmetadata', () => {
//     videos[0].currentTime = 0;
//     videos[0].play()
// });


for (let i = 0; i < videos.length; i++) {

    videos[i].addEventListener('ended', () => { Switching(i, videos.length) })

    videos[i].addEventListener('play', () => {
        percentVideo = 100 / videos[i].duration
        setCircumference(i)
    })

    videos[i].addEventListener('timeupdate', () => {
        const timeVideo = videos[i].currentTime * percentVideo
        setProgress(i, timeVideo);
    })

    videoButtons[i].addEventListener("click", () => {
        for (let j = 0; j < videos.length; j++) {
            if (videos[j].classList.contains("video_current")) {
                if (i != j) {
                    SwitchingOnClick(j, i)
                }
            }
        }
    })
}

function Switching(cur, endV) {
    let next

    if (cur == endV - 1) {
        next = 0
    } else {
        next = cur + 1
    }

    SwitchingOnClick(cur, next)
}

function SwitchingOnClick(cur, next) {
    videoSwitching(cur, next)
    contentSwitching(cur, next)
    buttonSwitching(cur, next)
    ringBarSwitching(cur, next)
}

function videoSwitching(cur, next) {
    videos[cur].currentTime = 0
    videos[next].currentTime = 0

    videos[cur].classList.remove('video_current')
    videos[next].classList.add('video_current')

    videos[next].classList.remove('video_next')
    videos[cur].classList.add('video_next')

    videos[next].play()
}

function contentSwitching(cur, next) {
    videoContents[cur].classList.remove('content_current')
    videoContents[next].classList.add('content_current')

    videoContents[next].classList.remove('content_next')
    videoContents[cur].classList.add('content_next')
}

function buttonSwitching(cur, next) {
    videoButtons[cur].classList.remove('active_now')
    videoButtons[next].classList.add('active_now')
}

function ringBarSwitching(cur, next) {
    progressRings[cur].classList.remove('active_ring')
    progressRings[next].classList.add('active_ring')
    progressRingCircles[cur].style.strokeDashoffset = circumference
    progressRingCircles[next].style.strokeDashoffset = circumference
}

/* ------- PROGRESS_RING ------- */

function setCircumference(cur) {
    radius = progressRingCircles[cur].r.baseVal.value
    circumference = 2 * Math.PI * radius

    progressRingCircles[cur].style.strokeDasharray = ` ${circumference} ${circumference}`
    progressRingCircles[cur].style.strokeDashoffset = circumference
}

function setProgress(cur, percent) {
    offset = circumference - percent / 100 * circumference
    progressRingCircles[cur].style.strokeDashoffset = offset
}

/* ------- PROGRESS_RING ------- */

/* ---------------------- VIDEO ---------------------- */