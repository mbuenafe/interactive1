$(document).ready(function(){

$('#circle').on('click', function() {
			$('#bar').toggleClass('clicked');
			$('#bar2').toggleClass('clicked');
			$('#bar3').toggleClass('clicked');
			$('#bar4').toggleClass('clicked');
			$('#bar5').toggleClass('clicked');
			$('#bar6').toggleClass('clicked');
			$('#bar7').toggleClass('clicked');
			$('#bar8').toggleClass('clicked');
});


var colors = [,"The Tor network is a group of volunteer-operated servers that allows people to improve their privacy and security on the Internet. Tor's users employ this network by connecting through a series of virtual tunnels rather than making a direct connection, thus allowing both organizations and individuals to share information over public networks without compromising their privacy. Along the same line, Tor is an effective censorship circumvention tool, allowing its users to reach otherwise blocked destinations or content. ",
,"Tor can also be used as a building block for software developers to create new communication tools with built-in privacy features. Individuals use Tor to keep websites from tracking them and their family members, or to connect to news sites, instant messaging services, or the like when these are blocked by their local Internet providers. Tor's hidden services let users publish web sites and other services without needing to reveal the location of the site. Individuals also use Tor for socially sensitive communication: chat rooms and web forums for rape and abuse survivors, or people with illnesses.",
,"Journalists use Tor to communicate more safely with whistleblowers and dissidents. Non-governmental organizations (NGOs) use Tor to allow their workers to connect to their home website while they're in a foreign country, without notifying everybody nearby that they're working with that organization.Groups such as Indymedia recommend Tor for safeguarding their members' online privacy and security. Activist groups like the Electronic Frontier Foundation (EFF) recommend Tor as a mechanism for maintaining civil liberties online.",
,"Corporations use Tor as a safe way to conduct competitive analysis, and to protect sensitive procurement patterns from eavesdroppers. They also use it to replace traditional VPNs, which reveal the exact amount and timing of communication. Which locations have employees working late? Which locations have employees consulting job-hunting websites? Which research divisions are communicating with the company's patent lawyers?",
,"A branch of the U.S. Navy uses Tor for open source intelligence gathering, and one of its teams used Tor while deployed in the Middle East recently. Law enforcement uses Tor for visiting or surveilling web sites without leaving government IP addresses in their web logs, and for security during sting operations. The variety of people who use Tor is actually part of what makes it so secure. Tor hides you among the other users on the network, so the more populous and diverse the user base for Tor is, the more your anonymity will be protected.",,"  ",];
var n = 0;
var type =

$('#circle').click(function() {
	// updates the body's html with a value from the colors array
	$('p').html(colors[n]);
	$('body').removeClass();
	$('body').addClass('bg-'+n);

	// increments n
	n++;

	// if n is > 5, reset n
	if(n > 11	) {
		n = 0;
	}

	if(n == 2) {
		$('.screen-1').addClass('show');
		;
	}
	// if(n == 3) {
	// 	$('.screen-1').removeClass('show');
	// 	;
	// }
	if(n == 4) {
		$('.screen-2').addClass('show');

		;
	}
	// if(n == 5) {
	// 	$('.screen-2').removeClass('show');
	// 	;
	// }
	if(n == 6) {
		$('.screen-3').addClass('show');

		;
	}
	// if(n == 7) {
	// 	$('.screen-3').removeClass('show');
	// 	;
	// }

	if(n == 8) {
		$('.screen-4').addClass('show');

		;
	}
	// if(n == 9) {
	// 	$('.screen-4').removeClass('show');
	//
	// 	;
	// }
	if(n == 10) {
		$('.screen-5').addClass('show');

		;
	}
	if(n == 11) {
		$('.screen-5').removeClass('show');
		$('.screen-1').removeClass('show');
		$('.screen-2').removeClass('show');
		$('.screen-3').removeClass('show');
		$('.screen-4').removeClass('show');
		;
	}
});

$("#circle").click(function() {
        setTimeout(
            function() {
                $('p').html(colors[n]);
            },
            1000);
    });


});
