export function calcular(){     
    let nombre = document.getElementById('nombre').value
    let montoCredito = document.getElementById('monto').value;
    let cuotaCredito = JSON.parse(document.getElementById('cuotas').value);
    const credito1 = new Credito (nombre,montoCredito,cuotaCredito);
    console.log(credito1)
    if( nombre == null || nombre.length == 0 || !/^[A-Za-z]+$/.test(nombre) ){
        alert("Ingresaste un nombre invalido. Intenta de nuevo")
    } else if(montoCredito<10000){
        alert("El credito debe ser de $10.000 como minimo")
    } else if(isNaN(montoCredito) || montoCredito=="0" || montoCredito==""){
        alert("Ingresaste un monto invalido. Intenta de nuevo")
    } else if(cuotaCredito == 3){
        credito1.interes=JSON.parse(localStorage.getItem('interes1'));
        credito1.calculoCredito1();
        credito1.mostrarCredito();
    } else if (cuotaCredito == 6){
        credito1.interes=JSON.parse(localStorage.getItem('interes2'));
        credito1.calculoCredito2();
        credito1.mostrarCredito();
    } else {   
        credito1.interes=JSON.parse(localStorage.getItem('interes3'));
        credito1.calculoCredito3();
        credito1.mostrarCredito();
    }
}  

export class Credito{
    constructor(nombre,montoCredito,cuotaCredito,interes) {
        this.nombre = nombre;
        this.montoCredito = montoCredito;
        this.cuotaCredito = cuotaCredito; 
        this.interes = interes;
    }
    calculoCredito1() {
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
    }
    calculoCredito2() {
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
    }
    calculoCredito3() {
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
    }
    mostrarCredito() {
        this.monto = this.monto.toFixed(0)
        this.cuota = this.cuota.toFixed(0)
        const mostrar = document.createElement("DIV");
        mostrar.className = 'mostrar'
        mostrar.innerHTML =     `<h2> ${this.nombre}, tu crédito es el siguiente:</h2>
                                <h3> Si solicitas $${this.montoCredito} en ${this.cuotaCredito} cuotas</h3>
                                <h4> Cada una será de $${this.cuota}</h4>
                                <h5> Por un total de $${this.monto}</h5>`;
        document.querySelector(".credit__contenido").appendChild(mostrar);
    }
}
