/*function submitForm() {
    let form = document.getElementById("mainForm");
    let formData = new FormData(form)
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerHTML = "Please wait...";

}*/

mainForm.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("https://send.pageclip.co/cjFMs15YG7ofCuKMitQLnI65CCFlggmF/" + mainForm.pageclipname)