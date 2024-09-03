
document.addEventListener('DOMContentLoaded', function () {
    let animal = prompt("Ingrese un animal");
    let listAnimals = document.getElementsByTagName('li')

    for (let i = 0; i < listAnimals.length; i++){                               //Recorremos con un for, todos los elementos de la lista (6 elementos)
                               
        if (listAnimals[i].innerText.toLowerCase() === animal.toLowerCase()){   //Preguntamos si el animal que ingrsó el usuario coincide con el animal actual seleccionado según i (for)
            
            console.log("Animal encontrado: " + listAnimals[i].innerText);      //Confirmamos en consola cual se encontró
            listAnimals[i].style.color = "red";                                 //Cambiamos el atributo style (color)
            listAnimals[i].style.textDecoration = "underLine";                  //Cambiamos el atributo style (textDecoration)
            listAnimals[i].style.fontSize = '26px';                             //Cambiamos el atributo style (fontSize)
        
        }else{

            console.log("Animal no encontrado");                                //Mostramos en console que no se encuetra

        }

    }
});

