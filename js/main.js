$(function(){

	var msg = [
		"I like programming",
		"My favorite hobbie is programming",
		"I do my codes with love",
		"Technology is life",
		"Games = Programming", 
		"This texts are awesome",
		"Programation is life",
		"Please scroll down",
		"if(reader.isReading() == true) ^500{ Write.more() }^500",
		"RichTheLord is the best developer",
		"I want to work in hypixel network",
		"Rembember, I'm RichTheLord",
		"I have the cheapest prices",
		"http://RichTheLord.com^100",
		"I want a new computer",
		"Apple are the best"
	];

	$(".txts").typed({
            strings: msg,
            typeSpeed: 20,
            loop: true,
            backDelay: 600
	});
});

function isVisible(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(document).ready(function(){
 
	$(window).scroll(function(){
		if(isVisible("#social") || isVisible(".footer")){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});
