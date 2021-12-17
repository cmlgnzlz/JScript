import { Credito } from "./credito.js";
import { calcular } from "./credito.js"

localStorage.setItem('interes1', 1.15);
localStorage.setItem('interes2', 1.20);
localStorage.setItem('interes3', 1.30);

const simula=document.getElementById('submit')
simula.addEventListener("click", function() { 
    calcular();
})
