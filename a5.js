$(document).ready(function(){

	var $animation_elements = $('.animation-element');
	var $window = $(window);

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view(){
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_height + window_top_position);

		$.each($animation_elements, function(){
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_height + element_top_position);

			if((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		})
	}

});

var a5Brand = new Vue({
  el:'#brand',
  data: {
    title: 'Audi',
  }
});

var performanceSection = new Vue({
	el: '#performance',
	data: {
		startingAt: '$46,350',
		hP: '252 HP',
		kmPerHour: '5.9 Sec'
	}
});

var timedShowPage;

function loadPage() {
    timedShowPage = setTimeout(showPage, 3000);
}

function showPage() {
  // document.getElementById("preload").style.display = "none";
  // document.getElementById("mainContent").style.display = "block";

  document.getElementById("preload").style.opacity = 0;
  document.getElementById("mainContent").style.opacity = 1;
  document.getElementById("preload").style.zIndex = 0;
  document.getElementById("mainContent").style.overflowY = 'scroll';
}

function openMorePerformance() {
	document.getElementById('morePerformanceContent').style.display = 'block';
}

function closeMorePerformance() {
	document.getElementById('morePerformanceContent').style.display = 'none';
}

function openOuterAspectsModal() {
	document.getElementById('outerAspectsModal').style.display = 'block';
}

function closeOuterAspectsModal() {
	document.getElementById('outerAspectsModal').style.display = 'none';
}

function openSideModal() {
  document.getElementById('sideModal').style.display = "block";
}

function openTopModal() {
	document.getElementById('topModal').style.display = 'block'
}

function openFrontBackModal() {
	document.getElementById('frontBackModal').style.display = 'block';
}

function closeSideModal() {
  document.getElementById('sideModal').style.display = 'none';
}

function closeTopModal() {
	document.getElementById('topModal').style.display = 'none';
}

function closeFrontBackModal() {
	document.getElementById('frontBackModal').style.display = 'none';
}

function openInnerBeautyText() {
	document.getElementById('innerBeautyTextModal').style.display = 'block';
}

function closeInnerBeautyText() {
	document.getElementById('innerBeautyTextModal').style.display = 'none';
}