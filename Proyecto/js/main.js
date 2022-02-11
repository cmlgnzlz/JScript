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
    sucursales = false;
});

/* borrar creditos del array con JQuery*/
$('#reseteo').click(function(){
    limpiarInfo();
    clearCredito();
    sucursales = false;
});

/* boton de muestra de sucursales */
$('#scrsl').click(function(evt){
    evt.preventDefault();
    if (sucursales === false){
        mostrarSucursales();
    }
    else {
        alert('Ya esta disponible la informacion.');
    }
    sucursales = true;
});

/* eliminar un credito en particular */
$('.contenido__resultados').on('click',function(evt) {
    const i = evt.target.id; /* obtener id de boton presionado*/
    $("#" + evt.target.id).closest('div').remove();/* eliminar credito del DOM */
    var creditos = JSON.parse(sessionStorage.getItem('listaCreditos'));
    var nuevosCreditos = creditos.filter((credito) => credito.boton !== i);/* filtrar credito deseado mediante id obtenida, creando nuevo array */
    sessionStorage.setItem('listaCreditos',JSON.stringify(nuevosCreditos));/* reemplazo de array */
})

