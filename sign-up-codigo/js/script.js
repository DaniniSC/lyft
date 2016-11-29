var codigoIngresado = $('#input-codigo').val();
var codigoDado = window.localStorage.getItem('codigo3digitos');
var validarCodigo = $('#seccionValidarCod');

$('.btn-next').on('click', function(ev){
	if (codigoIngresado != codigoDado) {
		$('validarCodigo').append('<span>El código ingresado no es válido</span>');
		break;
	}
})