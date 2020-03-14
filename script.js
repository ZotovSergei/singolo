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
const arrow = document.querySelectorAll(".arrow");

arrow.forEach(element => {
    element.addEventListener('click', (event) => {
        const layout = document.querySelectorAll(".bg_color");
        changeBackground(layout);
    })
});

const changeBackground = (item) => {
    // if (item.classList.contains('bg_color_red')) {
    //     console.log(item)
    //     item.classList.remove('bg_color_red');
    //     item.classList.add('bg_color_blue');
    // } else {
    //     item.classList.add('bg_color_red');
    //     item.classList.remove('bg_color_blue');
    // }
    item.forEach(element => {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });

}