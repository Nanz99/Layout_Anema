!function(p){p.fn.appear=function(r,e){var c=p.extend({one:!0},e);return this.each(function(){var t=p(this);if(t.appeared=!1,r){function a(){if(t.is(":visible")){var e=i.scrollLeft(),a=i.scrollTop(),r=t.offset(),p=r.left,n=r.top;n+t.height()>=a&&n<=a+i.height()&&p+t.width()>=e&&p<=e+i.width()?t.appeared||t.trigger("appear",c.data):t.appeared=!1}else t.appeared=!1}function e(){if(t.appeared=!0,c.one){i.unbind("scroll",a);var e=p.inArray(a,p.fn.appear.checks);0<=e&&p.fn.appear.checks.splice(e,1)}r.apply(this,arguments)}var i=p(window);c.one?t.one("appear",c.data,e):t.bind("appear",c.data,e),i.scroll(a),p.fn.appear.checks.push(a),a()}else t.trigger("appear",c.data)})},p.extend(p.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=p.fn.appear.checks.length;if(0<e)for(;e--;)p.fn.appear.checks[e]()},run:function(){p.fn.appear.timeout&&clearTimeout(p.fn.appear.timeout),p.fn.appear.timeout=setTimeout(p.fn.appear.checkAll,20)}}),p.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var r=p.fn[a];r&&(p.fn[a]=function(){var e=r.apply(this,arguments);return p.fn.appear.run(),e})})}(jQuery);