/*jslint browser: true*/
/*global $, console, window*/
(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })

$(function () {
  const template = {
    win: $(window),
    navbar: $(".nav-bar")
  }
  $(document).ready(function () {
    "use strict"
    template.win.on('scroll', function () {
      var navBarOne = $('.bg-gray'),
        navBarMenu = $(".nav-menu-bar"),
        tourFixedNav = $(".price-mobile-box")
      if (template.win.scrollTop() > 50) {
        navBarOne.css("display", "none")
        navBarMenu.addClass("stickyNav")
        tourFixedNav.addClass("stickyTour")
      } else {
        navBarOne.css("display", "block")
        navBarMenu.removeClass("stickyNav")
        tourFixedNav.removeClass("stickyTour")
      }
    });
    /*========== Start Scroll For Navigation Menu ==========*/




    //// COLLAPSED MENU CLOSE ON CLICK
    template.navbar.on("click", ".navbar-collapse", function (e) {
      if ($(e.target).is(".navsLink a, .dropdown-menu .dropdown-item")) {
        $(this).collapse("hide")
      }
    })
  })

})


})()




$(document).ready(function () { 
  var $dropdownLinks = $('.dropdown-li > a'); // Target the anchor tag within the dropdown
  var $window = $(window);

  function handleDropdownClick(e) {
    var $dropdownParent = $(this).parent();

    // Check if screen width is less than 992px (mobile)
    if ($window.width() < 992) {
      e.preventDefault(); // Disable default link behavior

      // Toggle dropdown visibility for mobile
      $dropdownParent.toggleClass('show');

      // Close other open dropdowns
      $dropdownLinks.each(function () {
        var $otherParent = $(this).parent();
        if ($otherParent[0] !== $dropdownParent[0] && $otherParent.hasClass('show')) {
          $otherParent.removeClass('show');
        }
      });
    }
  }

  $dropdownLinks.on('click', handleDropdownClick);

  // Close dropdown if clicked outside (for mobile)
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.dropdown-li').length) {
      $('.dropdown-li.show').removeClass('show');
    }
  });

  // Handle window resize event to reset dropdowns for larger screens
  $window.on('resize', function () {
    if ($window.width() >= 992) { 
      $('.dropdown-li').removeClass('show'); // Close dropdowns when resizing to desktop
    }
  });

  // Add close functionality for mobile view
  $('.close-nav-btn').on('click', function () {
    $('.navbar-collapse.offcanvas-collapse').removeClass('show open'); // Correct selector to close the navbar
  });
});



