/**
*   @file Ejercicio 4 | Ajax
*   @description Realizar un ejercicio, en el que, a través de una web, introduzcamos el número
*   correspondiente a un mes, y haciendo una consulta ajax al fichero meses.xml,
*   nos de la información de ese mes que aparece en el fichero.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'
window.onload = iniciar;

function iniciar(){

    let ejer4 = document.getElementById('ejer4');
    ejer4.onclick = ejercicio4;

}

function ejercicio4(){

    let mes = document.getElementById('input4');
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(objeto => document.getElementById('span2').innerHTML = `
            Hay ${objeto.weather[0].description} en ${objeto.name}`);

}