function getAkanName() {

// process start when the user presses the Get-akan-name btn
// since the date & gender can change depending on the user
// start by targeting element ID& class selector DOM
let dateInput = document.getElementById("birthdate").value;
let gender = document.querySelector('input[name="gender"]:checked');

// validate the input
if (!dateInput || !gender) {
    alert("Please select both a date & a gender!");
    return;
}
//break date into day, month & year
let dateParts = dateInput.split("-");
let YY = parseInt(dateParts[0].slice(2,4)); //getting those 2 last digits of the year
let CC = parseInt(dateParts[0].slice(0,2));  //First two digits (century)
let MM = parseInt(dateParts[1]);
let DD = parseInt(dateParts[2]);
// calculating the day using the formula
let dayOfWeek = (
    ((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD
) % 7;
// use Math.floor to bring whole no and Mth.abs to handle negatives
let index = Math.floor(Math.abs(dayOfWeek));
// match the calculated dat above to Akan name
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let akanName = "";
if (gender.value === "male") {
    akanName = maleNames[index];

} else {
    akanName = femaleNames[index];
}
// Display the result on the webpage
document.getElementById("result").innerText = "Your Akan is" + akanName + "!";
}