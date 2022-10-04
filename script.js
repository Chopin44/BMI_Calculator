let hasil =  document.getElementById("submit")
let inputKilo = document.getElementById("kilo")
let inputCm = document.getElementById("cm")
let h1 = document.getElementById("h1")


hasil.addEventListener("submit", (event) => {
    event.preventDefault()

    h1.innerHTML = ""

    let tipe;

    let output = {
        berat: inputKilo.value,
        tinggi: inputCm.value
    }


    beratInt = parseInt(output.berat)
    tinggiInt = parseInt(output.tinggi)


    let hasilBMI = beratInt/(tinggiInt/100)**2;

    // Underweight = <18.5
    // Normal weight = 18.5 – 24.9
    // Overweight = 25 – 29.9
    // Obesity = BMI of 30 or greater

    if (hasilBMI < 18.5) {
        tipe = "Underweight"
    } else if (hasilBMI <= 24.9){
        tipe = "Normal"
    } else if (hasilBMI <= 29.9) {
        tipe = "Overweight"
    } else {
        tipe = "Obesity"
    }
        
    h1.append("Your BMI is "+ hasilBMI +" which means you are " + tipe )

    hasil.reset()
   
})