//Esta es una app para simular el arriendo de autos, multiplicamos el valor del modelo seleccionado x los dias que desea el usuario

//*definimos el valor de los 4 modelos de autos que tendremos

let nissan1 = 35000;
let nissan2 = 45000;

let renault1 = 25000;
let renault2 = 32990;

//Definimos la funcion para poder calcular el valor total del arriendo

function totalArriendo(dias,modelo){
    
    return dias * modelo;
}

//ahora comenzamos con la funcion de seleccion de marca y modelo de auto
function modeloAuto(){

    //solicitamos al usuario la marca deseada
    
    let marca = prompt("MARCA\nEscribe el nombre de la marca que deseas segun nuestra disponibilidad:\n-Nissan\n-Renault");

    //mediante switch creamos las 2 variantes de las marcas disponibles

    switch (marca) {
        case "Nissan":
            let modeloN = prompt("Escribe el nombre del modelo Nissan que deseas\n-Modelo1 por: $"+nissan1+"x/día."+"\n-Modelo2 por: $"+nissan2+"x/día.");

            //Ahora mediente otro switch ingresamos a la seleccion del modelo
            switch(modeloN){
                case "Modelo1":

                //llamamos la funcion del total y creamos las variables que la funcion solicitara
                    totalArriendo();
                    var modelo = nissan1;
                    var dias = Number(prompt("Indica la cantidad de dias que necesitas arrendar el auto:"));
                    alert("El valor total de su arriendo, por el Modelo1, durante " +dias +" días,\nserá de: $" +totalArriendo(dias,modelo));

                //llamamos la funcion creada para reiniciar el proceso si el usuario asi lo quiere
                    reiniciar();
                    break;

                case "Modelo2":

                //llamamos la funcion del total y creamos las variables que la funcion solicitara
                    totalArriendo();
                    var modelo = nissan2;
                    var dias = Number(prompt("Indica la cantidad de dias que necesitas arrendar el auto:"));
                    alert("El valor total de su arriendo, por el Modelo2, durante " +dias +" días,\nserá de: $" +totalArriendo(dias,modelo));

                //llamamos la funcion creada para reiniciar el proceso si el usuario asi lo quiere
                    reiniciar();
                        break;
                        default:
            alert("Ingresa datos correctos");
            //reiniciamos el ciclo
            modeloAuto();
            
                

            }
            break;
        
        case "Renault":
            let modeloR = prompt("Escribe el nombre del modelo Renault que deseas\n-Modelo1 por: $"+renault1+"x/día."+"\n-Modelo2 por: $"+renault2+"x/día.")

            //Ahora mediente otro switch ingresamos a la seleccion del modelo
            switch(modeloR){
                case "Modelo1":

                //llamamos la funcion del total y creamos las variables que la funcion solicitara

                    totalArriendo();
                    var modelo = renault1;
                    var dias = Number(prompt("Indica la cantidad de dias que necesitas arrendar el auto:"));
                    alert("El valor total de su arriendo, por el Modelo1, durante " +dias +" días,\nserá de: $" +totalArriendo(dias,modelo));

                //llamamos la funcion creada para reiniciar el proceso si el usuario asi lo quiere

                    reiniciar();
                        break;

                case "Modelo2":

                //llamamos la funcion del total y creamos las variables que la funcion solicitara

                    totalArriendo();
                    var modelo = renault2;
                    var dias = Number(prompt("Indica la cantidad de dias que necesitas arrendar el auto:"));
                    alert("El valor total de su arriendo, por el Modelo1, durante " +dias +" días,\nserá de: $" +totalArriendo(dias,modelo));

                //llamamos la funcion creada para reiniciar el proceso si el usuario asi lo quiere

                    reiniciar();
                    break;
                    default:
                        alert("Ingresa datos correctos");
                        //reiniciamos el ciclo
                        modeloAuto();
                    
            }
            break;
    
        default:
            alert("Ingresa datos correctos");
            //reiniciamos el ciclo
            modeloAuto();
            
    }
}

//creamos la funcion para reiniciar el ciclo si es que el usuario asi lo desea

function reiniciar(){
    let reinicio = confirm("Desea realizar otra simulación?")
    if (reinicio == true){
        modeloAuto();
    }else{

    }
}


//Ahora comenzamos con la aplicacion mediante un alert luego llamamos la funcion del simulador, para luego terminar con un alert de cierre

alert("Bienvenido!\nAhora podras arrendar el auto que deseas por el tiempo que quieras!\nSolamente sigue las instrucciones")

modeloAuto();

alert("Muchas gracias por arrendar con nosotros!")

//fin


