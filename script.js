function hatterDivLetrehozasa() {
	const div = document.createElement("div");
	let idoito = null;

	div.className = "hatter-div";

	div.addEventListener("click", () => {
		div.classList.add("megvaltozott");

		if (idoito !== null) {
			clearTimeout(idoito);
		}

		idoito = setTimeout(() => {
			div.classList.remove("megvaltozott");
			idoito = null;
		}, 2000);
	});

	return div;
}

const tarolo = document.querySelector("#tarolo");
const hatterDiv = hatterDivLetrehozasa();

tarolo.appendChild(hatterDiv);