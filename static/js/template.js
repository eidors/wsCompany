if("undefined"==typeof jQuery){throw new Error("template requires jQuery")}function w3_open(){document.getElementById("mySidebar").style.display="block",document.getElementById("myOverlay").style.display="block"}function w3_close(){document.getElementById("mySidebar").style.display="none",document.getElementById("myOverlay").style.display="none"}var loader;function loadNow(a){a<=0?displayContent():(loader.style.opacity=a,window.setTimeout(function(){loadNow(a-0.05)},50))}function displayContent(){loader.style.display="none"}!function(G){var q="Masteradmin.layout",B={slimscroll:!1,resetHeight:!0},C=".wrapper",y=".content-wrapper",F=".layout-boxed",b=".main-footer",E=".main-header",z=".sidebar",j=".control-sidebar",k=".sidebar-menu",H=".main-header .logo",x="fixed",v="hold-transition",D=function(a){this.options=a,this.bindedResize=!1,this.activate()};function A(a){return this.each(function(){var d=G(this),e=d.data(q);if(!e){var c=G.extend({},B,d.data(),"object"==typeof a&&a);d.data(q,e=new D(c))}if("string"==typeof a){if(void 0===e[a]){throw new Error("No method named "+a)}e[a]()}})}D.prototype.activate=function(){this.fix(),this.fixSidebar(),G("body").removeClass(v),this.options.resetHeight&&G("body, html, "+C).css({height:"auto","min-height":"100%"}),this.bindedResize||(G(window).resize(function(){this.fix(),this.fixSidebar(),G(H+", "+z).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),G(k).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),G(k).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},D.prototype.fix=function(){G(F+" > "+C).css("overflow","hidden");var c=G(b).outerHeight()||0,h=G(E).outerHeight()+c,a=G(window).height(),l=G(z).height()||0;if(G("body").hasClass(x)){G(y).css("min-height",a-c)}else{var g;a>=l?(G(y).css("min-height",a-h),g=a-h):(G(y).css("min-height",l),g=l);var i=G(j);void 0!==i&&i.height()>g&&G(y).css("min-height",i.height())}},D.prototype.fixSidebar=function(){G("body").hasClass(x)?this.options.slimscroll&&void 0!==G.fn.slimScroll&&(G(z).slimScroll({destroy:!0}).height("auto"),G(z).slimScroll({height:G(window).height()-G(E).height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})):void 0!==G.fn.slimScroll&&G(z).slimScroll({destroy:!0}).height("auto")};var w=G.fn.layout;G.fn.layout=A,G.fn.layout.Constuctor=D,G.fn.layout.noConflict=function(){return G.fn.layout=w,this},G(window).on("load",function(){A.call(G("body"))})}(jQuery),function(I){var w="Masteradmin.pushmenu",D={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},E=".sidebar-collapse",A=".main-sidebar",H=".content-wrapper",j=".sidebar-form .form-control",G='[data-toggle="push-menu"]',B=".sidebar-mini",q="",v="sidebar-collapse",J="sidebar-open",z="",x="expanded.pushMenu",F="collapsed.pushMenu",C=function(a){this.options=a,this.init()};function y(a){return this.each(function(){var c=I(this),d=c.data(w);if(!d){var b=I.extend({},D,c.data(),"object"==typeof a&&a);c.data(w,d=new C(b))}"toggle"==a&&d.toggle()})}C.prototype.init=function(){I(H).on(function(){I(window).width()<=this.options.collapseScreenSize&&I("body").hasClass(J)&&this.close()}.bind(this)),I(j).on(function(a){a.stopPropagation()})},C.prototype.toggle=function(){var a=I(window).width(),b=!I("body").hasClass(v);a<=this.options.collapseScreenSize&&(b=I("body").hasClass(J)),b?this.close():this.open()},C.prototype.open=function(){I(window).width()>this.options.collapseScreenSize?I("body").removeClass(v).trigger(I.Event(x)):I("body").addClass(J).trigger(I.Event(x))},C.prototype.close=function(){I(window).width()>this.options.collapseScreenSize?I("body").addClass(v).trigger(I.Event(F)):I("body").removeClass(J+" "+v).trigger(I.Event(F))},C.prototype.expandOnHover=function(){I(A).hover(function(){I("body").is(B+E)&&I(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){I("body").is(q)&&this.collapse()}.bind(this))},C.prototype.collapse=function(){setTimeout(function(){I("body").removeClass(z).addClass(v)},this.options.expandTransitionDelay)};var k=I.fn.pushMenu;I.fn.pushMenu=y,I.fn.pushMenu.Constructor=C,I.fn.pushMenu.noConflict=function(){return I.fn.pushMenu=k,this},I(document).on("click",G,function(a){a.preventDefault(),y.call(I(this),"toggle")}),I(window).on("load",function(){y.call(I(G))})}(jQuery),function(C){var k="Masteradmin.tree",x={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},y=".treeview",v=".treeview-menu",B=".menu-open, .active",b='[data-widget="tree"]',A=".active",w="menu-open",g="tree",j="collapsed.tree",D="expanded.tree",q=function(a,c){this.element=a,this.options=c,C(this.element).addClass(g),C(y+A,this.element).addClass(w),this._setUpListeners()};function m(a){return this.each(function(){var c=C(this);if(!c.data(k)){var d=C.extend({},x,c.data(),"object"==typeof a&&a);c.data(k,new q(c,d))}})}q.prototype.toggle=function(i,d){var f=i.next(v),h=i.parent(),c=h.hasClass(w);h.is(y)&&(this.options.followLink&&"#"!=i.attr("href")||d.preventDefault(),c?this.collapse(f,h):this.expand(f,h))},q.prototype.expand=function(d,f){var h=C.Event(D);if(this.options.accordion){var c=f.siblings(B),i=c.children(v);this.collapse(i,c)}f.addClass(w),d.slideDown(this.options.animationSpeed,function(){C(this.element).trigger(h)}.bind(this))},q.prototype.collapse=function(a,d){var c=C.Event(j);a.find(B).removeClass(w),d.removeClass(w),a.slideUp(this.options.animationSpeed,function(){a.find(B+" > "+y).slideUp(),C(this.element).trigger(c)}.bind(this))},q.prototype._setUpListeners=function(){var a=this;C(this.element).on("click",this.options.trigger,function(c){a.toggle(C(this),c)})};var z=C.fn.tree;C.fn.tree=m,C.fn.tree.Constructor=q,C.fn.tree.noConflict=function(){return C.fn.tree=z,this},C(window).on("load",function(){C(b).each(function(){m.call(C(this))})})}(jQuery),function(C){var k="Masteradmin.controlsidebar",x={slide:!0},y=".control-sidebar",v='[data-toggle="control-sidebar"]',B=".control-sidebar-open",b=".control-sidebar-bg",A=".wrapper",w=".layout-boxed",g="control-sidebar-open",j="collapsed.controlsidebar",D="expanded.controlsidebar",q=function(c,a){this.element=c,this.options=a,this.hasBindedResize=!1,this.init()};function m(a){return this.each(function(){var d=C(this),e=d.data(k);if(!e){var c=C.extend({},x,d.data(),"object"==typeof a&&a);d.data(k,e=new q(d,c))}"string"==typeof a&&e.toggle()})}q.prototype.init=function(){C(this.element).is(v)||C(this).on("click",this.toggle),this.fix(),C(window).resize(function(){this.fix()}.bind(this))},q.prototype.toggle=function(a){a&&a.preventDefault(),this.fix(),C(y).is(B)||C("body").is(B)?this.collapse():this.expand()},q.prototype.expand=function(){this.options.slide?C(y).addClass(g):C("body").addClass(g),C(this.element).trigger(C.Event(D))},q.prototype.collapse=function(){C("body, "+y).removeClass(g),C(this.element).trigger(C.Event(j))},q.prototype.fix=function(){C("body").is(w)&&this._fixForBoxed(C(b))},q.prototype._fixForBoxed=function(a){a.css({position:"absolute",height:C(A).height()})};var z=C.fn.controlSidebar;C.fn.controlSidebar=m,C.fn.controlSidebar.Constructor=q,C.fn.controlSidebar.noConflict=function(){return C.fn.controlSidebar=z,this},C(document).on("click",v,function(a){a&&a.preventDefault(),m.call(C(this),"toggle")})}(jQuery),function(C){var k="Masteradmin.boxwidget",x={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},y=".box",v=".collapsed-box",B=".box-body",b=".box-footer",A=".box-tools",w="collapsed-box",g="collapsed.boxwidget",j="expanded.boxwidget",D="removed.boxwidget",q=function(c,a){this.element=c,this.options=a,this._setUpListeners()};function m(a){return this.each(function(){var d=C(this),e=d.data(k);if(!e){var c=C.extend({},x,d.data(),"object"==typeof a&&a);d.data(k,e=new q(d,c))}if("string"==typeof a){if(void 0===e[a]){throw new Error("No method named "+a)}e[a]()}})}q.prototype.toggle=function(){!C(this.element).is(v)?this.collapse():this.expand()},q.prototype.expand=function(){var a=C.Event(j),c=this.options.collapseIcon,d=this.options.expandIcon;C(this.element).removeClass(w),C(this.element).find(A).find("."+d).removeClass(d).addClass(c),C(this.element).find(B+", "+b).slideDown(this.options.animationSpeed,function(){C(this.element).trigger(a)}.bind(this))},q.prototype.collapse=function(){var a=C.Event(g),c=this.options.collapseIcon,d=this.options.expandIcon;C(this.element).find(A).find("."+c).removeClass(c).addClass(d),C(this.element).find(B+", "+b).slideUp(this.options.animationSpeed,function(){C(this.element).addClass(w),C(this.element).trigger(a)}.bind(this))},q.prototype.remove=function(){var a=C.Event(D);C(this.element).slideUp(this.options.animationSpeed,function(){C(this.element).trigger(a),C(this.element).remove()}.bind(this))},q.prototype._setUpListeners=function(){var a=this;C(this.element).on("click",this.options.collapseTrigger,function(c){c&&c.preventDefault(),a.toggle()}),C(this.element).on("click",this.options.removeTrigger,function(c){c&&c.preventDefault(),a.remove()})};var z=C.fn.boxWidget;C.fn.boxWidget=m,C.fn.boxWidget.Constructor=q,C.fn.boxWidget.noConflict=function(){return C.fn.boxWidget=z,this},C(window).on("load",function(){C(y).each(function(){m.call(C(this))})})}(jQuery),function(k){var c="Masteradmin.todolist",f={iCheck:!1,onCheck:function(){},onUnCheck:function(){}},g={data:'[data-widget="todo-list"]'},d="done",j=function(i,a){this.element=i,this.options=a,this._setUpListeners()};function b(a){return this.each(function(){var l=k(this),e=l.data(c);if(!e){var m=k.extend({},f,l.data(),"object"==typeof a&&a);l.data(c,e=new j(l,m))}if("string"==typeof e){if(void 0===e[a]){throw new Error("No method named "+a)}e[a]()}})}j.prototype.toggle=function(a){a.parents(g.li).first().toggleClass(d),a.prop("checked")?this.check(a):this.unCheck(a)},j.prototype.check=function(a){this.options.onCheck.call(a)},j.prototype.unCheck=function(a){this.options.onUnCheck.call(a)},j.prototype._setUpListeners=function(){var a=this;k(this.element).on("change ifChanged","input:checkbox",function(){a.toggle(k(this))})};var h=k.fn.todoList;k.fn.todoList=b,k.fn.todoList.Constructor=j,k.fn.todoList.noConflict=function(){return k.fn.todoList=h,this},k(window).on("load",function(){k(g.data).each(function(){b.call(k(this))})})}(jQuery),function(k){var c="Masteradmin.directchat",f='[data-widget="chat-pane-toggle"]',g=".direct-chat",d="direct-chat-contacts-open",j=function(a){this.element=a};function b(a){return this.each(function(){var l=k(this),e=l.data(c);e||l.data(c,e=new j(l)),"string"==typeof a&&e.toggle(l)})}j.prototype.toggle=function(a){a.parents(g).first().toggleClass(d)};var h=k.fn.directChat;k.fn.directChat=b,k.fn.directChat.Constructor=j,k.fn.directChat.noConflict=function(){return k.fn.directChat=h,this},k(document).on("click",f,function(a){a&&a.preventDefault(),b.call(k(this),"toggle")}),k(".inner-content-div").slimScroll({height:"200"}),k(".sm-scrol").slimScroll({height:"250"}),k(".direct-chat-messages").slimScroll({height:"420"}),k(".chat-box-one").slimScroll({height:"550"}),k(".chat-box-one2").slimScroll({height:"580"}),k(".chat-box-one-side").slimScroll({height:"650"}),k(".chat-box-one-side2").slimScroll({height:"500"}),k(".chat-box-one-side3").slimScroll({height:"685"}),k(".notification-side").slimScroll({height:"325"}),k(".suggestions-side").slimScroll({height:"300"}),k(".events-side").slimScroll({height:"265"}),k(".pat-div").slimScroll({height:"204"}),k(".demo-panel-bx").slimScroll({height:"auto"}),k(".search-box a, .search-box .app-search .srh-btn").on("click",function(){k(".app-search").toggle(200)}),k(document).on("click",".box-btn-close",function(){k(this).parents(".box").fadeOut(600,function(){1==k(this).parent().children().length?k(this).parent().remove():k(this).remove()})}),k(document).on("click",".box-btn-slide",function(){k(this).toggleClass("rotate-180").parents(".box").find(".box-content, .box-body").slideToggle()}),k(document).on("click",".box-btn-maximize",function(){k(this).parents(".box").toggleClass("box-maximize").removeClass("box-fullscreen")}),k(document).on("click",".box-btn-fullscreen",function(){k(this).parents(".box").toggleClass("box-fullscreen").removeClass("box-maximize")}),k(document).on("click",'a[href="#"]',function(a){a.preventDefault()}),k(".open-left-block").on("click",function(){k(".left-block").toggleClass("open-panel"),k(".open-left-block").toggleClass("mdi-menu")}),k(document).on("click",".file-browser",function(){var a=k(this);if(a.hasClass("form-control")){setTimeout(function(){a.closest(".file-group").find('[type="file"]').trigger("click")},300)}else{var i=a.closest(".file-group").find('[type="file"]');i.on("click",function(e){e.stopPropagation()}),i.trigger("click")}}),k(document).on("change",'.file-group [type="file"]',function(){for(var a=k(this)[0],m=a.files.length,p="",l=0;l<m;++l){p+=a.files.item(l).name+", "}p=p.substr(0,p.length-2),k(this).closest(".file-group").find(".file-value").val(p).text(p).focus()}),k(document).on("change",".custom-file-input",function(){var a=k(this).val().split("\\").pop();k(this).next(".custom-file-control").attr("data-input-value",a)}),k(".custom-file-control:not([data-input-value])").attr("data-input-value","Choose file..."),k(".todo-list").todoList({onCheck:function(){window.console.log(k(this),"The element has been checked")},onUnCheck:function(){window.console.log(k(this),"The element has been unchecked")}}),k("#thismonth").sparkline([8,5,4,7,9,7,10,9],{type:"bar",height:"35",barWidth:"4",resize:!0,barSpacing:"4",barColor:"#843cf7"}),k("#lastyear").sparkline([8,5,4,7,9,7,10,9],{type:"bar",height:"35",barWidth:"4",resize:!0,barSpacing:"4",barColor:"#ec4b71"}),k("#chat-circle, #chat-box-toggle, #chat-popup").click(function(){k("#chat-box-body").toggleClass("show")})}(jQuery),$(function(){$('[data-provide~="fullscreen"]').on("click",function(){screenfull.toggle($("#container")[0])})}),function(a){a('.sidebar-menu li a[href="'+window.location.pathname.split("/").pop()+'"]').parent().addClass("active"),a(".sidebar-menu li.active").parents("li").addClass("active")}(jQuery),function(a){a('.sm li a[href="'+window.location.pathname.split("/").pop()+'"]').parent().addClass("current"),a(".sm li.current").parents("li").addClass("current")}(jQuery),$(function(){feather.replace()}),function(j){var c=c||{},f=document.querySelectorAll.bind(document);function g(k){var a="";for(var i in k){k.hasOwnProperty(i)&&(a+=i+":"+k[i]+";")}return a}var d={duration:750,show:function(D,q){if(2===D.button){return !1}var z=q||this,C=document.createElement("div");C.className="waves-ripple",z.appendChild(C);var i,B,x,k,o,E=(k={top:0,left:0},o=(i=z)&&i.ownerDocument,B=o.documentElement,void 0!==i.getBoundingClientRect&&(k=i.getBoundingClientRect()),x=function(l){return null!==(a=l)&&a===a.window?l:9===l.nodeType&&l.defaultView;var a}(o),{top:k.top+x.pageYOffset-B.clientTop,left:k.left+x.pageXOffset-B.clientLeft}),w=D.pageY-E.top,v=D.pageX-E.left,A="scale("+z.clientWidth/100*10+")";"touches" in D&&(w=D.touches[0].pageY-E.top,v=D.touches[0].pageX-E.left),C.setAttribute("data-hold",Date.now()),C.setAttribute("data-scale",A),C.setAttribute("data-x",v),C.setAttribute("data-y",w);var y={top:w+"px",left:v+"px"};C.className=C.className+" waves-notransition",C.setAttribute("style",g(y)),C.className=C.className.replace("waves-notransition",""),y["-webkit-transform"]=A,y["-moz-transform"]=A,y["-ms-transform"]=A,y["-o-transform"]=A,y.transform=A,y.opacity="1",y["-webkit-transition-duration"]=d.duration+"ms",y["-moz-transition-duration"]=d.duration+"ms",y["-o-transition-duration"]=d.duration+"ms",y["transition-duration"]=d.duration+"ms",y["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",y["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",y["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",y["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",C.setAttribute("style",g(y))},hide:function(u){h.touchup(u);var o=this,q=(o.clientWidth,null),i=o.getElementsByClassName("waves-ripple");if(!(i.length>0)){return !1}var s=(q=i[i.length-1]).getAttribute("data-x"),p=q.getAttribute("data-y"),k=q.getAttribute("data-scale"),m=350-(Date.now()-Number(q.getAttribute("data-hold")));m<0&&(m=0),setTimeout(function(){var a={top:p+"px",left:s+"px",opacity:"0","-webkit-transition-duration":d.duration+"ms","-moz-transition-duration":d.duration+"ms","-o-transition-duration":d.duration+"ms","transition-duration":d.duration+"ms","-webkit-transform":k,"-moz-transform":k,"-ms-transform":k,"-o-transform":k,transform:k};q.setAttribute("style",g(a)),setTimeout(function(){try{o.removeChild(q)}catch(e){return !1}},d.duration)},m)},wrapInput:function(q){for(var a=0;a<q.length;a++){var l=q[a];if("input"===l.tagName.toLowerCase()){var m=l.parentNode;if("i"===m.tagName.toLowerCase()&&-1!==m.className.indexOf("waves-effect")){continue}var k=document.createElement("i");k.className=l.className+" waves-input-wrapper";var p=l.getAttribute("style");p||(p=""),k.setAttribute("style",p),l.className="waves-button-input",l.removeAttribute("style"),m.replaceChild(k,l),k.appendChild(l)}}}},h={touches:0,allowEvent:function(i){var a=!0;return"touchstart"===i.type?h.touches+=1:"touchend"===i.type||"touchcancel"===i.type?setTimeout(function(){h.touches>0&&(h.touches-=1)},500):"mousedown"===i.type&&h.touches>0&&(a=!1),a},touchup:function(a){h.allowEvent(a)}};function b(a){var i=function(m){if(!1===h.allowEvent(m)){return null}for(var k=null,l=m.target||m.srcElement;null!==l.parentNode;){if(!(l instanceof SVGElement)&&-1!==l.className.indexOf("waves-effect")){k=l;break}l=l.parentNode}return k}(a);null!==i&&(d.show(a,i),"ontouchstart" in j&&(i.addEventListener("touchend",d.hide,!1),i.addEventListener("touchcancel",d.hide,!1)),i.addEventListener("mouseup",d.hide,!1),i.addEventListener("mouseleave",d.hide,!1),i.addEventListener("dragend",d.hide,!1))}c.displayEffect=function(a){"duration" in (a=a||{})&&(d.duration=a.duration),d.wrapInput(f(".waves-effect")),"ontouchstart" in j&&document.body.addEventListener("touchstart",b,!1),document.body.addEventListener("mousedown",b,!1)},c.attach=function(a){"input"===a.tagName.toLowerCase()&&(d.wrapInput([a]),a=a.parentNode),"ontouchstart" in j&&a.addEventListener("touchstart",b,!1),a.addEventListener("mousedown",b,!1)},j.Waves=c,document.addEventListener("DOMContentLoaded",function(){c.displayEffect()},!1)}(window),document.addEventListener("DOMContentLoaded",function(){loader=document.getElementById("loader"),loadNow(1)}),new PerfectScrollbar(".multinav-scroll");var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(a){return new bootstrap.Tooltip(a)});