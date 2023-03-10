function calcule() {

var primeiro = document.getElementById("v1").value;
var segundo = document.getElementById("v2").value;
var terceiro = document.getElementById("v3").value;

	var resultado = (primeiro*segundo)/terceiro;
	console.log(resultado);

	var print = document.getElementById("caixa");
	print.innerHTML = "O Resultado é: " + resultado;
}