$(document).ready(function(){

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