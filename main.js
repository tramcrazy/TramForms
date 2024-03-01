/*function submitForm() {
    let form = document.getElementById("mainForm");
    let formData = new FormData(form)
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerHTML = "Please wait...";

}*/
//mainForm = document.getElementById("mainForm");
mainForm.onsubmit = async (e) => {
    e.preventDefault();
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerHTML = "Please wait...";
    let mainFormData = new FormData(mainForm);
    let response = await fetch("https://send.pageclip.co/cjFMs15YG7ofCuKMitQLnI65CCFlggmF/" + mainForm.getAttribute("pageclip-name"), {
        method: 'POST',
        body: new URLSearchParams(mainFormData)
    });
    console.log(result.message);
    submitButton.innerHTML = "Thank you!";
    window.location.href = "https://google.com"
}