var contador = 1;

export function calcular(){     /* funcion de calculo de credito */
    let nombre = $('#nombre').val();   /* obteniendo datos del formulario */
    let montoCredito = $('#monto').val();
    let cuotaCredito = JSON.parse($('#cuotas').val());
    let creditoX = new Credito (contador,nombre,montoCredito,cuotaCredito);/* creando objeto con datos obtenidos */
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
        contador++;
    }
}  

export function limpiarInfo(){/* funcion que evita que se repitan los elementos agregados en el DOM */
    $('div .contenido__resultados').empty();
    $('div .scrsl').remove();
}
       
export function clearCredito(){/* borrar sessionStorage para limpiar array */
    sessionStorage.clear('listaCreditos');
    let creditos = [];
    sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));
    console.log(JSON.parse(sessionStorage.getItem('listaCreditos')));
    contador = 1;
}

export function mostrarCredito() {/* funcion de muestra de datos con el DOM con JQuery*/
    var creditos = JSON.parse(sessionStorage.getItem('listaCreditos'));/* elementos del array */
    for (const credito of creditos){
        $('.contenido__resultados').prepend(
            `<div id="mostrar${credito.contador}">
            <h2> <strong>${credito.nombre}</strong>,</h2>
            <h4> tu crédito es el siguiente:</h4>
            <h3> Si solicitas ${new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(credito.montoCredito)} en ${credito.cuotaCredito} cuotas</h3>
            <h4> Cada una será de ${new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(credito.cuota)}</h4>
            <h5> Por un total de ${new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(credito.monto)}</h5>
            <button id="x${credito.contador}" class="cerrar">CERRAR</button></div>`
            )
        $('#mostrar' + credito.contador).css({
            "font-family":"'Raleway', sans-serif","background-image":"linear-gradient(to right ,orange,rgb(245, 196, 106))",
            "margin-bottom":"20px","padding-top":"5px","padding-bottom":"5px","width":"80%"})
    }
    $('#form')[0].reset();
}

export function mostrarSucursales(){/* funcion con metodo GET de AJAX */
    const URLGET = "./js/sucursales.json" /* lista de sucursales */
    $.get(URLGET, function (respuesta, estado) {
        if(estado !== "success"){
            console.log("ERROR");
        }
        if(estado === "success"){
            for (const sucursal of respuesta) {
                    $('.sucursales').append(`<div class="scrsl">
                                            <h2> ${sucursal.ciudad}</h2>
                                            <h3> ${sucursal.direccion}</h3>
                                            <h4> ${sucursal.horario}</h4>
                                        </div>`);
                    }  
        }
    });
}

class Credito{/* clase constructora */
    constructor(contador,nombre,montoCredito,cuotaCredito,interes,boton) {
        this.contador = contador;
        this.nombre = nombre;
        this.montoCredito = montoCredito;
        this.cuotaCredito = cuotaCredito; 
        this.interes = interes;
        this.boton = "x" + contador;
    }
    calculoCredito() {/* funcion de calculo */
        this.monto =  (this.montoCredito * this.interes).toFixed(0);
        this.cuota = (this.monto / this.cuotaCredito).toFixed(0);
    }
}