var paises = [
	{
		nombre: "Argentina",
		codigoTel: "+54",
		bandera: "img/ar.png"
	},
	{
		nombre: "Chile",
		codigoTel: "+56",
		bandera: "img/cl.png"
	},
	{
		nombre: "Colombia",
		codigoTel: "+57",
		bandera: "img/col.png"
	},
	{
		nombre: "Perú",
		codigoTel: "+51",
		bandera: "img/pe.jpg"
	},
	{
		nombre: "Venezuela",
		codigoTel: "+58",
		bandera: "img/ven.jpg"
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