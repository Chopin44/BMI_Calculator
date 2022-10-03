let hasil =  document.getElementById("submit")
let inputKilo = document.getElementById("kilo")
let inputCm = document.getElementById("cm")
let h1 = document.getElementById("h1")




hasil.addEventListener("submit", (event) => {
    event.preventDefault()

    let output = {
        berat: inputKilo.value,
        tinggi: inputCm.value
    }

    let hasilBMI = output.berat/(output.tinggi/100)^2;

    // Underweight = <18.5
    // Normal weight = 18.5 – 24.9
    // Overweight = 25 – 29.9
    // Obesity = BMI of 30 or greater

    if (hasilBMI < 18.5) {

        tipe = "Underweight"
    } else {
        console.log("error");
    }

    h1.append("Your BMI is "+ hasilBMI +" which means you are " + tipe )


    
    
})