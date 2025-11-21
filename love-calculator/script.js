function calculateLove(){
    const yourName = document.getElementById("user-name").value;
    const otherName = document.getElementById("other-name").value;

    const result = document.getElementById("result");
    
    if(yourName && otherName){
        /*
        const hash = (yourName + otherName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const lovePercentage = hash % 101;
        */
        
        const lovePercentage = (yourName.length * otherName.length * 4) % 101;

        result.style.color = 'green';
        result.textContent = `Tienes un ${lovePercentage}% de compatibilidad`;
    } else{
        result.style.color = 'red';
        result.textContent = "Por favor, ingresa ambos nombres";
    }

}