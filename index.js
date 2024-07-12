///////////////////////////// Nav bar auto collapse /////////////////////////
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

///////////////////////////// Auto type animation /////////////////////////
var typed = new Typed(".auto-typed", {
    strings: ["Contetnt Writer^1000", "Blogger^1000", "Social Media Manager^1000"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
  });

///////////////////////////// Nav link scroll offset /////////////////////////
var divId;
$('.nav-link').on("click", function(){    
    divId = $(this).attr('href');
$('html, body').animate({
    scrollTop: $(divId).offset().top - 50
    }, 100);
  });

 ///////////////////////////// Active menu /////////////////////////
 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('.nav-link');
 window.onscroll = () => {
     sections.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 290;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');
         if(top >= offset && top < offset + height) {
             navLinks.forEach(links => {
                 links.classList.remove('activ');
                 document.querySelector('.nav-link[href*=' + id + ']').classList.add('activ');
             });
         };
     });
 };


