const multiplier = {
    translate: 0.1,
    rotate: 0.01,
  };
  
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
  });
  
  function calculateWheel() {
    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const r = window.innerWidth * 0.3 - (rect.x + rect.width * 0.3);
      let ty =
        Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;
  
      if (ty < 0) {
        ty = 0;
      }
      const transformOrigin = r < 0 ? "left top" : "right top";
      // slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
      slide.style.transformOrigin = transformOrigin;
    });
  }
  
  function raf() {
    requestAnimationFrame(raf);
    calculateWheel();
  }
  
  raf();
  
  
  
  
  $(".card").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
         $(".nav-tabs li.active").next('li').find('a').tab('show');
       },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
         $(".nav-tabs li.active").prev('li').find('a').tab('show');
       },
  });
  
  


   /* ===============================  counterUp =============================== */


   $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
  
  
  
  /* ===============================  counterUp =============================== */



  