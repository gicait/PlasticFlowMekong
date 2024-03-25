const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

// $('section').each(function(){
//     var id = $(this).attr('id');
//     var height = $(this).height();
//     var offset = $(this).offset().top - 200;
//     var top = $(window).scrollTop();
//     if(top >= offset && top < offset + height){
//         $('.navbar ul li a').removeClass('active');
//         $('.navbar').find('[data-scroll="#' + id +'"]').addClass('active');
//     }
// });