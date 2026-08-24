/* ---------------------- CURSOR ---------------------- */

const cursorDot = document.querySelector(".cursor_dot")
const cursorAura = document.querySelector(".cursor_aura")
const links = document.querySelectorAll(".active_button")
const sitePreloader = document.querySelector(".site_preloader")

const videos = document.querySelectorAll(".video")
const videoContents = document.querySelectorAll(".content")
const videoButtons = document.querySelectorAll(".video_button")
const progressRings = document.querySelectorAll(".progress_ring")
const progressRingCircles = document.querySelectorAll(".progress_ring_circle")
const tourOverlay = document.querySelector(".tour_overlay")
const tourFrame = document.querySelector(".tour_frame iframe[data-src]")
const heroSection = document.querySelector(".video_bg")
const heroScrollButton = document.querySelector(".hero_scroll_down")
const pageFooter = document.querySelector(".footer")
const floatingButtons = document.querySelectorAll(".floating_messengers")
const floatingMessengers = document.querySelector(".floating_messengers")
const floatingMessengerToggle = document.querySelector(".floating_messenger_toggle")
const projectFilterButtons = document.querySelectorAll("[data-project-filter]")
const projectCards = document.querySelectorAll("[data-project-category]")
const projectQuickViewButtons = document.querySelectorAll(".project_quick_view")
const projectModal = document.querySelector(".project_modal")
const projectModalWindow = document.querySelector(".project_modal_window")
const projectModalImage = document.querySelector(".project_modal_image")
const projectModalCategory = document.querySelector(".project_modal_category")
const projectModalTitle = document.querySelector("#projectModalTitle")
const projectModalDescription = document.querySelector(".project_modal_info p")
const projectModalPrev = document.querySelector(".project_modal_arrow_prev")
const projectModalNext = document.querySelector(".project_modal_arrow_next")
const projectModalCloseButtons = document.querySelectorAll("[data-project-modal-close]")
const expertiseItems = document.querySelectorAll(".studio_expertise_item")
const expertiseDescriptions = document.querySelectorAll(".studio_expertise_item p")
const AUTO_SLIDE_DURATION = 7000
const FLOATING_BUTTON_BOTTOM_OFFSET = 28
const FLOATING_BUTTON_MOBILE_BOTTOM_OFFSET = 18
const PRELOADER_MIN_VISIBLE = 650
const PRELOADER_MAX_WAIT = 8000
const preloaderStartedAt = performance.now()
let activeProjectGallery = []
let activeProjectImageIndex = 0

// const block_projects = document.querySelector(".block_projects")

// block_projects.style.height = 100 75 + "px"

updateFloatingButtonsOffset()
updateExpertiseDescriptionHeights()
prepareSitePreloader()
prepareTourFrame()
window.addEventListener("scroll", updateFloatingButtonsOffset, { passive: true })
window.addEventListener("resize", updateFloatingButtonsOffset)
window.addEventListener("resize", updateExpertiseDescriptionHeights)
document.fonts?.ready.then(updateExpertiseDescriptionHeights)

expertiseItems.forEach((item) => {
    const description = item.querySelector("p")
    const content = item.querySelector(".studio_expertise_content")

    item.addEventListener("mouseenter", () => {
        item.classList.add("studio_expertise_item_active")
        description.style.height = description.style.getPropertyValue("--expertise-copy-height") || "560px"
        description.style.marginTop = "24px"
        description.style.overflow = "hidden"
        description.style.opacity = "1"
        description.style.pointerEvents = "auto"
        description.style.transform = "translateY(0)"
        content.style.backgroundColor = "rgba(8, 8, 8, .72)"
    })

    item.addEventListener("mouseleave", () => {
        item.classList.remove("studio_expertise_item_active")
        description.style.height = "0"
        description.style.marginTop = "0"
        description.style.overflow = "hidden"
        description.style.opacity = "0"
        description.style.pointerEvents = "none"
        description.style.transform = "translateY(18px)"
        content.style.backgroundColor = "rgba(8, 8, 8, 0)"
    })
})

