/* Slider */
$(".content__slider").owlCarousel({
  loop: true,
  margin: 10,
  navText: [
    "<img src='images/icons/left-arrow.svg'>",
    "<img src='images/icons/right-arrow-angle.svg'>",
  ],
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
/* Slider */
$(".magazine-container").owlCarousel({
  loop: true,
  margin: 10,
  navText: [
    "<img src='images/icons/left-arrow.svg'>",
    "<img src='images/icons/right-arrow-angle.svg'>",
  ],
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
/* Slider */
$(".category-slider").owlCarousel({
  loop: true,
  margin: 5,
  items: 6,
  navText: [
    "<img src='images/icons/left-arrow.svg'>",
    "<img src='images/icons/right-arrow-angle.svg'>",
  ],
  nav: true,
  responsive: {
    0: {
      items: 3,
      margin: 5,
    },
    991: {
      margin: 5,
  items: 6,
    }
  }
});


$(".filter-drop").click(function () {
  $(this).addClass('active')
  $('.filter-overlay').addClass('active')
  $(this).find(".popup-filter").addClass('active');	
});
$('.filter').click(function (e) {
 if(e.target.classList == 'filter active'){
   $(this).removeClass('active')
 }
 else{
  $(this).addClass('active')
 }
})
/* закрыт филтр */
$('.filter-overlay').click(function(e) {
  if ($(e.target).closest('.popup-filter').length == 0) {
    $('.filter-overlay').removeClass('active')
    $('.popup-filter').removeClass('active');	
    $('body').removeClass('overflow')
  }
});
/* закрыт button */
$('.filter-container .cancel').click(function(e) {
  $('.filter-overlay').removeClass('active')
    $('.filter').removeClass('active')	
    $('body').removeClass('overflow')
});


/* Показать ещё  */
$(function () {
  $(".result-col").slice(0, 6).show();
  $(".load-more").on("click", function (e) {
    e.preventDefault();
    $(".result-col:hidden").slice(0, 3).slideDown();
  });
  
  
});
$(function () {
  $(".feedback-box").slice(0, 6).show();
  $(".view-all-feedbacks").on("click", function (e) {
    e.preventDefault();
    $(".feedback-box:hidden").slice(0, 3).slideDown();
  });
  
  
});


$("#adress-widget-input").suggestions({
  token: "1b1460f6213fab1ddfbcd005b3bae5e0000ca164",
  type: "ADDRESS",
  onSelect: function(suggestion) {
      console.log(suggestion);
  }
});
$("#adress-widget-input-mob").suggestions({
  token: "1b1460f6213fab1ddfbcd005b3bae5e0000ca164",
  type: "ADDRESS",
  onSelect: function(suggestion) {
      console.log(suggestion);
  }
});
$("#checkout-address").suggestions({
  token: "1b1460f6213fab1ddfbcd005b3bae5e0000ca164",
  type: "ADDRESS",
  onSelect: function(suggestion) {
      console.log(suggestion);
  }
});

/* <===== Открыт Виджетов =====> */

$(".adress").click(function () {
  $(this).addClass('none');
  $('.overlay-widgets').addClass('active');
  $('.search').addClass('none');
  $('.search__widget').removeClass('active');
  $('.adress__widget').addClass('active');
})
$(".search").click(function () {
  $(this).addClass('none');
  $('.overlay-widgets2').addClass('active');
  $('.adress').addClass('none');
  $('.search__widget').addClass('active');
})
$(".search-mob").click(function () {
  $('.search-mobile-widget').addClass('active');
})
$(".adress-mob").click(function () {
  $('.adress-mobile-widget').addClass('active');
})


$('.overlay-widgets').click(function(e) {
  if ($(e.target).closest('.adress__widget').length == 0) {
    $('.overlay-widgets').removeClass('active');
		$('.adress__widget').removeClass('active');
    $(".adress").removeClass('none')
    $('.search').removeClass('none');					
  }
});	
$('.overlay-widgets2').click(function(e) {
  if ($(e.target).closest('.search__widget').length == 0) {
    $('.overlay-widgets2').removeClass('active');
		$('.search__widget').removeClass('active');
    $(".adress").removeClass('none')
    $('.search').removeClass('none');					
  }
});	



// закрыт по клику на кнопку

$('.close-adress-widget').click(function (e) {
  let input = $('.adress-input');
  if(input.val() == 0){
    $('.overlay-widgets').removeClass('active');
		$('.adress__widget').removeClass('active');
    $(".adress").removeClass('none')
    $('.search').removeClass('none');
  }else{
    input.val('')
  }
})

$('.close-search-widget').click(function (e) {
  let input2 = $('.search-input');
  if(input2.val() == 0){
    $('.overlay-widgets2').removeClass('active');
		$('.search__widget').removeClass('active');
    $(".adress").removeClass('none');
    $('.search').removeClass('none');
  }else{
    input2.val('')
  }
})

$('.close-search-widget-mob').click(function (e) {
  let input2 = $('.search-mob-input');
  if(input2.val() == 0){
    $('.search-mobile-widget').removeClass('active')
  }else{
    input2.val('')
  }
})

$('.close-adress-widget-mob').click(function (e) {
  let input2 = $('.adress-mob-input');
  if(input2.val() == 0){
    $('.adress-mobile-widget').removeClass('active')
  }else{
    input2.val('')
  }
})

// number of

$("#sign-input").mask("+7 (999) 999-99-99");
$("#checkout-phone").mask("+7 (999) 999-99-99");
$(".profile-phone").mask("+7 (999) 999-99-99");


// Клик по ссылке "Закрыть".
$('.sign-popup-close').click(function() {
  $(this).parents('.popup-fade').fadeOut();
  return false;
}); 

$('.sign-in').click(function() {
  $('.popup-fade').fadeIn();
  return false;
});	
$('.sign-mob').click(function() {
  $('.popup-fade').fadeIn();
});	

$('.sign-popup-fade').click(function(e) {
  if ($(e.target).closest('.popup-sign').length == 0) {
    $(this).fadeOut();					
  }
});


$('.open-basket').click(function () {
  $('.category-slider').removeClass('active')
  $('.basket').addClass('active')
  $('body').addClass('overflow')
})

$('.close-basket').click(function () {
  $('.basket').removeClass('active')
  $('body').removeClass('overflow')
})



$('.product-bottom-button').click(function() {
  $('.restaurant-popup').fadeIn();
  $('body').addClass('overflow')
  return false;
});

$('.restaurant-popup-close').click(function() {
  $(this).parents('.restaurant-popup').fadeOut();
  $('body').removeClass('overflow')
  return false;
});        

// Клик по фону, но не по окну.
$('.restaurant-popup').click(function(e) {
  if ($(e.target).closest('.popup-restaurant').length == 0) {
    $(this).fadeOut();					
  }
});	

$('.product-bottom-button').click(function() {
  $('.restaurant-popup').fadeIn();
  $('body').addClass('overflow')
  return false;
});

$('.restaurant-popup-close').click(function() {
  $(this).parents('.restaurant-popup').fadeOut();
  $('body').removeClass('overflow')
  return false;
});        

// Клик по фону, но не по окну.
$('.restaurant-popup').click(function(e) {
  if ($(e.target).closest('.popup-restaurant').length == 0) {
    $(this).fadeOut();					
  }
});	


$('.restaurant .tags .tag-1').click(function() {
  $('.tag-overlay').fadeIn();
  $('.tag-popup-1').fadeIn();
  
  return false;
});

$('.restaurant .tags button').click(function() {
  $('.tag-popup-1').fadeOut();
  $('.tag-overlay').fadeOut();
  return false;
});  

// Клик по фону, но не по окну.
$('.tag-overlay').click(function(e) {
  if ($(e.target).closest('.tag-popup-1').length == 0) {
    $('.tag-popup-1').fadeOut();
  $('.tag-overlay').fadeOut();					
  }
});	


$('.restaurant .tags .tag-2').click(function() {
  $('.tag-overlay').fadeIn();
  $('.tag-popup-2').fadeIn();
  
  return false;
});
$('.restaurant .tags .tag-3').click(function() {
  $('.tag-overlay').fadeIn();
  $('.tag-popup-3').fadeIn();
  
  return false;
});

$('.restaurant .tags button').click(function() {
  $('.tag-popup-2').fadeOut();
  $('.tag-overlay').fadeOut();
  return false;
});   
$('.restaurant .tags button').click(function() {
  $('.tag-popup-3').fadeOut();
  $('.tag-overlay').fadeOut();
  return false;
});   

// Клик по фону, но не по окну.
$('.tag-overlay').click(function(e) {
  if ($(e.target).closest('.tag-popup').length == 0) {
    $('.tag-popup-2').fadeOut();
  $('.tag-overlay').fadeOut();					
  }
});	
$('.tag-overlay').click(function(e) {
  if ($(e.target).closest('.tag-popup').length == 0) {
    $('.tag-popup-3').fadeOut();
  $('.tag-overlay').fadeOut();					
  }
});	

$('.clear-popup-open').click(function() {
  $('.clear-popup-fade').fadeIn();
  return false;
});	

$('.clear-popup-close').click(function() {
  $(this).parents('.clear-popup-fade').fadeOut();
  return false;
});		

$(document).keydown(function(e) {
  if (e.keyCode === 27) {
    e.stopPropagation();
    $('.clear-popup-fade').fadeOut();
  }
});

$('.clear-popup-fade').click(function(e) {
  if ($(e.target).closest('.clear-popup').length == 0) {
    $(this).fadeOut();					
  }
});




$('.restaurant .categoryies .category-link').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#' + $(this).data('scroll')).offset().top - 170 + 'px'
  })
})
$('.contact-menu-a').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('#' + $(this).data('scroll')).offset().top - 70 + 'px'
  })
})


window.addEventListener('scroll', (e) =>{
  let scroll = this.scrollY;
  if(scroll >= 450){
    $('.category-slider').addClass('active')
  }else{
    $('.category-slider').removeClass('active')
  }
})


class tabs {
  constructor(argument){
      $(argument).find('.tab-content').not('.active').hide();
      $(argument).find('.tab-item').click(function () {
          $(argument).find('.tab-item').removeClass('active').eq($(this).index()).addClass('active');
          $(argument).find('.tab-content').hide().eq($(this).index()).show()
      });
      
  }
}

var wrap = $('.checkout-wrapper');
for(let i of wrap){
  i = new tabs(i);
}
var wrap2 = $('.history-wrapper');
for(let i of wrap2){
  i = new tabs(i);
}