// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
	init : function(){
	 this.topJS();
	 this.idxSlider();
     this.idxCase();
     this.idxParallax();
	},
 	topJS: function() {
 		 $(window).on('load', function(){
 		 	new WOW().init();
 		 });
         $('.box02 .parallax').parallax({imageSrc: 'images/b02_bg01.jpg'});
         $(window).bind("load resize", function () {
           var vW = $(window).width();
           if (vW > 640) {
             $('.holiday').removeClass('flag');
             $('.holiday').removeClass('active');
             $('.style02').removeClass('active');
             $('.style02').removeAttr('style');
           } else {
             $('.holiday').addClass('flag');
           }
         });
        $(window).bind("load", function () {
           if($('.holiday').length > 0){
            $('.holiday .date').click(function() {
                var _this = $(this);
                _this.parent().toggleClass('active');
                if (_this.parent().hasClass('flag')) {
                    _this.parent().next('.style02').stop().slideToggle();
                    _this.parent().next('.style02').toggleClass('active');
                }
            });
           }
        });
 	},
 	idxSlider: function() {
        $('.h-slider').slick({
            autoplay: true,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            centerMode: true,
            variableWidth: true
        });
        $('.idx-main-slider').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            // centerMode: true,
            // variableWidth: true
        });
 	},
    idxCase : function(){
            $.ajax({
            'url' : 'case/_custom/',
            'dataType' : 'jsonp',
            'success' : function(json){
                $.each(json.data, function(i,val){
                    var title = val.title.length < 60 ? val.title : val.title.substr(0,60)+'...';

                    var $li_ind = $('<li/>').html(
                    '<a href="case/' + val.url + '"><dl><dt>'+ val.category_name +'</dt><dd>' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2)  + '</dd></dl><p>' + title + '</p></a>'
                    );
                    $li_ind.appendTo('.b05-list');
                });
                }
            });
        },
        idxParallax : function(){
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 40
            });
        }
	 };
	 ojbect.init();
});