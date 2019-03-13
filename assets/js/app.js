$('ul').on('click',  'li', function() {
	$(this).toggleClass('strike-through');
});

$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
	if (event.which === 13) {
		let toDo = $(this).val();
		$(this).val('');
		$('ul').append(`<li><span><i class='fa fa-trash'></i></span> ${toDo}</li>`)
	};
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle(100, 'linear');
});