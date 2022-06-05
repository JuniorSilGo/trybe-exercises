const header = document.getElementById("header-container");
header.style.backgroundColor = "#00b069";

const emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "#ff9f84"

const noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.backgroundColor = "#f9db5e"

const emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
emergencyTitle[0].style.backgroundColor = "#a500f3";
emergencyTitle[1].style.backgroundColor = "#a500f3";

const noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");
noEmergencyTitle[0].style.backgroundColor = "#232525";
noEmergencyTitle[1].style.backgroundColor = "#232525";

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = "#003533";
