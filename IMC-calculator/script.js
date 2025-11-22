function calculateIMC(){
    const weigth = parseFloat(document.getElementById("weight").value);
    const heigth = parseFloat(document.getElementById("height").value) / 100;
    const result = document.getElementById("result");

    if (weigth && heigth) {
        const imcValue = (weigth / (heigth * heigth)).toFixed(2);

        result.textContent = `Tu IMC es: ${imcValue}`
    }
    else{
        result.textContent = 'Por favor, ingresa solo números';
    }
}