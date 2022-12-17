
/*scroll down start here*/

$(".black-btn").click(function () {
  $('html,body').animate({
    scrollTop: $(".all-need").offset().top
  },
    'slow');
});

/*scroll down end here*/
/*imag viewer start here*/

$('.min-img img').on({
  'click': function () {
    var imgLink = $(this).attr("src");
    $('.big-img').attr('src', imgLink);
  }
});


/*imag viewer end here*/


$('#datepicker-1').datepicker({
  uiLibrary: 'bootstrap4'
});
$('#timepicker-1').timepicker({
  uiLibrary: 'bootstrap4'
});
/*sliders start here*/

jQuery('#related-products').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    767: {
      items: 1,
      nav: false
    },
    991: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,

    }
  }
});


jQuery('#related-detailed-products').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    768: {
      items: 2,
      nav: false
    },
    992: {
      items: 3,
      nav: false
    },
    1200: {
      items: 4,
      nav: false,

    }
  }
});


/*sliders end here*/

/*time picker start here*/

$('#timepicker-1').timepicker({
  uiLibrary: 'bootstrap4'
});
/*

 $('#timepicker-2').timepicker({
   uiLibrary: 'bootstrap4'
 });
$('#timepicker-3').timepicker({
	uiLibrary: 'bootstrap4'
});
$('#timepicker-4').timepicker({
	uiLibrary: 'bootstrap4'
});

$('#timepicker-5').timepicker({
	uiLibrary: 'bootstrap4'
});
$('#timepicker-6').timepicker({
	uiLibrary: 'bootstrap4'
});

*/
/*time picker end here*/

/*date picker start here*/

/*

 
 
 $('#datepicker-2').datepicker({
   uiLibrary: 'bootstrap4'
 });
 
$('#datepicker-3').datepicker({
   uiLibrary: 'bootstrap4'
 });

 $('#datepicker-4').datepicker({
            uiLibrary: 'bootstrap4'
});

$('#datepicker-5').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-6').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-7').datepicker({
            uiLibrary: 'bootstrap4'
});

$('#datepicker-8').datepicker({
 uiLibrary: 'bootstrap4'
});


$('#datepicker-9').datepicker({
            uiLibrary: 'bootstrap4'
});
$('#datepicker-10').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-11').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-12').datepicker({
            uiLibrary: 'bootstrap4'
});
$('#datepicker-13').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-14').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-15').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-16').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-17').datepicker({
            uiLibrary: 'bootstrap4'
}); 
$('#datepicker-18').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-19').datepicker({
            uiLibrary: 'bootstrap4'
});*/
/*date picker end here*/


/*scroll down start here*/

$(".scroll").click(function () {
  $('html,body').animate({
    scrollTop: $(".explore").offset().top
  },
    'slow');
});

/*scroll down end here*/


/*custom accordian show hide start here*/

const handleIcon = (icon, classToRemove, classToAdd) => {
  icon.classList.remove(classToRemove);
  icon.classList.add(classToAdd);
}

const handleHint = (hint, classToRemove, classToAdd) => {
  classToRemove.length ? hint.classList.remove(classToRemove) : null;
  classToAdd.length ? hint.classList.add(classToAdd) : null;
}

const registerDivClick = (divId, iconId, hintId) => {
  let div = document.getElementById(divId);
  div.onclick = function () {
    let icon = document.getElementById(iconId);
    let hint = document.getElementById(hintId);
    setTimeout(() => {
      if (div.classList.value.includes("collapsed")) {
        handleIcon(icon, 'fa-angle-down', 'fa-angle-right');
        handleHint(hint, '', 'd-none');
      }
      else {
        handleIcon(icon, 'fa-angle-right', 'fa-angle-down')
        handleHint(hint, 'd-none', '')
      }
    }, 100)
  }
}

try {
  // registerDivClick("friendly-bet-accordian-div", "icon-friendly-bet", "hint-friendly-bet");
  // registerDivClick("pool-bet-accordian-div", "icon-pool-bet", "hint-pool-bet");
}
catch (e) {
  console.log(e)
}



/*custom accordian end hide start here*/



/*modal click change start here*/

