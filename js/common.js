$(function() {

	$('#navigation').slimmenu(
	{
		resizeWidth: '768',
		collapserTitle: 'Busines Theme',
		animSpeed: 'medium',
		easingEffect: null,
		indentChildren: false,
		childrenIndenter: '&nbsp;'
	});

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

