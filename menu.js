//realizar calculadora que tenga las opciones para 
//sumar
//restar
//multiplicar
//dividir
//salir

//tener en cuenta que el menu se va a repetir hasta que el usuario indique
//la opcion de salir 


var op;
var rep=true;
var num1, num2;
var operacionMatematica;
var resultado1 = document.getElementById("resultado1")
var resultado2 = document.getElementById("resultado2")
var resultado3 = document.getElementById("resultado3")
var resultado4 = document.getElementById("resultado4")
do{
    op= parseInt(prompt("calculadora: \n1.Suma\n2.Resta\n3.Multipicacion\n4.Division\n5Salir"))
    //console.log(op)
    switch(op){
        case 1 :
            //sumar
            num1 =parseInt(prompt("Ingrese el valor 1"))
            num2 =parseInt(prompt("Ingrese el valor 2"))
            operacionMatematica = num1 + num2;
            resultado1.append(`la Suma entre ${num1} y ${num2} : ${operacionMatematica}`)

            break;

        case 2 :
            //restar
            
            num1 =parseInt(prompt("Ingrese el valor 1"))
            num2 =parseInt(prompt("Ingrese el valor 2"))
            operacionMatematica = num1 - num2;
            resultado2.append(`la Resta entre ${num1} y ${num2} : ${operacionMatematica}`)
            break;

        case 3 :
            //multiplicar
            
            num1 =parseInt(prompt("Ingrese el valor 1"))
            num2 =parseInt(prompt("Ingrese el valor 2"))
            operacionMatematica = num1 * num2;
            resultado3.append(`la Multiplicacion entre ${num1} y ${num2} : ${operacionMatematica}`)
            break;

        case 4 :
            //dividir
        
            num1 =parseInt(prompt("Ingrese el valor 1"))
            num2 =parseInt(prompt("Ingrese el valor 2"))
            operacionMatematica =  num1 / num2;
            resultado4.append(`la Division entre ${num1} y ${num2} : ${operacionMatematica}`)
            break;

        case 5 :
            //salir
            console.log("opcion salir")
            rep = false;
            break;
        default:
            alert("ingrese la opcion correcta")
            break;
}
}while(rep)