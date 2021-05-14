const left = document.querySelector('.arrow-left')
const right = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slide')

let activeSlide = 0

setBgToBody()

right.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

left.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

function setBgToBody() {
    document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')

}