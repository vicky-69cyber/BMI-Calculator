function calculatebmi() {

    let weightinput = prompt("Enter Your Weight In Kg");
    let heightinput = prompt("Enter Your Height In Cm");

    let weight = parseFloat(weightinput);
    let heightcm = parseFloat(heightinput);

    let height = heightcm / 100;

    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML =
        `Your BMi is: ${bmi.toFixed(2)}`;
}