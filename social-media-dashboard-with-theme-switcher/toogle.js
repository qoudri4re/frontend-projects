function darkMode() {
    document.getElementById('class_to_change-1').classList.remove('header-light')
    document.getElementById('class_to_change-2').classList.remove('social-details-light')
    document.getElementById('class_to_change-2').classList.add('social-details-dark')
    document.getElementById('class_to_change-1').classList.add('header-dark')
    document.getElementById('body').style.backgroundColor = "hsl(230, 17%, 14%)"
}

function lightMode() {
    document.getElementById('class_to_change-1').classList.remove('header-dark')
    document.getElementById('class_to_change-2').classList.remove('social-details-dark')
    document.getElementById('class_to_change-1').classList.add('header-light')
    document.getElementById('class_to_change-2').classList.add('social-details-light')
    
    document.getElementById('body').style.backgroundColor = "white"
}



let in_light_mode = true
document.getElementById('toogle-button').addEventListener('click', function () {
    if (in_light_mode) {
        document.getElementById("sliding-circle").style.margin = "0 24px"
        darkMode()
        in_light_mode = false
    } else {
        document.getElementById("sliding-circle").style.margin = "0 2px"
        lightMode()
        in_light_mode = true
    }
    
})