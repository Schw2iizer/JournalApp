$(document).ready(function(){

	// animationHover("#test", "hinge");
	// animationClick(".test1", "zoomOutRight");


function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);     
            },
            function(){   
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}

// $(function(){
$('nav a').hover(
    function(){
            var dataClass = $(this).data('hover');
            $('nav').doTimeout('navAnimate', 250, function(){
                console.log(dataClass);
                $(this).removeAttr('class').addClass(dataClass);
            });
        },
        function(){
            var current = $('.currentPage').data('hover');
            $('nav').doTimeout('navAnimate', 250, function(){
                $(this).removeAttr('class').addClass(current);
            });
    });  


(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);
	

});    