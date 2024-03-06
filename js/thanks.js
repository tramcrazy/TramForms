formName = localStorage.getItem("completedForm");
console.log("form name: " + formName);
document.title = formName + " | TramForms";
document.getElementById("formName").innerHTML = formName;
document.getElementById("thanksText").innerHTML = "Thanks for completing " + formName + " on TramForms. The submission was successful!";