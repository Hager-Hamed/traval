
/* ===============================  accordion =============================== */

   /*-----------  accordion ---------*/
   const items = document.querySelectorAll(".accordion button");
    
   function toggleAccordion() {
     const itemToggle = this.getAttribute('aria-expanded');
     
     for (i = 0; i < items.length; i++) {
       items[i].setAttribute('aria-expanded', 'false');
     }
     
     if (itemToggle == 'false') {
       this.setAttribute('aria-expanded', 'true');
     }
   }
   
   items.forEach(item => item.addEventListener('click', toggleAccordion));
   

   // زر فتح جميع العناصر
document.getElementById('expand-all').addEventListener('click', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.classList.add('show'); // إضافة كلاس "show" لإظهار المحتوى
  });

  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.classList.remove('collapsed'); // إزالة كلاس "collapsed" لتغيير حالة الزر
  });
});

// زر إغلاق جميع العناصر
document.getElementById('collapse-all').addEventListener('click', function () {
  const accordions = document.querySelectorAll('.accordion-collapse');
  accordions.forEach(accordion => {
    accordion.classList.remove('show'); // إزالة كلاس "show" لإخفاء المحتوى
  });

  const buttons = document.querySelectorAll('.accordion-button');
  buttons.forEach(button => {
    button.classList.add('collapsed'); // إضافة كلاس "collapsed" لتغيير حالة الزر
  });
});


/* ===============================   accordion =============================== */





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


