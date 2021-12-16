import { Credito } from "./credito.js";

localStorage.setItem('interes1', 1.15);
localStorage.setItem('interes2', 1.20);
localStorage.setItem('interes3', 1.30);

function calcular(){     
    console.log('Hola!');
    let montoCredito = document.getElementById('monto').value;
    let cuotaCredito = JSON.parse(document.getElementById('cuotas').value);
    const credito1 = new Credito (montoCredito,cuotaCredito);
    console.log(credito1)
    if (cuotaCredito == 3){
        credito1.interes=JSON.parse(localStorage.getItem('interes1'));
        credito1.calculoCredito1();
    } else if (cuotaCredito == 6){
        credito1.interes=JSON.parse(localStorage.getItem('interes2'));
        credito1.calculoCredito2();
    } else {   
        credito1.interes=JSON.parse(localStorage.getItem('interes3'));
        credito1.calculoCredito3();
    }
}  

const simula=document.getElementById('submit')
simula.addEventListener("click", function() { 
    calcular();
})

/* let creditos = []   /* Define Array vacio 
console.log("Bienvenid@ a nuestro cotizador de creditos")
alert("Bienvenid@ a nuestro cotizador de creditos")
let montoCredito = prompt("Cuanto dinero necesitas? El minimo a solicitar es de $10.000")

if(montoCredito<10000){
    alert("El credito debe ser de $10.000 como minimo")
} else if(isNaN(montoCredito) || montoCredito=="0" || montoCredito==""){
    alert("Ingresaste un monto invalido. Intenta de nuevo recargando la pagina")
    } else {
        let cuotaCredito = prompt("Ingresa la cantidad de cuotas que deseas (3, 6 o 12)")
        if(cuotaCredito==3){
            const credito1 = new Credito (montoCredito,cuotaCredito);
            credito1.calculoCredito1();
            creditos.push(credito1);   /* Actualiza array 
        } else if(cuotaCredito==6) {
            const credito1 = new Credito (montoCredito,cuotaCredito);
            credito1.calculoCredito2();
            creditos.push(credito1);   
        } else if(cuotaCredito==12) {
            const credito1 = new Credito (montoCredito,cuotaCredito);
            credito1.calculoCredito3();
            creditos.push(credito1);   
        } else {
            alert("Lamentablemente, no ofrecemos esta opcion de cuotas. Recarga para volver a intentar.")
        }
    }
*/


/* for (const i of creditos){
    console.log("El monto total a pagar es $" + i.monto.toFixed(0) +". El valor de cada cuota sera de $" + i.cuota.toFixed(0));
} *//* Utiliza array para retornar montos en consola */

