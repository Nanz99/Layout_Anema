!function(e){e.fn.list_ticker=function(f){f=e.extend({speed:4e3,effect:"slide"},f);return this.each(function(){var t=e(this),i=t.children();i.not(":first").hide(),setInterval(function(){(i=t.children()).not(":first").hide();var e=i.eq(0),n=i.eq(1);"slide"==f.effect?(e.slideUp(),n.slideDown(function(){e.remove().appendTo(t)})):"fade"==f.effect&&e.fadeOut(function(){n.fadeIn(),e.remove().appendTo(t)})},f.speed)})}}(jQuery);