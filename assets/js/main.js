document.addEventListener('DOMContentLoaded', function(){

    const ta = document.querySelector('.text__animation');
    const hh = document.querySelector('.hero__heart');
    const hb = document.querySelector('.hero__bars');
    const si = document.querySelectorAll('.statics__item div:first-child');
    
    (function(){
        ta.classList.add('init');
        hh.classList.add('init');
        hb.classList.add('init');
        setTimeout(() => {
            ta.classList.remove('init');
            hh.classList.remove('init');
            hb.classList.remove('init');
        }, 1000);
    }());

    (function(){
        si.forEach((item)=>{
            const iv = Number(item.innerText);
            let invl = setInterval(cnt, 10);
            let count = (iv-50);
            function cnt(){
                if(count >= iv) clearInterval(invl);
                item.textContent = count;
                count++;
            }
        })
    }());

    // Mobile Menu Function
    const menuBtn = document.querySelector('.navbar__hamburger');
    const menu = document.querySelector('.navbar__menu');
    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu(){
        let menuBtn = document.querySelector('.navbar__hamburger');
        let menu = document.querySelector('.navbar__menu');
        if(!menu.classList.contains('open')) {
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>';
            menuBtn.classList.add('open');
            menu.classList.add('open');
        }
        else{
            menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>';
            menuBtn.classList.remove('open');
            menu.classList.remove('open');
        }
    }

    (function displayToggleBtn(){
        window.addEventListener('resize', ()=>{
            menu.classList.remove('open');
            menuBtn.classList.remove('open');
            if(window.innerWidth >= 1024){
                menuBtn.style.display = 'none';
            }
            else{
                menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>';
                menuBtn.style.display = 'inline-flex';
            }
        })
    }())

    // Testimonial Slider Function
    const controls = document.querySelectorAll('.controls__arrow');

    controls.forEach((control) =>{
        control.addEventListener('click', (e) => {
            const slide = document.querySelector('.testimonial__slider--slide.active');
            if(e.currentTarget.classList.contains('controls__arrow--left')){
                if(slide.nextElementSibling.classList.contains('testimonial__slider--slide')){
                    slide.classList.remove('active');
                    slide.nextElementSibling.classList.add('active');
                }
            }
            if(e.currentTarget.classList.contains('controls__arrow--right')){
                if(slide.previousElementSibling && slide.previousElementSibling.classList.contains('testimonial__slider--slide')){
                    slide.classList.remove('active');
                    slide.previousElementSibling.classList.add('active');
                }
            }
        })
    })

})