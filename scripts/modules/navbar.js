const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");
const menuIcon = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");

function setActiveLink() {
	const scrollPosition = window.scrollY + window.innerHeight / 2;

	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
			current = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
	});
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// ===== Toggle Menu =====
menuIcon.addEventListener("click", () => {
	menu.classList.toggle("active");
	menuIcon.classList.toggle("bx-x");
});

// ===== Close menu on click =====
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.remove("active");
		menuIcon.classList.remove("bx-x");
	});
});
