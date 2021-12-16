
export class Credito{
    constructor(montoCredito,cuotaCredito,interes) {
        this.montoCredito = montoCredito;
        this.cuotaCredito = cuotaCredito; 
        this.interes = interes;
    }
    calculoCredito1() {
        console.log("El monto solicitado es de $" + this.montoCredito)
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
    }
    calculoCredito2() {
        console.log("El monto solicitado es de $" + this.montoCredito)
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
    }
    calculoCredito3() {
        console.log("El monto solicitado es de $" + this.montoCredito)
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
    }
}


/* const calculo =  document.getElementById(submit)
calculo.addeventlistener("submit", function() {
    funcicon()
})

function funcicon() {
    monto = montoCredito;
} */

