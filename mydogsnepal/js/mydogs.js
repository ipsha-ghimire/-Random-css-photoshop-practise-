$('[data-toggle="counterUp"]').counterUp({
    delay: 15,
    time: 1500
});

$(document).ready(function(){
    $(".myfirstca").owlCarousel();
  });

  AOS.init(
      {
      
         duration:1000,
        
      }
  );
let preloader=document.getElementById('loader');
 function loadingloader()
{
preloader.style.display='none';
}
