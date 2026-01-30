const modalOverlay = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalGallery = document.getElementById("modalGallery");

// abrir modal
document.querySelectorAll(".ver-mais").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();

		const title = btn.dataset.title;
		const description = btn.dataset.description;
		const images = JSON.parse(btn.dataset.images);

		modalTitle.textContent = title;
		modalDescription.textContent = description;

		modalGallery.innerHTML = "";

		images.forEach((src) => {
			const img = document.createElement("img");
			img.src = src;
			img.alt = title;
			modalGallery.appendChild(img);
		});

		modalOverlay.classList.add("active");
	});
});

// fechar no X
closeModalBtn.addEventListener("click", () => {
	modalOverlay.classList.remove("active");
});

// fechar clicando fora
modalOverlay.addEventListener("click", (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove("active");
	}
});
