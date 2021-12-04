const cuotas1=1.15
const cuotas2=1.20
const cuotas3=1.30

function calculoCredito(interes) {
    let bruto =  montoCredito * interes
    let cuota = bruto / cuotaCredito
    console.log("Si quieres" + " " + "$" + montoCredito + ", el total a pagar del credito sera de" + " " + "$" + bruto.toFixed(0))
    for (let i = 1; i <= cuotaCredito; i++) {
        console.log("Cuota" + " " + i + ": $" + cuota.toFixed(0))
    }
}

alert("Bienvenid@ a nuestro cotizador de creditos")
let montoCredito = prompt("Cuanto dinero necesitas? El minimo a solicitar es de $10.000")
let cuotaCredito = prompt("Ingresa la cantidad de cuotas que deseas (3, 6 o 12)")


if(montoCredito<10000){
    alert("El credito debe ser de $10.000 como minimo")
}else if(isNaN(montoCredito) || montoCredito=="0" || montoCredito==""){
    alert("Ingresaste un monto invalido. Intenta de nuevo recargando la pagina")
    } else if(cuotaCredito==3){ 
        calculoCredito(cuotas1)
    } else if(cuotaCredito==6) {
        calculoCredito(cuotas2)
    } else if(cuotaCredito==12) {
        calculoCredito(cuotas3)
    } else {
        alert("Lamentablemente, no ofrecemos esta opcion de cuotas. Recarga para volver a intentar.")
    }