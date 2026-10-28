/*需要計算高度時*/
// (function(){ 
// 	var pageInit=function(){
// 		$window=$(window);
// 		$wp=$(".overview-wrapper");
// 		$rwf=$("#Helios-width-full");
// 		$sso=$("#sectionOverview");
// 		$oldsso=$("#old-sectionOverview");
// 		$sso_b=$("#special-sectionOverview");

// 		$window.load(pageResize); //works in chrome
// 		$window.resize(pageResize);
// 	}
// 	var pageResize=function(){
// 		$sso.css({"height":$rwf.height()});
// 		$oldsso.css({"height":$rwf.height()});
// 		$sso_b.css({"height":$rwf.height()});
// 	};
// 	$(document).ready(function($) {
// 		pageInit();	
// 	});

// })();


/*計算寬度與置中*/
var App = App || {};
App.utils = App.utils || {};

$(function() {
    var a = $(window),
        c = $(this).width();
    a.on("resize.hackBootstrap", function() {
        c = a.width();
        var e = App.responsive ? c : Math.max(1E3, c);
        $(".m-wrap").css({
            "margin-left": ($("#special-sectionOverview, #sectionOverview, #old-sectionOverview").width() - e) / 2,
            width: e
        });
       
        $(".html").css("overflow-x", 1E3 < c ? "hidden" : "")
    }).trigger("resize.hackBootstrap");
    if ($.scrollTo) a.on("scroll.hackBootstrap", function() {
        1E3 < c 
    });
});
App.responsive = !0;


// $(function(){
//     $('.back-to-top').click(function(){
//         var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
//         $body.animate({
//                 scrollTop: 0
//         }, 800);
//     });
// });

$(function() {
    $('.ESC_nav').navScroll({
        mobileDropdown: false,
        mobileBreakpoint: 768,
        scrollSpy: true
    });

    $('#ESC-nav ul li a').on('click', function() {
        $('#ESC-nav ul li').removeClass('on');
        $(this).parent().addClass('on');
    });

    // mTop = $('#ROGPugioII-header')[0].offsetTop;
    // sTop = $(window).scrollTop();
    // result = mTop - sTop;
    // console.log(result);
});


//Scroll indicate
// $(window).load(function(){
//     $(window).scroll(function(){
//         var a = $(window).scrollTop();
//         if(a > 1000){
//             $(".back-to-top").fadeIn();
//         }else{
//             $(".back-to-top").fadeOut();
//         }
//     });
// });



// $(function() {
//     var a = "Helios",
//         b = {
//             hd_draggable: function() {
//                 var b = $("#" + a + "-width-full .screen");
//                 var t = $(".ctr_line").find('img');
//                 var desktop = $(".desktop");
//                 b.find(".ctr_line").draggable({
//                     axis: "x",
//                     scroll: !1,
//                     drag: function(a, c) {
//                         var d = c.position.left,
//                             e = b.width();
//                         b.find(".desktop .left").width( (d + t.width()/2) / (desktop.width()/100) + "%")
//                     }
//                 });
//             },
//         };
//     b.hd_draggable()
// });


// $(function(){
//     /**/
//     $("#beforeafter").twentytwenty({
//         default_offset_pct: 0.6458
//     });
// });
