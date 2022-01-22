export function calcular(){     /* funcion de calculo de credito */
    let nombre = $('#nombre').val();   /* obteniendo datos del formulario */
    let montoCredito = $('#monto').val();
    let cuotaCredito = JSON.parse($('#cuotas').val());
    let creditoX = new Credito (nombre,montoCredito,cuotaCredito);/* creando objeto con datos obtenidos */
    let creditos = JSON.parse(sessionStorage.getItem('listaCreditos'));/* llamado de array */
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
            let existe = $('div #mostrar');
            existe.remove();
            let existeS = $('div .scrsl');
            existeS.remove();
        }

export function clearCredito(){/* borrar sessionStorage para limpiar array */
    sessionStorage.clear('listaCreditos');
    let creditos = [];
    sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));
    console.log(JSON.parse(sessionStorage.getItem('listaCreditos')));
}

export function mostrarCredito() {/* funcion de muestra de datos con el DOM con JQuery*/
    var creditos = JSON.parse(sessionStorage.getItem('listaCreditos'));/* elementos del array */
    for (const credito of creditos){
        $(".contenido__resultados").append(
            `<div id="mostrar">
            <h2> <strong>${credito.nombre}</strong>,</h2>
            <h4> tu crédito es el siguiente:</h4>
            <h3> Si solicitas $${credito.montoCredito} en ${credito.cuotaCredito} cuotas</h3>
            <h4> Cada una será de $${credito.cuota}</h4>
            <h5> Por un total de $${credito.monto}</h5>`
        )
    }
}

export function mostrarSucursales(){/* funcion con metodo GET de AJAX */
    const URLGET = "./js/sucursales.js" /* lista de sucursales */
    $.get(URLGET, function (respuesta, estado) {
        if(estado !== "success"){
            console.log("ERROR");
        }
        if(estado === "success"){
            let sucursales = JSON.parse(respuesta);
            for (const sucur of sucursales) {
                    $(".sucursales").prepend(`<div class="scrsl">
                                            <h2> ${sucur.ciudad}</h2>
                                            <h3> ${sucur.direccion}</h3>
                                            <h4> ${sucur.horario}</h4>
                                        </div>`);
                    }  
        }
        
    });
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
