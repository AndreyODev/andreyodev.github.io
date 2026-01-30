document.addEventListener("DOMContentLoaded", () => {
	const subtitulo = document.querySelector(".subtitulo");
	const texto = "Eu sou Full Stack.";

	let indice = 0;
	const velocidade = 120;
	const pausa = 1500;

	function digitar() {
		subtitulo.innerHTML = "";

		const parteNormal = "Desenvolvedor ";
		const parteVerde = "Full Stack";
		const parteFim = ".";

		if (indice <= parteNormal.length) {
			subtitulo.textContent = parteNormal.slice(0, indice);
		} else if (indice <= parteNormal.length + parteVerde.length) {
			const letrasVerdes = parteVerde.slice(0, indice - parteNormal.length);
			subtitulo.innerHTML = parteNormal + `<span class="verde">${letrasVerdes}</span>`;
		} else if (indice <= parteNormal.length + parteVerde.length + parteFim.length) {
			subtitulo.innerHTML =
				parteNormal +
				`<span class="verde">${parteVerde}</span>` +
				parteFim.slice(0, indice - parteNormal.length - parteVerde.length);
		}

		indice++;
		if (indice <= parteNormal.length + parteVerde.length + parteFim.length) {
			setTimeout(digitar, velocidade);
		} else {
			setTimeout(() => {
				indice = 0;
				digitar();
			}, pausa);
		}
	}

	digitar();
});
