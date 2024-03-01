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
    submitButton.innerHTML = "Thank you!";
    window.location.href = "https://google.com"
}