let ulNavigation = document.querySelectorAll("#navigation_ul");
ulNavigation.forEach(el => {
    el.addEventListener('click', (event) => {
        if (event.target.classList.contains('a__href')) {
            let listClickedLLink = document.querySelectorAll("#navigation_ul > li > a");
            listClickedLLink.forEach(item => {
                item.classList.remove('active');
            })
            event.target.classList.add('active');
        }
    })
})

let phoneSlider = document.querySelector("body > main > div")
document.querySelector("body > main > div > div.main_wrapper > a:nth-child(4) > div")