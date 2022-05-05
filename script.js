// As constantes abaixo serão associadas aos textos contidos nas classes
// referentes às áreas de texto criadas no HTML
const textoEntrada = document.querySelector(".texto-entrada");
const mensagem = document.querySelector(".texto-mensagem");

function btnEncriptar() {
	
	// A constante textoEncriptado vai receber o conteudo do textoEntrada
	// já encriptado pela função encriptar.

	const textoEncriptado = encriptar(textoEntrada.value);
	mensagem.value = textoEncriptado;
}

function encriptar(texto) {
			// minha solução
			// encontrar as letras a,e,i,o,u em texto
			// percorrer todo o texto, copiando os caracteres para texto_encriptado
			// sempre que encontrar uma das letras abaixo, substituir pela palavra correspondente

			/*substituir
			a por ai
			e por enter
			i por imes
			o por ober
			u por ufat e armazenar em texto_encriptado*/

			// string.length retorna o tamanho da string
			// string.substring(início,final) retorna um pedaço da string 
			texto_encriptado = "";
			tamanho = texto.length;
			for (i=0;i<tamanho;i++) {
				letra = texto.substring(i,i+1);
				substituto = "";
				if (letra == "a") substituto = "ai"; 
				if (letra == "e") substituto = "enter";
				if (letra == "i") substituto = "imes"; 
				if (letra == "o") substituto = "ober"; 
				if (letra == "u") substituto = "ufat"; 
				
				if (substituto != "") {
					texto_encriptado = texto_encriptado + substituto;
				} else {
					texto_encriptado = texto_encriptado + letra;
				}
			} 
			return texto_encriptado;

		}

/* função encriptar pela solução apresentada no live coding
function encriptar(stringEncriptada){
	let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
	// transforma todas as letras em minúsculas:
	stringEncriptada = stringEncriptada.toLowerCase();
	for (i=0; i < matrizCodigo.length; i++){
		//A condição abaixo testa se a string passada como parâmetro contém a letra da posição (i,0)
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			//A atribuição abaixo substitui todas as ocorrências da letra (i,0) pela string (i,1)
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return stringEncriptada;

}
*/