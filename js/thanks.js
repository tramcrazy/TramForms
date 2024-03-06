formName = localStorage.getItem("completedForm");
if (!(formName == null)) {
    document.title = formName + " | TramForms";
    document.getElementById("formName").innerHTML = formName;
    document.getElementById("thanksText").innerHTML = "Thanks for completing " + formName + " on TramForms. The submission was successful!";
    localStorage.removeItem("completedForm");
}