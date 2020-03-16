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
        event.target.classList.add('portfolio_active');
        selectedImg();    
    }
})

const selectedImg = () => {
    let img = {};
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
    var shuffledArr = arr.sort(function(){
        return Math.random() - 0.5;
    });
    const imgArray = document.querySelectorAll(".image_wrapper .image");    
    imgArray.forEach((el, i) => {
        let item = el.querySelector('.prj_image');        
        img[i] = item;
        item.remove();
    })
    imgArray.forEach((el, i) => {
        el.append(img[shuffledArr[i]]);        
    })    
}

const imgArray = document.querySelector(".image_wrapper");
imgArray.addEventListener('click',(event)=>{
    if (event.target.classList.contains('prj_image')) {
        const imgArray = document.querySelectorAll(".image_wrapper .image .prj_image");    
        imgArray.forEach((el, i) => {
            el.classList.remove('img_active');
        })
        event.target.classList.add('img_active');
    }
})

//Get a quote

const subject = document.querySelector('#subject');
const inSubj =  document.querySelector('#result-subject');
const desc = document.querySelector('#desc');
const inDesc = document.querySelector('#result-describe');
const btnSubmit = document.querySelector('#submit-button');
const btnClose = document.querySelector('#message-button');
const modal = document.querySelectorAll('.modal_message');
document.forms.feedback_form.onsubmit = function () {    
    return false
};

btnSubmit.addEventListener('click', (e) => {
    document.querySelector('#result-subject').innerText = /^Singolo$/.test(subject.value) ? 'Singolo' : 'Без темы';
    document.querySelector('#result-describe').innerText = desc.value.includes('Portfolio project') ? 'Portfolio project' : 'Без описания';
    // inSubj.innerText(textSubject);
    // inDesc.innerText(textDesc);
    modal.forEach(item => {
        item.classList.remove('hidden__message');
    })
})
btnClose.addEventListener('click', (e) => {
    modal.forEach(item => {
        item.classList.add('hidden__message');
    })
})
// debugger


