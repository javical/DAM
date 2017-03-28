window.onload = function(){
    /*Utilizando las funciones de DOM mostrar por consola:

    1.- El numero de enlaces que hay en la pagina*/

    var enlaces = document.getElementsByTagName('a');
    console.log ("El numero total de enlaces es: " +  enlaces.length);

    enlaces = document.querySelectorAll('a');
    console.log ("El numero total de enlaces es: " +  enlaces.length);


    /*2.- Dirección a la que enlaza el penultimo enlace */
    //enlaces = document.getElementsByTagName('a'); ya los teníamos
    var enlace = enlaces[enlaces.length -2].href;

    console.log ("La dirección del penultimo enlace es: " +  enlace);

    /*3.- Numero de enlaces que enlazan a http://prueba*/
    var cont = 0;
    for (var i = enlaces.length - 1; i>=0; i--){
        //cont += (enlaces.item(i).href === "http://prueba") ? 1 : 0;
        if (enlaces.item(i).href === "http://prueba"){
            cont++;
        }
      
    }
    console.log ("El numero de enlaces a http://prueba es: " +  cont);

    /*otra forma*/
    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log ("El numero de enlaces a http://prueba es: " +  enlaces.length);


    /**/
    var parrafos = document.querySelectorAll('p');
    enlaces = parrafos[2].querySelectorAll('a');
    console.log ("El numero de enlaces en el tercer parrafo es: " +  enlaces.length);

    enlaces = document.querySelectorAll('body > p:nth-child(3) a');
    console.log ("El numero de enlaces en el tercer parrafo es: " +  enlaces.length);

};
