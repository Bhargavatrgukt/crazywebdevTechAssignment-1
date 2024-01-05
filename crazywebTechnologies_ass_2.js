let nameID = document.getElementById("name");
let genderID = document.getElementById("gender");
let emailID = document.getElementById("email");
let mobileID = document.getElementById("mobile");

let dnameID = document.getElementById("dName");
let dgenderID = document.getElementById("dGender");
let demailID = document.getElementById("dEmail");
let dmobileID = document.getElementById("dMobile");





function showName() {
    // Show filled name inside h1
    dnameID.textContent = nameID.value;
}

function showGender() {
    // Show the selected gender inside h2
    dgenderID.textContent = genderID.value;
}

function showEmail() {
    // Show the filled email inside h3
    demailID.textContent = emailID.value;
}

function showMobile() {
    // Show the filled mobile inside h4
    dmobileID.textContent = mobileID.value;

}

function resetForm() {
    // Reset all the form elements to default values (blank "")
    nameID.value = "";
    genderID.value = "";
    emailID.value = "";
    mobileID.value = "";
}

function resetDisplay() {
    // Reset all the headings (h1, h2, h3, h4) to blank values
    dnameID.textContent = "";
    dgenderID.textContent = "";
    demailID.textContent = "";
    dmobileID.textContent = "";
}