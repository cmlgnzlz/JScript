import { calcular } from "./credito.js"
/* interes por cada tipo de cuota */
localStorage.setItem('interes1', 1.15);
localStorage.setItem('interes2', 1.20);
localStorage.setItem('interes3', 1.30);

/* capturar clickeo de boton calcular */
const simula=document.getElementById('submit')
simula.addEventListener("click", function() { 
    calcular();
})
