export function calcular(){     /* funcion de calculo de credito */
    let nombre = document.getElementById('nombre').value   /* obteniendo datos del formulario */
    let montoCredito = document.getElementById('monto').value;
    let cuotaCredito = JSON.parse(document.getElementById('cuotas').value);
    const credito1 = new Credito (nombre,montoCredito,cuotaCredito);/* creando objeto con datos obtenidos */
    console.log(credito1)
    if( nombre == null || nombre.length == 0 || !/^[A-Za-z]+$/.test(nombre) ){/* validacion de nombre */
        alert("Ingresaste un nombre invalido. Intenta de nuevo")
    } else if(montoCredito<10000){/* validacion de monto minimo */
        alert("El credito debe ser de $10.000 como minimo")
    } else if(isNaN(montoCredito) || montoCredito=="0" || montoCredito==""){/* validacion de monto */
        alert("Ingresaste un monto invalido. Intenta de nuevo")
    } else if(cuotaCredito == 3){
        credito1.interes=JSON.parse(localStorage.getItem('interes1'));/* obteniendo valor de interes para esta cantidad de cuotas */
        credito1.calculoCredito1();/* funcion de calculo */
        credito1.mostrarCredito();/* funcion de muestra de datos con el DOM */
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

class Credito{
    constructor(nombre,montoCredito,cuotaCredito,interes) {
        this.nombre = nombre;
        this.montoCredito = montoCredito;
        this.cuotaCredito = cuotaCredito; 
        this.interes = interes;
    }
    calculoCredito1() {/* funcion de calculo */
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
    mostrarCredito() {/* funcion de muestra de datos con el DOM */
        this.monto = this.monto.toFixed(0);/* redondeo de monto total*/
        this.cuota = this.cuota.toFixed(0);/* redondeo de monto por cuota */
        const mostrar = document.createElement("DIV");/* crea elemento div */
        mostrar.className = 'mostrar';/* clase para div */
        mostrar.innerHTML =     `<h2> ${this.nombre},</h2>
                                <h4> tu crédito es el siguiente:</h4>
                                <h3> Si solicitas $${this.montoCredito} en ${this.cuotaCredito} cuotas</h3>
                                <h4> Cada una será de $${this.cuota}</h4>
                                <h5> Por un total de $${this.monto}</h5>`;
        document.querySelector(".credit__contenido").appendChild(mostrar);
    }
}
