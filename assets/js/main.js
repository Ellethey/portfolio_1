/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


// dark mode

// function convertD(){

// }

// احصل على الزر (الأيقونة) والـ <body>
const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const header = document.querySelector('.l-header');
const fontH = document.querySelectorAll('.fontH');
var moon = document.querySelector('.bxs-moon')
var DivDark = document.querySelector('.icon-dark')
var footer = document.querySelector('.footer')
var isDarkMode = false;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    moon.style.color.toggle = "white"

    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        DivDark.style.backgroundColor = "black";
        footer.style.backgroundColor = "black";
        header.style.backgroundColor = "black";
        fontH.forEach(element => {
            element.style.color = "white";
        });
        } else {
        DivDark.style.backgroundColor = "white";
        footer.style.backgroundColor = "hsl( 224 , 56%, 12%)";
        header.style.backgroundColor = "white";
        fontH.forEach(element => {
            element.style.color = "black";
        });
    }

});
