let parent = document.getElementById("js-theme-control");
let controls = parent.querySelectorAll("input");

let storageKey = "theme";

let choice = localStorage.getItem(storageKey);

if (choice) {
    controls.forEach((control) => {
        if (control.value === choice) {
            changeTheme(control.value);
            control.checked = true;
        }
    });
}

controls.forEach((control) =>
    control.addEventListener("change", (event) => {
        changeTheme(event.target.value);
    })
);

function changeTheme(theme) {
    localStorage.setItem(storageKey, theme);

    document.body.dataset[storageKey] = theme;
}
