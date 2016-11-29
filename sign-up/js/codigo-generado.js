$('#codigoGenerado').append('<h3>LAB - </h3><h3 id="tresDigitos">' + Math.floor(Math.random() * 899 + 100) + '</h3>');

var tresDigitos = $('#tresDigitos').val();

$('.btn-next').on('click', function(e){
	window.localStorage.setItem('codigo3digitos', tresDigitos);
});