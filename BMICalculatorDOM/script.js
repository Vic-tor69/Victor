let weight;
let height;
function calculateBMI() {

    let bmi = weight / (height * height);
    let bmiCategory;
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = "Overweight";
        } else if (bmi >= 30 && bmi < 34.9) {
            bmiCategory = "Obesity class 1";
        } else if (bmi >= 35 && bmi < 39.9) {
            bmiCategory = "Obesity class 2";
        } else if (bmi > 40) {
            bmiCategory = "Extreme Obesity class 3";
        }

        resultElement = document.querySelector('.result');
        resultElement.innerHTML = `Your BMI: ${bmi.toFixed(2)} <br>Category: ${bmiCategory}`;
    
    } else {
        resultElement = document.querySelector('.result');
        resultElement.innerHTML = `Please enter valid weight and height values.`;
    }
}




function clearFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}