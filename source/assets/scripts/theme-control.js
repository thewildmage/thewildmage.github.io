let parent = document.getElementById("js-theme-control");
let controls = parent.querySelectorAll("button");
let storageKey = "theme";

export function initialize() {
	controls.forEach((control) => {
		control.addEventListener("click", (event) => {
			changeTheme(event.target);
		});
	});

	let choice = localStorage.getItem(storageKey);

	if (choice) {
		controls.forEach((control) => {
			if (control.value === choice) {
				changeTheme(control);
			}
		});
	}
}

function unpressAll() {
	controls.forEach((control) => {
		toggle(control, false);
	});
}

function toggle(control, isPressed) {
	control.setAttribute("aria-pressed", isPressed);
}

function changeTheme(control) {
	let theme = control.value;

	unpressAll();
	toggle(control, true);
	localStorage.setItem(storageKey, theme);
	document.body.dataset[storageKey] = theme;
}
