export function calcular(){     /* funcion de calculo de credito */
    let nombre = document.getElementById('nombre').value   /* obteniendo datos del formulario */
    let montoCredito = document.getElementById('monto').value;
    let cuotaCredito = JSON.parse(document.getElementById('cuotas').value);
    let creditoX = new Credito (nombre,montoCredito,cuotaCredito);/* creando objeto con datos obtenidos */
    let creditos = JSON.parse(sessionStorage.getItem('listaCreditos'))/* llamado de array */
    if( nombre == null || nombre.length == 0 || !/^[A-Za-z\s]+$/.test(nombre) ){/* validacion de nombre */
        alert("Ingresaste un nombre invalido. Intenta de nuevo");
    } else if(montoCredito<10000){/* validacion de monto minimo */
        alert("El credito debe ser de $10.000 como minimo");
    } else if(isNaN(montoCredito) || montoCredito=="0" || montoCredito==""){/* validacion de monto */
        alert("Ingresaste un monto invalido. Intenta de nuevo");
    } else {
        switch(cuotaCredito) {
            case 3:
                creditoX.interes=JSON.parse(localStorage.getItem('interes1'));/* obteniendo valor de interes para esta cantidad de cuotas */
                creditoX.calculoCredito();/* funcion de calculo */
                sessionStorage.setItem('creditoN',JSON.stringify(creditoX));/* guardado de datos */
                creditos.push(JSON.parse(sessionStorage.getItem('creditoN')));/* actualizacion de array */
                sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));/* guardado de array actualizado */
                break;
            case 6:
                creditoX.interes=JSON.parse(localStorage.getItem('interes2'));
                creditoX.calculoCredito();
                sessionStorage.setItem('creditoN',JSON.stringify(creditoX));
                creditos.push(JSON.parse(sessionStorage.getItem('creditoN')));
                sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));
                break;
            case 12:   
                creditoX.interes=JSON.parse(localStorage.getItem('interes3'));
                creditoX.calculoCredito();
                sessionStorage.setItem('creditoN',JSON.stringify(creditoX));
                creditos.push(JSON.parse(sessionStorage.getItem('creditoN')));
                sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));
                break;
        }   
    }
}  

export function limpiarInfo(){/* funcion que evita que se repitan los elementos agregados en el DOM */
    var creditos = JSON.parse(sessionStorage.getItem('listaCreditos'))
    if (document.getElementById('mostrar')==null){/* verificacion de elementos en html */
        console.log("no hay nada")
    } else{ 
            for(let i=1;i<=creditos.length;i++){/* bucle para eliminar el total de elementos agregados */
                var existe = document.getElementById('mostrar')
                existe.parentNode.removeChild(existe)
            }
    }
}

export function clearCredito(){/* borrar sessionStorage para limpiar array */
    sessionStorage.clear('listaCreditos')
}

export function mostrarCredito() {/* funcion de muestra de datos con el DOM */
    var creditos = JSON.parse(sessionStorage.getItem('listaCreditos'))/* elementos del array */
    for (const credito of creditos){
        const mostrar = document.createElement("DIV");/* crea elemento div */
        mostrar.id = 'mostrar';/* clase para div */
        mostrar.innerHTML =     `<h2> <strong>${credito.nombre}</strong>,</h2>
                                <h4> tu crédito es el siguiente:</h4>
                                <h3> Si solicitas $${credito.montoCredito} en ${credito.cuotaCredito} cuotas</h3>
                                <h4> Cada una será de $${credito.cuota}</h4>
                                <h5> Por un total de $${credito.monto}</h5>`;
        document.querySelector(".contenido__resultados").appendChild(mostrar);
    }
}

class Credito{/* clase constructora */
    constructor(nombre,montoCredito,cuotaCredito,interes) {
        this.nombre = nombre;
        this.montoCredito = montoCredito;
        this.cuotaCredito = cuotaCredito; 
        this.interes = interes;
    }
    calculoCredito() {/* funcion de calculo */
        this.monto =  this.montoCredito * this.interes;
        this.cuota = this.monto / this.cuotaCredito;
        this.monto = this.monto.toFixed(0);/* redondeo de monto total*/
        this.cuota = this.cuota.toFixed(0);/* redondeo de monto por cuota */
    }
}
