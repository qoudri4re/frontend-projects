let slide_position = 'right'


function change_content_on_slide(slide_position) {
    let basic_price = document.getElementById('basic-price')
    let professional_price = document.getElementById('professional-price')
    let master_price = document.getElementById('master-price')
    if (slide_position == 'right') {
        professional_price.innerText = "$24.99"
        master_price.innerText = "$39.99"
        basic_price.innerText = "$19.99"
    } else {
        professional_price.innerText = "$249.99"
        master_price.innerText = "$399.99"
        basic_price.innerText = "$199.99"
    }
}

document.getElementById('slide').addEventListener('click', function () {
    let slide_circle = document.getElementById('slide-circle')
    if (slide_position === 'right') {
        slide_circle.style.removeProperty('right')
        slide_circle.style.left = "48%"
        slide_position = "left"
        change_content_on_slide(slide_position)
    } else {
        slide_circle.style.removeProperty('left')
        slide_circle.style.right = "48.3%"
        slide_position = "right"
        change_content_on_slide(slide_position)
    }
})