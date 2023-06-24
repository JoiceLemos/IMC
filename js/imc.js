
//Selecionar elementos do HTML

//var altura = document.getElementById - Foi substituído por:

var altura = document.querySelector('#altura');
var peso = document.querySelector('#peso');
var resultImc = document.querySelector('#result-imc');

    //console.log(altura);
   // console.log(peso);

function calcularImc() {
   
    if(altura.value != ''  && peso.value != ''){

        var imc = peso.value / (altura.value*altura.value);
        
        resultImc.style.display = 'block'
        resultImc.innerHTML = '<h2>Seu IMC: ' +imc.toFixed(2)+ '</h2>';


        //Menor que 18.5	Magreza//
        //Entre 18.5 e 24.9	Normal//
        //Entre 25.0 e 29.9	Sobrepeso//
        //Maior que 29.9	Obesidade//

        if(imc < 18.5){
            resultImc.style.background = '#FF0000'
        }

        else if(imc <= 24.9){
            resultImc.style.background = '#005f09'
        }

        else if(imc <= 29.9){
            resultImc.style.background = '#FFAA05'
        }

        else{
            resultImc.style.background = '#A30A00'
        }

    }


    else{
        alert('Preencha todos os campos');
    }
    
}


