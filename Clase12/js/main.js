import { calcular , mostrarCredito, limpiarInfo, clearCredito } from "./credito.js"

/* interes por cada tipo de cuota */
localStorage.setItem('interes1', 1.15);
localStorage.setItem('interes2', 1.20);
localStorage.setItem('interes3', 1.30);
let creditos = [];   /* Define Array vacio */
sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));/* Guarda Array vacio para funciones*/

/* capturar clickeo de boton calcular con JQuery */
$('#submit').click(function(evt){
    evt.preventDefault();
    limpiarInfo();/* evitar duplicado de creditos mostrados */
    calcular();
    mostrarCredito();
    console.log(JSON.parse(sessionStorage.getItem('listaCreditos')))
})

/* borrar creditos del array con JQuery*/
$('#reset').click(function(){
    console.log("limpiando");
    limpiarInfo();
    clearCredito();
})
