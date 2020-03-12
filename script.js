let ulNavigation = document.querySelector("#navigation_ul");
let liList = ulNavigation.querySelectorAll('li>a');
liList.forEach(el => {
    el.addEventListener('click', (event) => {
        liList.forEach(item => {
            item.classList.remove('active');
        })
        event.target.classList.add('active');
    })
})