/*function submitForm() {
    let form = document.getElementById("mainForm");
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerHTML = "Please wait...";
    Pageclip.form(form, {
        onResponse: function (error, response) {
            window.location.href = "google.com";
        }
    });
}*/
let form = document.getElementById("mainForm");
Pageclip.form(form, {
    onResponse: function (error, response) {
        window.location.href = "https://google.com";
    }
});