import { calcular , mostrarCredito, limpiarInfo, clearCredito, mostrarSucursales} from "./credito.js"

localStorage.setItem('interes1', 1.15); /* interes por cada tipo de cuota */
localStorage.setItem('interes2', 1.20);
localStorage.setItem('interes3', 1.30);
let creditos = [];   /* Define Array vacio */
sessionStorage.setItem('listaCreditos',JSON.stringify(creditos));   /* Guarda Array vacio para funciones*/
var sucursales = false;

/* capturar clickeo de boton calcular con JQuery */
$('#submit').click(function(evt){
    evt.preventDefault();
    limpiarInfo();/* evitar duplicado de creditos mostrados */
    calcular();
    mostrarCredito();
    console.log(JSON.parse(sessionStorage.getItem('listaCreditos')));
});

/* borrar creditos del array con JQuery*/
$('#reset').click(function(){
    limpiarInfo();
    clearCredito();
    sucursales = false;
});

/* boton de muestra de sucursales */
$("#scrsl").click(function(evt){
    evt.preventDefault();
    console.log(sucursales)
    if (sucursales === false){
        mostrarSucursales();
    }
    else {
        alert('Ya esta disponible la informacion.')
    }
    sucursales = true;
});

$(".contenido__resultados").on('click',function(evt) {
    console.log(evt.target.id)
    let i = evt.target.id
    console.log(i)
    $("#" + evt.target.id).closest('div').remove()
    var creditos = JSON.parse(sessionStorage.getItem('listaCreditos'));
    console.log(creditos)
    sessionStorage.setItem('listaCreditos',JSON.stringify(creditos))
})