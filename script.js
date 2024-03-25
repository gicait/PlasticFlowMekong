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


    $('section').each(function(){
        var top = $(window).scrollTop();
        var id = $(this).attr('id');
        var height = $(this).height();
        var top = $(this).offset().top - 200;
        if(top >= offset && top < height + offset){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#' + id +'"]').addClass('active');
        }
    });