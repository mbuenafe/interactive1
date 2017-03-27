// replace images when the page loads
$('img').attr('src', 'http://i.dailymail.co.uk/i/pix/2015/09/15/13/2C554FAA00000578-3235219-image-m-70_1442319933551.jpg');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/Josef Albers/g,'ajhsbkas') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('gradient');
});

$('#hplogo').addClass('rotate');
