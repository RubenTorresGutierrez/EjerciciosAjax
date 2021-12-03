/**
*   @file Ejercicio 2 | Ajax
*   @description Introducir el tiempo de Badajoz, en una página web. Para ello nos bajaremos el
*   fichero XML que nos proporciona la página www.tutiempo.net
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

    let ejer2 = document.getElementById('ejer2');
    ejer2.onclick = ejercicio2;

}

function ejercicio2(){

    const appId = '52b8161b672d49cc8cddf491cba61fdd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Badajoz,Spain&lang=es&&units=metric&appid=${appId}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(objeto => document.getElementById('span2').innerHTML = `
            Hay ${objeto.weather[0].description} en ${objeto.name}`);

}