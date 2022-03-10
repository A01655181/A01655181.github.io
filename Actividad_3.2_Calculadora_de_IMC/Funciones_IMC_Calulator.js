function procesarForm(){ 
    var peso = $("#peso").val(); 
    var estatura = $("#estatura").val();
    var IMC = parseFloat (peso) / (parseFloat (estatura) * parseFloat (estatura) );
    if (IMC <= 18.5){
        $("#salida").text("Para los datos ingresados: (Peso = " + peso + "kg y Estatura = " + estatura +"m) Su IMC se considera bajo de peso, pues es de: " + IMC.toFixed(1)); 

    }else if (IMC > 18.5 && IMC <= 24.9){
        $("#salida").text("Para los datos ingresados: (Peso = " + peso + "kg y Estatura = " + estatura +"m) Su IMC se considera peso saludable, pues es de: " + IMC.toFixed(1)); 

    }else if (IMC >= 25 && IMC <= 29.9){
        $("#salida").text("Para los datos ingresados: (Peso = " + peso + "kg y Estatura = " + estatura +"m) Su IMC se considera sobrepeso, pues es de: " + IMC.toFixed(1)); 

    }else if (IMC >= 30 && IMC <= 34.9){
        $("#salida").text("Para los datos ingresados: (Peso = " + peso + "kg y Estatura = " + estatura +"m) Su IMC se considera obesidad de grado 1, pues es de: " + IMC.toFixed(1)); 

    }else if (IMC >= 35 && IMC <= 39.9){
        $("#salida").text("Para los datos ingresados: (Peso = " + peso + "kg y Estatura = " + estatura +"m) Su IMC se considera obesidad de grado 2, pues es de: " + IMC.toFixed(1)); 

    }else if (IMC >= 40){
        $("#salida").text("Para los datos ingresados: (Peso = " + peso + "kg y Estatura = " + estatura +"m) Su IMC se considera obesidad mórbida, pues es de: " + IMC.toFixed(1)); 

    }

}