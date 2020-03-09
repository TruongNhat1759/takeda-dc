// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.iconMenu();			
			this.Gnavi();			
	  },
	  //totop
	  toTop: function(){
		  $("#totop").hide();
		  $(window).scroll(function(){
			  if($(this).scrollTop() > 100){				  
				  $("#totop").fadeIn();
			  }
			  else{
				  $("#totop").fadeOut();				  
			  }
		  });
		  $("#totop a").click(function(){
			 $('body,html').animate({
				scrollTop:0 
			 }, 500);
			 return false;
		  });
	  },
	  //smoothScroll
	  smoothScroll : function(){
		$('a[href^="#"]').click(function(){
			var wWidth = $(window).width();
				if ( $( $(this).attr('href')).length ) {
					var p = $( $(this).attr('href') ).offset();
					if(wWidth <= 640){
						$('html,body').animate({ scrollTop: p.top - 90}, 500);
						$('.menu-icon').removeClass('active');
						$('.submenu').removeAttr('style');
						$('#gnavi').slideUp();
					} else {
						$('html,body').animate({ scrollTop: p.top - 20}, 500);
					}
				}
			return false;
		});
		},
	  // Anchor scroll
	  anchorScroll : function(){
	  	$(window).load(function(){
		 var wWidth = $(window).width();
		 var hash1= location.hash;
		 var $root = $('html, body');
		 var top01 = $(hash1).offset(); 
			if(wWidth <= 640){
			 if(hash1!==""){ 	  
			  $root.animate({ scrollTop:top01.top - 90}, 500);  
			 }    
			} else {
			 if(hash1!==""){  		  
			  $root.animate({ scrollTop:top01.top - 20}, 500);  
			 }    
			}
		});			
			},
		Gnavi: function () {
		  $('.over').mouseenter(function () {
		    if ($(this).hasClass('flag')) {
		      return false;
		    } else {
		      $(this).find('.submenu').stop().slideDown();
		    }
		  });
		  $('.over').mouseleave(function () {
		    if ($(this).hasClass('flag')) {
		      return false;
		    } else {
		      $(this).find('.submenu').stop().slideUp();
		    }
		  });
		  $('.menu-icon').click(function () {
		    if ($(this).hasClass('active')) {
		      $('.menu-icon').removeClass('active');
		      $('#gnavi').stop().slideToggle();
		    } else {
		      $(this).toggleClass('active');
		      $('#gnavi').stop().slideToggle('fast');
		    }
		  });
		  $(window).bind("load resize", function () {
              var vW = $(window).width();
              if (vW > 640) {
					$('.menu-icon').removeClass('active');
					$('.over').removeClass('flag');
					$('.submenu').removeAttr('style');
              } else {
					$('.menu-icon').removeClass('active');
					$('#gnavi').removeAttr('style');
					$('.over').addClass('flag');
					$('.submenu').removeAttr('style');
				}
          });
          //gnavi fixed on pc
          $(window).bind("load scroll", function () {
            var vW = $(window).width(),
              wS = $(window).scrollTop(),
              hC = $('.h-content').offset().top,
              gH = $('.gnv-fixed').height() + 50;
            if (vW > 640) {
              if (wS > hC) {
                $('.gnv-fixed').addClass('fixed');
                $('.h-bottom').css('margin-top', gH);
              } else {
                $('.gnv-fixed').removeClass('fixed');
                $('.h-bottom').css('margin-top', '');
              }
            }
          });
		},
	 //sp gnavi
	 iconMenu : function(){	
			 $('.icon-menu').click(function() {		
			 $(this).toggleClass('active');
			 $('#sp-gnavi').slideToggle();	
			});
		
		}	
  };
  
  obj.init();
});


