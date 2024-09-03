document.addEventListener('DOMContentLoaded', function () {
    let infoArea = document.getElementById('info');
    
    //---------------------------------Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    let aElements = document.getElementsByTagName('a');
    infoArea.innerText = `Hay ${aElements.length} elementos del tipo a \n \n`;


    //---------------------------------Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
    infoArea.innerText += `El penultimo elemento tiene el siguiente href = ${aElements[aElements.length - 2].href} \n \n`;


    //---------------------------------Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    let contador = 0;
    for (let i = 0; i < aElements.length; i++){
        if (aElements[i].href == "http://prueba/"){
            contador++;
        }
    }
    
    infoArea.innerText += `El número de enlaces que anlazan a "http://prueba/" son = ${contador} \n \n`;


    //---------------------------------Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    let paragraph = document.getElementsByTagName('p');
    infoArea.innerText += `El número de enlaces del tercer parrafo es = ${paragraph[2].getElementsByTagName('a').length}`;
});