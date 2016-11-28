var paises = [
	{
		nombre: "Argentina",
		codigoTel: "+54",
		bandera: "img/ar.png",
		nDigitos: 10
	},
	{
		nombre: "Chile",
		codigoTel: "+56",
		bandera: "img/cl.png",
		nDigitos: 9
	},
	{
		nombre: "Colombia",
		codigoTel: "+57",
		bandera: "img/col.png",
		nDigitos: 10
	},
	{
		nombre: "Perú",
		codigoTel: "+51",
		bandera: "img/pe.jpg",
		nDigitos: 9
	},
	{
		nombre: "Venezuela",
		codigoTel: "+58",
		bandera: "img/ven.jpg",
		nDigitos: 10
	}
];

var paisActual = window.localStorage.getItem("paisActual") || "Chile";

var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == paisActual) {
		pais = paises[i];
		break;
	}
}

$('#seleccionarPais img').attr('src', pais.bandera);
$('#codigoTel').html(pais.codigoTel);
$('#nTelefono').attr('maxlength', pais.nDigitos);

$('.btn-next').on('click', function(){
	alert("LAB - " + Math.floor(Math.random() * 899 + 100));
});