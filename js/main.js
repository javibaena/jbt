
/* flickity */

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  wrapAround:true,
  freeScroll: true,
  contain: true,
// disable previous & next buttons and dots
   prevNextButtons: true,
   pageDots: false,
});
/* fin flickiy */



//scroll
var slideUp = {
   distance: '40%',
   origin: 'bottom',
   opacity: null,
   delay:500
};

ScrollReveal().reveal('.slide-up', slideUp);


/* fin scroll */

/* cursor */

var cursor = document.getElementById('cursor');
var movida = document.querySelector('.movida');
console.log(movida);

document.addEventListener('mousemove' , function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})
/* fin  cursor */




/* cajas */
var cajaback = document.querySelector('.cajaback');
var back = document.querySelector('.back');
var me = document.querySelector('.me');
var cierre = document.querySelector('.cierre');
var cierre2 = document.querySelector('.cierre2');
var contacAbout = document.querySelector('.contacAbout');
var cajaabout = document.querySelector('.cajaabout');
var contacAbout = document.querySelector('.contacAbout');
var marcosuperior1 = document.querySelector('.marcosuperior1');
var cierre3= document.querySelector('.cierre3');
var cierre4 = document.querySelector('.cierre4');




console.log("cajaback");
console.log("back");
console.log("cierre");
console.log("contacAbout");
console.log("marcosuperior1");


back.addEventListener('click', function () {
   
    cajaback.classList.add("nBlock");
   
   
 });

 cierre.addEventListener('click', function () {
    cajaback.classList.remove("nBlock");
   
 });
 
 me.addEventListener('click', function () {
    cajaabout.classList.add("nBlock");
   
 });

 cierre2.addEventListener('click', function () {
    cajaabout.classList.remove("nBlock");
   
});

cierre3.addEventListener('click', function () {
   cajaback.classList.remove("nBlock");
  
});

cierre4.addEventListener('click', function () {
   cajaabout.classList.remove("nBlock");
  
});


/* fin cajas */











 

 