if (heroScrollButton) {
    heroScrollButton.addEventListener("click", () => {
        const nextSection = document.querySelector("#engineering") || document.querySelector("#projects") || heroSection?.nextElementSibling

        nextSection?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}

if (heroSection) {
    heroSection.addEventListener("click", (event) => {
        if (event.target.closest(".video_buttons, .hero_scroll_down, .header, a, button")) {
            return
        }

        toggleHeroSlideshow()
    })
}

if (floatingMessengerToggle && floatingMessengers) {
    floatingMessengerToggle.addEventListener("click", () => {
        const isOpen = floatingMessengers.classList.toggle("floating_messengers_open")

        floatingMessengerToggle.setAttribute("aria-expanded", String(isOpen))
        floatingMessengerToggle.setAttribute(
            "aria-label",
            isOpen ? "Закрыть мессенджеры" : "Открыть мессенджеры"
        )
    })

    document.addEventListener("click", (event) => {
        if (!floatingMessengers.contains(event.target)) {
            closeFloatingMessengers()
        }
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeFloatingMessengers()
        }
    })
}

projectFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const activeFilter = button.dataset.projectFilter

        projectFilterButtons.forEach((filterButton) => {
            filterButton.classList.toggle("project_filter_active", filterButton === button)
        })

        projectCards.forEach((card) => {
            const shouldShow = activeFilter === "all" || card.dataset.projectCategory === activeFilter

            card.classList.toggle("project_hidden", !shouldShow)
        })
    })
})

projectCards.forEach((card) => {
    const previewVideo = card.querySelector(".project_preview_video")

    if (!previewVideo) {
        return
    }

    card.addEventListener("mouseenter", () => {
        playProjectPreview(previewVideo)
    })

    card.addEventListener("mouseleave", () => {
        stopProjectPreview(previewVideo)
    })

    card.addEventListener("focusin", () => {
        playProjectPreview(previewVideo)
    })

    card.addEventListener("focusout", () => {
        stopProjectPreview(previewVideo)
    })
})

projectQuickViewButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation()

        const project = button.closest(".project")

        if (project) {
            openProjectModal(project)
        }
    })
})

projectModalPrev?.addEventListener("click", () => {
    switchProjectModalImage(-1)
})

projectModalNext?.addEventListener("click", () => {
    switchProjectModalImage(1)
})

projectModalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeProjectModal)
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeProjectModal()
    }
})

window.addEventListener("mousemove", (e) => {

    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = posX + "px"
    cursorDot.style.top = posY + "px"

    cursorDot.classList.remove('hidden')
    cursorAura.classList.remove('hidden')

    cursorAura.animate({
        left: posX + "px",
        top: posY + "px"
    }, { duration: 500, fill: "forwards" })

})

function updateFloatingButtonsOffset() {
    if (!pageFooter || !floatingButtons.length) {
        return
    }

    const footerTop = pageFooter.getBoundingClientRect().top
    const baseOffset = window.matchMedia("(max-width: 620px)").matches
        ? FLOATING_BUTTON_MOBILE_BOTTOM_OFFSET
        : FLOATING_BUTTON_BOTTOM_OFFSET
    const footerOverlap = Math.max(0, window.innerHeight - footerTop)
    const bottomOffset = baseOffset + footerOverlap

    floatingButtons.forEach((button) => {
        button.style.bottom = `${bottomOffset}px`
    })
}

function prepareSitePreloader() {
    if (!sitePreloader) {
        return
    }

    const firstVideo = videos[0]
    const firstHeroVisualReady = firstVideo
        ? Promise.race([
            waitUntilImageReady(firstVideo.poster),
            waitUntilVideoCanPlay(firstVideo),
        ])
        : Promise.resolve()
    const maxWait = new Promise((resolve) => {
        window.setTimeout(resolve, PRELOADER_MAX_WAIT)
    })

    Promise.race([firstHeroVisualReady, maxWait]).then(hideSitePreloader)
}

function waitUntilImageReady(source) {
    if (!source) {
        return Promise.resolve()
    }

    const image = new Image()
    image.decoding = "async"
    image.src = source

    const loaded = image.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true })
            image.addEventListener("error", resolve, { once: true })
        })

    return loaded.then(() => {
        if (typeof image.decode === "function") {
            return image.decode().catch(() => {})
        }

        return undefined
    })
}

function prepareTourFrame() {
    if (!tourFrame) {
        return
    }

    const loadTour = () => {
        if (!tourFrame.hasAttribute("src")) {
            tourFrame.src = tourFrame.dataset.src
        }
    }

    if (!("IntersectionObserver" in window)) {
        loadTour()
        return
    }

    const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
            return
        }

        loadTour()
        observer.disconnect()
    }, { rootMargin: "600px 0px" })

    observer.observe(tourFrame)
}

