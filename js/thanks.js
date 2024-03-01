formName = localStorage.getItem("completedForm");
document.title = formName + " | tramcrazy's forms";
document.getElementById("formName").innerHTML = formName;
document.getElementById("thanksText").innerHTML = "Thanks for completing " + formName + " on tramcrazy's forms. The submission was successful!";