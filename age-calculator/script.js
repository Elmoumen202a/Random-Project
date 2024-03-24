// Function to calculate age
function calculateAge() {
    // Get the value of the input field which contains the birthday
    var birthday = document.getElementById("birthday").value;
    // Convert the birthday string into a Date object
    var birthDate = new Date(birthday);
    // Get the current date
    var currentDate = new Date();
    
    // Calculate the age by subtracting the birth year from the current year
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    // Check if the current month is less than the birth month,
    // or if it's the same month but the current day is before the birth day
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
        // If so, subtract 1 from the calculated age
        age--;
    }

    // Get the result div where the age will be displayed
    var resultDiv = document.getElementById("result");
    // Display the calculated age inside the result div
    resultDiv.innerText = "You are " + age + " years old.";
}
