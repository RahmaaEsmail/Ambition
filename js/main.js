let closeSidebar = document.getElementById('closeSide');
let openSidebar = document.getElementById('openSidebar')
let sidebar = document.getElementById('sidebar');
let nav = document.getElementById('nav')


// close and open sidebar
closeSidebar.onclick = function () {
   sidebar.style.right = '-100%';
   sidebar.style.transition = 'all 3s'
}

openSidebar.onclick = function () {
   sidebar.style.right = '0px';
   sidebar.style.transition = 'all 1.5s'
}


// Change navbar's background while scrolling
let scrollTop = $('header .header-txt').offset().top;
let footerScroll = $('footer').offset().top;
$(window).scroll(function () {
   if ($(window).scrollTop() >= scrollTop && $(window).scrollTop() <= footerScroll) {
      nav.classList.add('fixed-top')
      nav.style.backgroundColor = '#0c3446'
   }
   else {
      nav.classList.remove('fixed-top')
      nav.style.backgroundColor = ' rgba(0, 0, 0, 0.3)'
   }
})


// Animation
AOS.init();



// An Active Menu Class While User Scrolls The Window
let lis = document.querySelectorAll('.link')
let sections = document.querySelectorAll('.sectionList');
function activeMenue() {
   let len = sections.length;
   while (--len && window.scrollY + 97 < sections[len].offsetTop) { }
   lis.forEach((item => item.classList.remove('active')))
   lis[len].classList.add('active')
}
activeMenue()
window.addEventListener('scroll', activeMenue)

