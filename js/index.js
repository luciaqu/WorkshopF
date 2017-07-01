//variables slider
var slideimgs = ['../img/slider1.jpg','../img/slider2.jpg','../img/slider3.jpg','../img/slider4.jpg'];
var imagen = $('#slider-img');
var k=0;
var interval; 
//fin variables slider

$(document).ready(function(){
	console.log('Ready Ready Ready');
	//log-in
	$('#msj').hide(); // oculto el div
	$('#ingresar').on ('click', function(){
		user = $('#username').val();
		pass = $('#password').val();

		if (user == 'pepe' && pass == '123456'){
			$('#msj').show();
			$('#msj').append('<p>Welcome!</p>');
		} else {
			$('#msj').show();
			$('#msj').append('<p>Failed login.</p>');
		}
	});
	//llama funcion slider
	slider();

	$('#sliderlink').on('click', function(){
	
	slide();
	
	});//fin funciones slider
});//FIN DOC READY

//funciones slider
function slide() {
$(imagen).fadeOut('slow', function() {

	if (k==(slideimgs.length-1)) {
		k=0
	} else {k++};

	console.log(slideimgs[k]);	
	$(imagen).attr('src',slideimgs[k]).fadeIn('slow');

	});
};


function slider() {
	interval = setInterval(slide, 800);

	$('#sliderlink').on({
		mouseover: function(){
		clearInterval(interval);		
		},

		mouseleave: function(){
		slider();		
		}
	});

};//fin funciones slider