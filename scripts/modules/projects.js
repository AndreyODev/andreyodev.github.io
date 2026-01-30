const cards = document.querySelectorAll(".projects__card");
const btnNext = document.querySelector(".arrow-right");
const btnPrev = document.querySelector(".arrow-left");
const progressContainer = document.querySelector(".carousel-progress");

let indice = 0;
let cardsPorSlide = 3;
let intervalo;

// DEFINE QUANTOS CARDS FICAM VISÍVEIS
function atualizarQuantidade() {
	if (window.innerWidth <= 480) {
		cardsPorSlide = 1;
	} else if (window.innerWidth <= 677) {
		cardsPorSlide = 1;
	} else if (window.innerWidth >= 678 && window.innerWidth <= 1062) {
		cardsPorSlide = 2;
	} else {
		cardsPorSlide = 3;
	}
}

function criarBarras() {
	progressContainer.innerHTML = "";

	const totalSteps = cards.length - cardsPorSlide + 1;

	for (let i = 0; i < totalSteps; i++) {
		const bar = document.createElement("div");
		bar.classList.add("progress-bar");
		if (i === indice) bar.classList.add("active");
		progressContainer.appendChild(bar);
	}
}

function atualizarBarras() {
	const bars = document.querySelectorAll(".progress-bar");
	bars.forEach((bar) => bar.classList.remove("active"));
	if (bars[indice]) bars[indice].classList.add("active");
}

function render() {
	cards.forEach((card) => (card.style.display = "none"));

	for (let i = indice; i < indice + cardsPorSlide; i++) {
		if (cards[i]) cards[i].style.display = "flex";
	}

	atualizarBarras();
}

btnNext.addEventListener("click", () => {
	indice++;

	if (indice > cards.length - cardsPorSlide) {
		indice = 0;
	}

	render();
	resetInterval();
});

btnPrev.addEventListener("click", () => {
	indice--;

	if (indice < 0) {
		indice = cards.length - cardsPorSlide;
	}

	render();
	resetInterval();
});

function iniciarIntervalo() {
	intervalo = setInterval(() => {
		indice++;

		if (indice > cards.length - cardsPorSlide) {
			indice = 0;
		}

		render();
	}, 4000);
}

function resetInterval() {
	clearInterval(intervalo);
	iniciarIntervalo();
}

window.addEventListener("resize", () => {
	atualizarQuantidade();
	indice = 0;
	criarBarras();
	render();
});

atualizarQuantidade();
criarBarras();
render();
iniciarIntervalo();