function hideSitePreloader() {
    if (!sitePreloader || document.body.classList.contains("site_loaded")) {
        return
    }

    const elapsed = performance.now() - preloaderStartedAt
    const delay = Math.max(0, PRELOADER_MIN_VISIBLE - elapsed)

    window.setTimeout(() => {
        document.body.classList.remove("site_loading")
        document.body.classList.add("site_loaded")
        window.setTimeout(() => {
            sitePreloader.remove()
        }, 700)
    }, delay)
}

function closeFloatingMessengers() {
    if (!floatingMessengers || !floatingMessengerToggle) {
        return
    }

    floatingMessengers.classList.remove("floating_messengers_open")
    floatingMessengerToggle.setAttribute("aria-expanded", "false")
    floatingMessengerToggle.setAttribute("aria-label", "Открыть мессенджеры")
}

function openProjectModal(project) {
    if (!projectModal || !projectModalImage || !projectModalCategory || !projectModalTitle || !projectModalDescription) {
        return
    }

    activeProjectGallery = getProjectGallery(project)
    activeProjectImageIndex = 0

    projectModalCategory.textContent = project.dataset.projectLabel || ""
    projectModalTitle.textContent = project.dataset.projectTitle || ""
    projectModalDescription.textContent = project.dataset.projectDescription || ""
    updateProjectModalImage()

    projectModal.classList.add("project_modal_open")
    projectModal.setAttribute("aria-hidden", "false")
    document.body.classList.add("project_modal_active")
    projectModalWindow?.focus()
}

function closeProjectModal() {
    if (!projectModal) {
        return
    }

    projectModal.classList.remove("project_modal_open")
    projectModal.setAttribute("aria-hidden", "true")
    document.body.classList.remove("project_modal_active")
}

function getProjectGallery(project) {
    try {
        const gallery = JSON.parse(project.dataset.projectGallery || "[]")

        if (Array.isArray(gallery) && gallery.length) {
            return gallery
        }
    } catch (error) {
        return []
    }

    return []
}

function switchProjectModalImage(direction) {
    if (!activeProjectGallery.length) {
        return
    }

    activeProjectImageIndex = (activeProjectImageIndex + direction + activeProjectGallery.length) % activeProjectGallery.length
    updateProjectModalImage()
}

function updateProjectModalImage() {
    if (!projectModalImage || !activeProjectGallery.length) {
        return
    }

    const image = activeProjectGallery[activeProjectImageIndex]

    projectModalImage.src = image
    projectModalImage.alt = projectModalTitle?.textContent || "Проект CAD Project"
}

function playProjectPreview(video) {
    video.currentTime = 0

    const playRequest = video.play()

    if (playRequest && typeof playRequest.catch === "function") {
        playRequest.catch(() => {})
    }
}

function stopProjectPreview(video) {
    video.pause()
    video.currentTime = 0
}

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

let activeVideoIndex = 0
let isVideoSwitching = false
let isAutoSlideshow = true
let autoSlideTimer = null

const ringLengths = Array.from(progressRingCircles, (circle) => {
    const radius = circle.r.baseVal.value
    const circumference = 2 * Math.PI * radius

    circle.style.strokeDasharray = `${circumference} ${circumference}`
    circle.style.strokeDashoffset = circumference

    return circumference
})

videos.forEach((video, index) => {
    video.addEventListener("timeupdate", () => {
        if (index === activeVideoIndex) {
            updateProgress(index)
        }
    })

    video.addEventListener("loadedmetadata", () => {
        updateProgress(index)
    })

    videoButtons[index]?.addEventListener("click", () => {
        if (index !== activeVideoIndex) {
            switchVideo(index)
        }
    })
})

startHeroVideo()

if (tourOverlay) {
    tourOverlay.addEventListener("click", () => {
        tourOverlay.classList.add("hidden")
    })
}

function toggleHeroSlideshow() {
    if (!videos.length) {
        return
    }

    isAutoSlideshow = !isAutoSlideshow
    heroSection?.classList.toggle("hero_paused", !isAutoSlideshow)

    if (isAutoSlideshow) {
        videos[activeVideoIndex]?.play()
        scheduleAutoSlide()
    } else {
        clearAutoSlideTimer()
        videos[activeVideoIndex]?.pause()
    }
}

