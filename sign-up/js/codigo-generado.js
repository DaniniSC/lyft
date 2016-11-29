$('#codigoGenerado').append('<span>LAB - </span><span id="tresDigitos">' + Math.floor(Math.random() * 899 + 100) + '</span>');

var tresDigitos = $('#tresDigitos');

$('.btn-next').on('click', function(e){
	window.localStorage.setItem('codigo3digitos', tresDigitos);
});