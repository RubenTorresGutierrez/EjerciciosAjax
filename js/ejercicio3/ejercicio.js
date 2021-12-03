/**
*   @file Ejercicio 3 | Ajax
*   @description Consultar la página de imdb, para consultar los datos de una película.
*   Utilizaremos la siguiente url:
*   http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=Star%20Wars
*   donde título será la película a consultar.
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

    let ejer3 = document.getElementById('ejer3');
    ejer3.onclick = ejercicio3;

}

function ejercicio3(){

    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=Star%20Wars')
        .then(respuesta => respuesta.json())
        .then(objeto => document.getElementById('span3').innerHTML = objeto.Director);

}