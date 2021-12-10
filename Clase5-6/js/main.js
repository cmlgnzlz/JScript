class Credito{
    constructor(montoCredito,cuotaCredito) {
        this.montoCredito = montoCredito;
        this.cuotaCredito = cuotaCredito; 
    }
    calculoCredito1() {
        console.log("El monto solicitado es de $" + montoCredito)
        this.monto =  montoCredito * 1.15;
        this.cuota = this.monto / 3;
    }
    calculoCredito2() {
        console.log("El monto solicitado es de $" + montoCredito)
        this.monto =  montoCredito * 1.20;
        this.cuota = this.monto / 6;
    }
    calculoCredito3() {
        console.log("El monto solicitado es de $" + montoCredito)
        this.monto =  montoCredito * 1.30;
        this.cuota = this.monto / 12;
    }
    mostrarCredito() {
        console.log("El monto es total a pagar es $" + this.monto.toFixed(0) +". El valor de cada cuota sera de $" + this.cuota.toFixed(0));
    }
}


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
            const credito1 = new Credito(montoCredito,cuotaCredito);
            credito1.calculoCredito1();
            credito1.mostrarCredito();
        } else if(cuotaCredito==6) {
            const credito1 = new Credito(montoCredito,cuotaCredito);
            credito1.calculoCredito2();
            credito1.mostrarCredito();
        } else if(cuotaCredito==12) {
            const credito1 = new Credito(montoCredito,cuotaCredito);
            credito1.calculoCredito3();
            credito1.mostrarCredito();
        } else {
            alert("Lamentablemente, no ofrecemos esta opcion de cuotas. Recarga para volver a intentar.")
        }
    }