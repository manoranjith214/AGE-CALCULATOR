function calculateAge() {
    const ageInput = document.getElementById("age").value;
    const resultDiv = document.getElementById("age-result");

    if (!ageInput) {
        resultDiv.innerHTML = "Please enter a valid date.";
        return;
    }

    const ageDate = new Date(ageInput);
    const today = new Date();

    if (isNaN(ageDate)) {
        resultDiv.innerHTML = "Invalid date format.";
        return;
    }

    let age = today.getFullYear() - ageDate.getFullYear();
    const monthDifference = today.getMonth() - ageDate.getMonth();
    const dayDifference = today.getDate() - ageDate.getDate();

   
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    resultDiv.innerHTML = ` ${age}`;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", calculateAge);