$(function () {
  $('#submit-report').on('click', function () {
    $('#friendly-bet-report-modal').modal('hide');
    $('.submit-report-modal').modal('show');
  });

  $('#vote-cancel-modal').on('click', function () {
    $('.vote-cancel-modal').modal('hide');
    $('.vote-cancel-modal-2').modal('show');
  });

  $('.confirm-participant').on('click', function () {
    $('.confirm-part').modal('hide');
    $('.thanks-popup').modal('show');
  });

  $('.go-live-btn').on('click', function () {
    $('.go-live').modal('hide');
    $('.go-live-2').modal('show');
  });

  $('.go-live-btn-2').on('click', function () {
    $('.go-live-2').modal('hide');
    $('.go-live-3').modal('show');
  });














  $('#count-4').on('click', function () {
    $('#register-two').modal('hide');
    $('#register-three').modal('show');
  });
  $('#back-2').on('click', function () {
    $('#register-three').modal('hide');
    $('#register-two').modal('show');
  });
  $('#cancle-it').on('click', function () {
    $('.confirm-modal').modal('hide');
    $('.cancle-now').modal('show');
  });
  $('#book-operator').on('click', function () {
    $('.payment-first-step').modal('hide');
    $('.payment-second-step').modal('show');
  });


  $('#o-send-req').on('click', function () {
    $('#send-req').modal('hide');
    $('#o-send-req-2').modal('show');
  });
  $('#o-cancel-trip').on('click', function () {
    $('#cancel-trip').modal('hide');
    $('#cancel-trip-2').modal('show');
  });

  $('#o-trip').on('click', function () {
    $('#o-trip').modal('hide');
    $('#o-trip-2').modal('show');
  });

});


/*modal click change end here*/


/*ck editor start here*/

// try{

//     CKEDITOR.replace( 'editorr', {
//         customConfig: '/ckeditor_settings/config.js',
//     });
// 	CKEDITOR.editorConfig = function( config )
//     {
//         config.height = '100px';
//     };

// }
// catch(e){
//     console.log(e);
// }


/*ck editor end here*/

/*slider start here*/

// 	jQuery( '#home' ).owlCarousel( {
// 	loop: true,
// 	margin: 0,
// 	autoplay: true,
// 	autoplayTimeout: 3000,
// 	autoplayHoverPause: true,
// 	responsiveClass: true,
// 	responsive: {
// 		0: {
// 			items: 1,
// 			nav: true
// 		},
// 		600: {
// 			items: 1,
// 			nav: false
// 		},
// 		1000: {
// 			items: 1,
// 			nav: false,

// 		}
// 	}
// } );
/*slider end here*/


/*nav start here*/
$('.main-header__search__toggle').click(function () {
  $('body').addClass('search-open');
});
$('.main-header__searchbar__close').click(function () {
  $('body').removeClass('search-open');
});