function startHeroVideo() {
    if (!videos.length) {
        return
    }

    switchVideo(0, true)
}

async function switchVideo(nextIndex, isInitial = false) {
    if (isVideoSwitching || !videos[nextIndex]) {
        return
    }

    isVideoSwitching = true

    const currentIndex = activeVideoIndex
    const currentVideo = videos[currentIndex]
    const nextVideo = videos[nextIndex]

    try {
        clearAutoSlideTimer()
        nextVideo.currentTime = 0
        await waitUntilVideoCanPlay(nextVideo)

        if (!isInitial) {
            currentVideo.pause()
        }

        activateVideoState(currentIndex, nextIndex)
        activeVideoIndex = nextIndex

        await playVideo(nextVideo)

        if (!isInitial && currentVideo) {
            currentVideo.currentTime = 0
            resetProgress(currentIndex)
        }
    } finally {
        isVideoSwitching = false

        if (isAutoSlideshow) {
            scheduleAutoSlide()
        }
    }
}

function activateVideoState(currentIndex, nextIndex) {
    videos[currentIndex]?.classList.remove("video_current")
    videos[currentIndex]?.classList.add("video_next")
    videos[nextIndex].classList.add("video_current")
    videos[nextIndex].classList.remove("video_next")

    videoContents[currentIndex]?.classList.remove("content_current")
    videoContents[currentIndex]?.classList.add("content_next")
    videoContents[nextIndex]?.classList.add("content_current")
    videoContents[nextIndex]?.classList.remove("content_next")

    videoButtons[currentIndex]?.classList.remove("active_now")
    videoButtons[nextIndex]?.classList.add("active_now")

    progressRings[currentIndex]?.classList.remove("active_ring")
    progressRings[nextIndex]?.classList.add("active_ring")
    resetProgress(nextIndex)
}

function getNextVideoIndex() {
    return activeVideoIndex === videos.length - 1 ? 0 : activeVideoIndex + 1
}

function waitUntilVideoCanPlay(video) {
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
        return Promise.resolve()
    }

    return new Promise((resolve) => {
        const cleanup = () => {
            video.removeEventListener("canplay", cleanup)
            video.removeEventListener("loadeddata", cleanup)
        }

        const done = () => {
            cleanup()
            resolve()
        }

        video.addEventListener("canplay", done, { once: true })
        video.addEventListener("loadeddata", done, { once: true })
        video.load()
    })
}

function playVideo(video) {
    const playRequest = video.play()

    if (playRequest && typeof playRequest.catch === "function") {
        return playRequest.catch(() => {})
    }

    return Promise.resolve()
}

function updateProgress(index) {
    const video = videos[index]
    const circumference = ringLengths[index]

    if (!video || !circumference || !Number.isFinite(video.duration) || video.duration <= 0) {
        return
    }

    const progress = Math.min(video.currentTime / video.duration, 1)
    progressRingCircles[index].style.strokeDashoffset = circumference - progress * circumference
}

function resetProgress(index) {
    if (progressRingCircles[index]) {
        progressRingCircles[index].style.strokeDashoffset = ringLengths[index]
    }
}

function scheduleAutoSlide() {
    clearAutoSlideTimer()

    window.setTimeout(preloadNextVideo, 900)

    autoSlideTimer = window.setTimeout(() => {
        switchVideo(getNextVideoIndex())
    }, AUTO_SLIDE_DURATION)
}

function preloadNextVideo() {
    const nextVideo = videos[getNextVideoIndex()]

    if (!nextVideo || nextVideo.dataset.preloadStarted === "true") {
        return
    }

    nextVideo.dataset.preloadStarted = "true"
    nextVideo.preload = "metadata"
    nextVideo.load()
}

function clearAutoSlideTimer() {
    if (autoSlideTimer) {
        window.clearTimeout(autoSlideTimer)
        autoSlideTimer = null
    }
}

function updateExpertiseDescriptionHeights() {
    expertiseDescriptions.forEach((description) => {
        const naturalHeight = description.scrollHeight + 24

        description.style.setProperty("--expertise-copy-height", `${naturalHeight}px`)
    })
}

/* ---------------------- VIDEO ---------------------- */
