$('#opcionPais a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_pulsado = $(this).find('span').html();

	// lo guardo en localStorage
	window.localStorage.setItem('paisActual', pais_pulsado);
});