!(function (n, i, e, a) {
  (n.navigation = function (t, s) {
    var o = {
      responsive: !0,
      mobileBreakpoint: 991,
      showDuration: 200,
      hideDuration: 200,
      showDelayDuration: 0,
      hideDelayDuration: 0,
      submenuTrigger: "hover",
      effect: "fade",
      submenuIndicator: !0,
      submenuIndicatorTrigger: !1,
      hideSubWhenGoOut: !0,
      visibleSubmenusOnMobile: !1,
      fixed: !1,
      overlay: !0,
      overlayColor: "rgba(0, 0, 0, 0.5)",
      hidden: !1,
      hiddenOnMobile: !1,
      offCanvasSide: "left",
      offCanvasCloseButton: !0,
      animationOnShow: "",
      animationOnHide: "",
      onInit: function () { },
      onLandscape: function () { },
      onPortrait: function () { },
      onShowOffCanvas: function () { },
      onHideOffCanvas: function () { }
    },
      r = this,
      u = Number.MAX_VALUE,
      d = 1,
      l = "click.nav touchstart.nav",
      f = "mouseenter focusin",
      c = "mouseleave focusout";
    r.settings = {};
    var t = (n(t), t);
    n(t).find(".nav-search").length > 0 &&
      n(t)
        .find(".nav-search")
        .find("form")
        .prepend(
          "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
        ),
      (r.init = function () {
        (r.settings = n.extend({}, o, s)),
          r.settings.offCanvasCloseButton &&
          n(t)
            .find(".nav-menus-wrapper")
            .prepend(
              "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
            ),
          "right" == r.settings.offCanvasSide &&
          n(t)
            .find(".nav-menus-wrapper")
            .addClass("nav-menus-wrapper-right"),
          r.settings.hidden &&
          (n(t).addClass("navigation-hidden"),
            (r.settings.mobileBreakpoint = 99999)),
          v(),
          r.settings.fixed && n(t).addClass("navigation-fixed"),
          n(t)
            .find(".nav-toggle")
            .on("click touchstart", function (n) {
              n.stopPropagation(),
                n.preventDefault(),
                r.showOffcanvas(),
                s !== a && r.callback("onShowOffCanvas");
            }),
          n(t)
            .find(".nav-menus-wrapper-close-button")
            .on("click touchstart", function () {
              r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas");
            }),
          n(t)
            .find(".nav-search-button, .nav-search-close-button")
            .on("click touchstart keydown", function (i) {
              i.stopPropagation(), i.preventDefault();
              var e = i.keyCode || i.which;
              "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                ? r.toggleSearch()
                : 9 == e && n(i.target).blur();
            }),
          n(t).find(".megamenu-tabs").length > 0 && y(),
          n(i).resize(function () {
            r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m();
          }),
          r.initNavigationMode(C()),
          r.settings.hiddenOnMobile && m(),
          s !== a && r.callback("onInit");
      });
    var h = function () {
      n(t)
        .find(".nav-submenu")
        .hide(0),
        n(t)
          .find("li")
          .removeClass("focus");
    },
      v = function () {
        n(t)
          .find("li")
          .each(function () {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
              (n(this)
                .children(".nav-dropdown,.megamenu-panel")
                .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                n(this)
                  .children("a")
                  .append(
                    "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                  ));
          });
      },
      m = function () {
        n(t).hasClass("navigation-portrait")
          ? n(t).addClass("navigation-hidden")
          : n(t).removeClass("navigation-hidden");
      };
    (r.showSubmenu = function (i, e) {
      C() > r.settings.mobileBreakpoint &&
        n(t)
          .find(".nav-search")
          .find("form")
          .fadeOut(),
        "fade" == e
          ? n(i)
            .children(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.showDelayDuration)
            .fadeIn(r.settings.showDuration)
            .removeClass(r.settings.animationOnHide)
            .addClass(r.settings.animationOnShow)
          : n(i)
            .children(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.showDelayDuration)
            .slideDown(r.settings.showDuration)
            .removeClass(r.settings.animationOnHide)
            .addClass(r.settings.animationOnShow),
        n(i).addClass("focus");
    }),
      (r.hideSubmenu = function (i, e) {
        "fade" == e
          ? n(i)
            .find(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.hideDelayDuration)
            .fadeOut(r.settings.hideDuration)
            .removeClass(r.settings.animationOnShow)
            .addClass(r.settings.animationOnHide)
          : n(i)
            .find(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.hideDelayDuration)
            .slideUp(r.settings.hideDuration)
            .removeClass(r.settings.animationOnShow)
            .addClass(r.settings.animationOnHide),
          n(i)
            .removeClass("focus")
            .find(".focus")
            .removeClass("focus");
      });
    var p = function () {
      n("body").addClass("no-scroll"),
        r.settings.overlay &&
        (n(t).append("<div class='nav-overlay-panel'></div>"),
          n(t)
            .find(".nav-overlay-panel")
            .css("background-color", r.settings.overlayColor)
            .fadeIn(300)
            .on("click touchstart", function (n) {
              r.hideOffcanvas();
            }));
    },
      g = function () {
        n("body").removeClass("no-scroll"),
          r.settings.overlay &&
          n(t)
            .find(".nav-overlay-panel")
            .fadeOut(400, function () {
              n(this).remove();
            });
      };
    (r.showOffcanvas = function () {
      p(),
        "left" == r.settings.offCanvasSide
          ? n(t)
            .find(".nav-menus-wrapper")
            .css("transition-property", "left")
            .addClass("nav-menus-wrapper-open")
          : n(t)
            .find(".nav-menus-wrapper")
            .css("transition-property", "right")
            .addClass("nav-menus-wrapper-open");
    }),
      (r.hideOffcanvas = function () {
        n(t)
          .find(".nav-menus-wrapper")
          .removeClass("nav-menus-wrapper-open")
          .on(
            "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
            function () {
              n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "none")
                .off();
            }
          ),
          g();
      }),
      (r.toggleOffcanvas = function () {
        C() <= r.settings.mobileBreakpoint &&
          (n(t)
            .find(".nav-menus-wrapper")
            .hasClass("nav-menus-wrapper-open")
            ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
            : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")));
      }),
      (r.toggleSearch = function () {
        "none" ==
          n(t)
            .find(".nav-search")
            .find("form")
            .css("display")
          ? (n(t)
            .find(".nav-search")
            .find("form")
            .fadeIn(200),
            n(t)
              .find(".nav-search")
              .find("input")
              .focus())
          : (n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(200),
            n(t)
              .find(".nav-search")
              .find("input")
              .blur());
      }),
      (r.initNavigationMode = function (i) {
        r.settings.responsive
          ? (i <= r.settings.mobileBreakpoint &&
            u > r.settings.mobileBreakpoint &&
            (n(t)
              .addClass("navigation-portrait")
              .removeClass("navigation-landscape"),
              S(),
              s !== a && r.callback("onPortrait")),
            i > r.settings.mobileBreakpoint &&
            d <= r.settings.mobileBreakpoint &&
            (n(t)
              .addClass("navigation-landscape")
              .removeClass("navigation-portrait"),
              k(),
              g(),
              r.hideOffcanvas(),
              s !== a && r.callback("onLandscape")),
            (u = i),
            (d = i))
          : (n(t).addClass("navigation-landscape"),
            k(),
            s !== a && r.callback("onLandscape"));
      });
    var b = function () {
      n("html").on("click.body touchstart.body", function (i) {
        0 === n(i.target).closest(".navigation").length &&
          (n(t)
            .find(".nav-submenu")
            .fadeOut(),
            n(t)
              .find(".focus")
              .removeClass("focus"),
            n(t)
              .find(".nav-search")
              .find("form")
              .fadeOut());
      });
    },
      C = function () {
        return (
          i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        );
      },
      w = function () {
        n(t)
          .find(".nav-menu")
          .find("li, a")
          .off(l)
          .off(f)
          .off(c);
      },
      O = function () {
        if (C() > r.settings.mobileBreakpoint) {
          var i = n(t).outerWidth(!0);
          n(t)
            .find(".nav-menu")
            .children("li")
            .children(".nav-submenu")
            .each(function () {
              n(this)
                .parent()
                .position().left +
                n(this).outerWidth() >
                i
                ? n(this).css("right", 0)
                : n(this).css("right", "auto");
            });
        }
      },
      y = function () {
        function i(i) {
          var e = n(i)
            .children(".megamenu-tabs-nav")
            .children("li"),
            a = n(i).children(".megamenu-tabs-pane");
          n(e).on("click.tabs touchstart.tabs", function (i) {
            i.stopPropagation(),
              i.preventDefault(),
              n(e).removeClass("active"),
              n(this).addClass("active"),
              n(a)
                .hide(0)
                .removeClass("active"),
              n(a[n(this).index()])
                .show(0)
                .addClass("active");
          });
        }
        if (n(t).find(".megamenu-tabs").length > 0)
          for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
            i(e[a]);
      },
      k = function () {
        w(),
          h(),
          navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
            ? n(t)
              .find(".nav-menu, .nav-dropdown")
              .children("li")
              .children("a")
              .on(l, function (e) {
                if (
                  (r.hideSubmenu(
                    n(this)
                      .parent("li")
                      .siblings("li"),
                    r.settings.effect
                  ),
                    n(this)
                      .closest(".nav-menu")
                      .siblings(".nav-menu")
                      .find(".nav-submenu")
                      .fadeOut(r.settings.hideDuration),
                    n(this).siblings(".nav-submenu").length > 0)
                ) {
                  if (
                    (e.stopPropagation(),
                      e.preventDefault(),
                      "none" ==
                      n(this)
                        .siblings(".nav-submenu")
                        .css("display"))
                  )
                    return (
                      r.showSubmenu(n(this).parent("li"), r.settings.effect),
                      O(),
                      !1
                    );
                  if (
                    (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                      "_blank" === n(this).attr("target") ||
                      "blank" === n(this).attr("target"))
                  )
                    i.open(n(this).attr("href"));
                  else {
                    if (
                      "#" === n(this).attr("href") ||
                      "" === n(this).attr("href") ||
                      "javascript:void(0)" === n(this).attr("href")
                    )
                      return !1;
                    i.location.href = n(this).attr("href");
                  }
                }
              })
            : n(t)
              .find(".nav-menu")
              .find("li")
              .on(f, function () {
                r.showSubmenu(this, r.settings.effect), O();
              })
              .on(c, function () {
                r.hideSubmenu(this, r.settings.effect);
              }),
          r.settings.hideSubWhenGoOut && b();
      },
      S = function () {
        w(),
          h(),
          r.settings.visibleSubmenusOnMobile
            ? n(t)
              .find(".nav-submenu")
              .show(0)
            : (n(t)
              .find(".submenu-indicator")
              .removeClass("submenu-indicator-up"),
              r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger
                ? n(t)
                  .find(".submenu-indicator")
                  .on(l, function (i) {
                    return (
                      i.stopPropagation(),
                      i.preventDefault(),
                      r.hideSubmenu(
                        n(this)
                          .parent("a")
                          .parent("li")
                          .siblings("li"),
                        "slide"
                      ),
                      r.hideSubmenu(
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .children("li"),
                        "slide"
                      ),
                      "none" ==
                        n(this)
                          .parent("a")
                          .siblings(".nav-submenu")
                          .css("display")
                        ? (n(this).addClass("submenu-indicator-up"),
                          n(this)
                            .parent("a")
                            .parent("li")
                            .siblings("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.showSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li"),
                            "slide"
                          ),
                          !1)
                        : (n(this)
                          .parent("a")
                          .parent("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                          void r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li"),
                            "slide"
                          ))
                    );
                  })
                : n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function (e) {
                    if (
                      (e.stopPropagation(),
                        e.preventDefault(),
                        r.hideSubmenu(
                          n(this)
                            .parent("li")
                            .siblings("li"),
                          r.settings.effect
                        ),
                        r.hideSubmenu(
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .children("li"),
                          "slide"
                        ),
                        "none" ==
                        n(this)
                          .siblings(".nav-submenu")
                          .css("display"))
                    )
                      return (
                        n(this)
                          .children(".submenu-indicator")
                          .addClass("submenu-indicator-up"),
                        n(this)
                          .parent("li")
                          .siblings("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        r.showSubmenu(n(this).parent("li"), "slide"),
                        !1
                      );
                    if (
                      (n(this)
                        .parent("li")
                        .find(".submenu-indicator")
                        .removeClass("submenu-indicator-up"),
                        r.hideSubmenu(n(this).parent("li"), "slide"),
                        "_blank" === n(this).attr("target") ||
                        "blank" === n(this).attr("target"))
                    )
                      i.open(n(this).attr("href"));
                    else {
                      if (
                        "#" === n(this).attr("href") ||
                        "" === n(this).attr("href") ||
                        "javascript:void(0)" === n(this).attr("href")
                      )
                        return !1;
                      i.location.href = n(this).attr("href");
                    }
                  }));
      };
    (r.callback = function (n) {
      s[n] !== a && s[n].call(t);
    }),
      r.init();
  }),
    (n.fn.navigation = function (i) {
      return this.each(function () {
        if (a === n(this).data("navigation")) {
          var e = new n.navigation(this, i);
          n(this).data("navigation", e);
        }
      });
    });
})(jQuery, window, document);



(function ($) {
  'use strict';

  var $window = $(window);

  if ($.fn.navigation) {
    $("#navigation1").navigation();
    $("#always-hidden-nav").navigation({
      hidden: true
    });
  }

  $window.on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

})(jQuery);
/*nav end here*/




