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
const arrowPrev = document.querySelectorAll(".prev_button");
const arrowNext = document.querySelectorAll(".next_button");
arrowPrev.forEach(element => {
    element.addEventListener('click', (event) => {
        const layout = document.querySelectorAll(".bg_color");
        changeBackgroundPrev();
    })
});
arrowNext.forEach(element => {
    element.addEventListener('click', (event) => {
        const layout = document.querySelectorAll(".bg_color");
        changeBackgroundNext();
    })
});

const changeBackgroundPrev = () => {
    const layout = document.querySelectorAll(".bg_color");
    let flag = false;
    let flag_0 = false;
    layout.forEach(item => {
        if (item.classList.contains('prev_move')) {
            item.classList.remove('prev_move');
            item.classList.add('prev_move_0');
            flag = true;
        }
        if (item.classList.contains('prev_move_2')) {
            item.classList.remove('prev_move_2');
            item.classList.add('prev_move_0')
            flag = true;
        }
        if (item.classList.contains('prev_move_0')) {
            item.classList.remove('prev_move_0');
            item.classList.add('prev_move_0');
            flag_0 = true;
        }
    })
    if (!flag || !flag_0) {
        layout[2].classList.add('prev_move');
        layout[1].classList.add('prev_move_2');
        layout[2].classList.remove('prev_move_0');
        layout[1].classList.remove('prev_move_0');
        flag = false;
        return;
    }
}

const changeBackgroundNext = (item) => {
    const layout = document.querySelectorAll(".bg_color");
    let flag = false;
    let flag_0 = false;
    layout.forEach(item => {
        if (item.classList.contains('prev_move')) {
            item.classList.remove('prev_move');
            item.classList.add('prev_move_0');
            flag = true;
        }
        if (item.classList.contains('prev_move_2')) {
            item.classList.remove('prev_move_2');
            item.classList.add('prev_move_0')
            flag = true;
        }
        if (item.classList.contains('prev_move_0')) {
            item.classList.remove('prev_move_0');
            item.classList.add('prev_move_0');
            flag_0 = true;
        }
    })
    if (!flag || !flag_0) {
        layout[0].classList.add('prev_move_2');
        layout[1].classList.add('prev_move');
        layout[0].classList.remove('prev_move_0');
        layout[1].classList.remove('prev_move_0');
        flag = false;
        return;
    }
}

const buttonPhone = document.querySelectorAll('.phone');
buttonPhone.forEach((item, i) => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn_phone')) {
            let parent = event.target.parentElement;
            while (true) {
                if (parent.classList.contains('wrapper_phone')) {
                    parent = parent.querySelector('.screen_layout div');
                    break;
                } else {
                    parent = parent.parentElement;
                }
            }
            if (parent.style.visibility == 'hidden') {
                parent.style.visibility = 'visible';
            } else {
                parent.style.visibility = 'hidden';
            }
        }
    })
})

//Portfolio
const portfolioBtnNav = document.querySelector('.btn_navigation');
portfolioBtnNav.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_nav')) {   
        const btnClicked = document.querySelectorAll('.btn_navigation span');
        btnClicked.forEach(el => {
            el.classList.remove('portfolio_active');
        });
        event.target.classList.add('portfolio_active')
        // listClickedLLink.forEach(item => {
        //     item.classList.remove('active');
        // })
        // event.target.classList.add('active');
        console.log(event.target)
    }
})
