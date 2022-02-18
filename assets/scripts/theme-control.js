let parent = document.getElementById("js-theme-control");
let controls = parent.querySelectorAll("button");

controls.forEach((control) => {
    control.addEventListener("click", (event) => {
        changeTheme(event.target.value);
    });
});

let storageKey = "theme";
let choice = localStorage.getItem(storageKey);

if (choice) {
    controls.forEach((control) => {
        if (control.value === choice) {
            unpressAll();
            control.setAttribute("aria-pressed", "true");

            changeTheme(control.value);
        }
    });
}

function unpressAll() {
    controls.forEach((control) => {
        control.setAttribute("aria-pressed", "false");
    });
}

function changeTheme(theme) {
    localStorage.setItem(storageKey, theme);

    document.body.dataset[storageKey] = theme;
}
