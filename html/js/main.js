
/* Ocultar y mostrar elemento*/
function mostrar(elemId) {
	var elem = document.getElementById(elemId);
	if (elem.className =="oculto"){
		elem.className ="";
		return "activo";
	} else{
		elem.className ="oculto"
		return "oculto";
	}
}

/* Ocultar y mostrar menu*/
function mostrarMenu() {
	var elem = document.getElementById('nav-menu-top');
	if (elem.className =="oculto"){
		elem.className ="";
		return "activo";
	} else{
		elem.className ="oculto"
		return "oculto";
	}
}

/* jquery para el Scroll */
$(document).ready(function() {

	function filterPath(string) {
		return string
			.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
  	}
	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');
 
	function scrollableElement(els) {
		for (var i = 0, argLength = arguments.length; i <argLength; i++) {
			var el = arguments[i],
			$scrollElement = $(el);
			if ($scrollElement.scrollTop()> 0) {
				return el;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop()> 0;
				$scrollElement.scrollTop(0);
				if (isScrollable) {
					return el;
				}
			}
		}
		return [];
	}
	
	$('nav a[href*=#]').click( function(event) {
		$.scrollTo(
			$(this).attr("href"),{
					duration: 200,
					offset: { 'top':-0.15*$(window).height() }
				}
		);
	});

	$(".page").waypoint({
		handler: function(event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');

			$('nav a').removeClass("active");
			active_link.addClass("active");

		},
		offset: '25%'
	})

});
