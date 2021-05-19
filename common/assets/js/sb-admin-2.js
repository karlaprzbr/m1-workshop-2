// (function ($) {
//   "use strict"; // Start of use strict

//   // Toggle the side navigation
//   $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
//     $("body").toggleClass("sidebar-toggled");
//     $(".sidebar").toggleClass("toggled");
//     if ($(".sidebar").hasClass("toggled")) {
//       $('.sidebar .collapse').collapse('hide');
//     };
//   });

//   // Close any open menu accordions when window is resized below 768px
//   $(window).resize(function () {
//     if ($(window).width() < 768) {
//       $('.sidebar .collapse').collapse('hide');
//     };

//     // Toggle the side navigation when window is resized below 480px
//     if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
//       $("body").addClass("sidebar-toggled");
//       $(".sidebar").addClass("toggled");
//       $('.sidebar .collapse').collapse('hide');
//     };
//   });

//   // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
//   $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
//     if ($(window).width() > 768) {
//       var e0 = e.originalEvent,
//         delta = e0.wheelDelta || -e0.detail;
//       this.scrollTop += (delta < 0 ? 1 : -1) * 30;
//       e.preventDefault();
//     }
//   });

//   // Scroll to top button appear
//   $(document).on('scroll', function () {
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance > 100) {
//       $('.scroll-to-top').fadeIn();
//     } else {
//       $('.scroll-to-top').fadeOut();
//     }
//   });

//   // Smooth scrolling using jQuery easing
//   $(document).on('click', 'a.scroll-to-top', function (e) {
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//       scrollTop: ($($anchor.attr('href')).offset().top)
//     }, 1000, 'easeInOutExpo');
//     e.preventDefault();
//   });

// })(jQuery); // End of use strict



// trying to fix dropdown issue
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

//Basket function

$("#edit_form").validate();

function add_to_basket(rid) {
  $.ajax({
    url: 'add_to_basket.php',
    data: "rid=" + rid + "&act=add",
    type: 'post',
    success: function (result) {
      $('#b_' + rid + '_add').hide();
      $('#b_' + rid + '_rem').show();
    }
  });
}

function rem_from_basket(rid) {
  $.ajax({
    url: 'add_to_basket.php',
    data: "rid=" + rid + "&act=rem",
    type: 'post',
    success: function (result) {
      $('#b_' + rid + '_rem').hide();
      $('#b_' + rid + '_add').show();
    }
  });
}

function clear_elt(element_id) {
  $('#' + element_id).val('');
}
$(function () {
  $(".dp").datepicker({
    dateFormat: "dd/mm/yy",
  });
});