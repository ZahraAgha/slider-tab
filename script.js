//slideCodes

const slides = document.querySelector(".slides")
const slide = document.querySelectorAll(".slide")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let currentIndex = 0
let interval;

function startAutoplay() {
    interval = setInterval(() => {
        if (currentIndex < slide.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 3000); // Adjust the interval as needed (in milliseconds)
}

function stopAutoplay() {
    clearInterval(interval);
}

next.addEventListener("click", () => {
    if (currentIndex < slide.length - 1) {
        currentIndex++
    } else {
        currentIndex = 0
    }
    updateSlider()
})

prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--
    } else {
        currentIndex = slide.length - 1
    }
    updateSlider()
})

slides.addEventListener("mouseenter", stopAutoplay);
slides.addEventListener("mouseleave", startAutoplay);

function updateSlider() {
    const transformValue = -currentIndex * 100 + "%"
    slides.style.transform = `translateX(${transformValue})`

}


startAutoplay();


//tabCodes
function showTab(tabId) {
    const allContent = document.querySelectorAll(".text-content")
    allContent.forEach(tab => {
        tab.style.display = "none"
    })

    const selectedTab = document.getElementById(tabId)
    selectedTab.style.display = "flex"
}

// const allContent = document.querySelectorAll(".content");

document.getElementById("dinner").addEventListener("click", () => {
    showTab("tab1")
})
document.getElementById("breakfast").addEventListener("click", () => {
    showTab("tab2")
})
document.getElementById("lunch").addEventListener("click", () => {
    showTab("tab3")
})



