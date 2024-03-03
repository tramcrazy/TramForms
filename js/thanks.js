formName = localStorage.getItem("completedForm");
document.title = formName + " | TramForms";
document.getElementById("formName").innerHTML = formName;
document.getElementById("thanksText").innerHTML = "Thanks for completing " + formName + " on TramForms. The submission was successful!";