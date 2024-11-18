function calculateAge() {
    const ageInput = document.getElementById("age").value;
    const resultDiv = document.getElementById("age-result");


    const ageDate = new Date(ageInput);
    const today = new Date();
    let age = today.getFullYear() - ageDate.getFullYear();
    const monthDifference = today.getMonth() - ageDate.getMonth();
    

    resultDiv.innerHTML = `${age}`;
}

const btn = document.getElementById("btn");

if(btn.addEventListener("click", calculateAge));



