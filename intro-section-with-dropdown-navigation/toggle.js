document.getElementById('features').style.visibility = 'hidden'
document.getElementById('company').style.visibility = 'hidden'
document.getElementById('mobile-right-header').style.visibility = 'hidden'
document.getElementById('under-company').style.display = 'none'
document.getElementById('under-features').style.display = 'none'


let company_arrow_upside_down = true
let feature_arrow_upside_down = true
document.getElementById('company-arrow').addEventListener('click', function () {
    if (company_arrow_upside_down) {
        company_arrow_upside_down = false
        document.getElementById('company-arrow-image').src = 'images/icon-arrow-up.svg'
        document.getElementById('company').style.visibility = 'visible'
    } else {
        company_arrow_upside_down = true
        document.getElementById('company-arrow-image').src = 'images/icon-arrow-down.svg'
        document.getElementById('company').style.visibility = 'hidden'
    }
})
document.getElementById('features-arrow').addEventListener('click', function () {
    if (feature_arrow_upside_down) {
        feature_arrow_upside_down = false
        document.getElementById('features-arrow-image').src = 'images/icon-arrow-up.svg'
        document.getElementById('features').style.visibility = 'visible'
    } else {
        feature_arrow_upside_down = true
        document.getElementById('features-arrow-image').src = 'images/icon-arrow-down.svg'
        document.getElementById('features').style.visibility = 'hidden'
        
    }
})




let menu_hambuger = true
document.getElementById('menu-icon').addEventListener('click', function () {
    if (menu_hambuger) {
        menu_hambuger = false
        document.getElementById('menu-icon').src = 'images/icon-close-menu.svg'
        document.getElementById('mobile-right-header').style.visibility = 'visible'
        document.getElementById('body').style.backgroundColor = 'hsl(0, 0%, 41%)'
    } else {
        menu_hambuger = true
        document.getElementById('menu-icon').src = 'images/icon-menu.svg'
        document.getElementById('mobile-right-header').style.visibility = 'hidden'
        document.getElementById('body').style.backgroundColor = 'white'
    }
})
let company_arrow_upside_down_mobile = true
let feature_arrow_upside_down_mobile = true



document.getElementById('features-arrow-mobile').addEventListener('click', function () {
    if (feature_arrow_upside_down_mobile) {
        feature_arrow_upside_down_mobile = false
        document.getElementById('features-arrow-mobile-image').src = 'images/icon-arrow-up.svg'
        document.getElementById('under-features').style.display = 'block'        
    } else {
        feature_arrow_upside_down_mobile = true
        document.getElementById('features-arrow-mobile-image').src = 'images/icon-arrow-down.svg'
        document.getElementById('under-features').style.display = 'none'
    }
})
document.getElementById('company-arrow-mobile').addEventListener('click', function () {
    if (company_arrow_upside_down_mobile) {
        company_arrow_upside_down_mobile = false
        document.getElementById('company-arrow-mobile-image').src = 'images/icon-arrow-up.svg'
        document.getElementById('under-company').style.display = 'block'
    } else {
        company_arrow_upside_down_mobile = true
        document.getElementById('company-arrow-mobile-image').src = 'images/icon-arrow-down.svg'
        document.getElementById('under-company').style.display = 'none'
        
    }  
})