let slide1 = {
    image : 'images/desktop-image-hero-1.jpg',
    heading : 'Discover innovative ways to decorate',
    paragraph : "  We provide unmatched quality, comfort, and style for property owners across the country." +
                "Our experts combine form and function in bringing your vision to life. Create a room in your " +
                "own style with our collection and make your property a reflection of you and what you love.",
    image_mobile : 'images/mobile-image-hero-1.jpg'
}
let slide2 = {
    image : 'images/desktop-image-hero-2.jpg',
    heading : 'We are available all across the globe',
    paragraph : "With stores all over the world, it's easy for you to find furniture for your home or place of business. "+
                "Locally, we’re in most major cities throughout the country. Find the branch nearest you using our " +
                "store locator. Any questions? Don't hesitate to contact us today.",
    image_mobile : 'images/mobile-image-hero-2.jpg'
}
let slide3 = {
    image : 'images/desktop-image-hero-3.jpg',
    heading : 'Manufactured with the best materials',
    paragraph : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology" +
                "to ensure that every product is made as perfect and as consistent as possible. With three decades of" +
                "experience in this industry, we understand what customers want for their home and office.",
    image_mobile : 'images/mobile-image-hero-3.jpg'
}

const slides = [slide1, slide2, slide3]
let current_slide_index = 0

function backSlide() {
    if (current_slide_index === 0) {
        current_slide_index = slides.length -1;
        changeSlideContents(current_slide_index)
    } else {
        current_slide_index -=  1
        changeSlideContents(current_slide_index)
    }
}
function forwardSlide() {
    if (current_slide_index === slides.length - 1) {
        current_slide_index = 0
        changeSlideContents(current_slide_index)
    } else {
        current_slide_index += 1
        changeSlideContents(current_slide_index)
    }
}
function changeSlideContents(current_slide_index) {
    let slide = slides[current_slide_index]
    document.getElementById('slide-heading').innerText = slide.heading
    document.getElementById('slide-paragraph').innerText = slide.paragraph
    if (screen.width < 800) {
        document.getElementById('slide-image').style.background = `url(${slide.image_mobile})`   
    } else {
        document.getElementById('slide-image').style.background = `url(${slide.image})`
    }    
    document.getElementById('slide-image').style.backgroundSize = "100% 100%"
    document.getElementById('slide-image').style.backgroundRepeat = 'no-repeat'
}

document.getElementById('back-slide').addEventListener('click', function () {
    backSlide()
})
document.getElementById('forward-slide').addEventListener('click', function () {
    forwardSlide()
})

//MENU 
let menu_closed = true
document.getElementById('open-menu').addEventListener('click', function () {
        document.getElementById('mobile-nav').style.display = 'flex'
})
document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('mobile-nav').style.display = 'none'
})
