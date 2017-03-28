window.onload = function(){
    
    var lista = document.querySelectorAll('#lista');
    var boton = document.querySelectorAll('#addbtn');
    var cont = 0;

    var anade = function(){
        if(lista.length){

            // Crear nodo de tipo Element
            var linew = document.createElement("li");
 
            // Crear nodo de tipo Text
            var contenido;
            if (++cont%2){
                contenido = document.createTextNode("Lorem ipsum dolor sit amet");
            }
            else {
                contenido = document.createTextNode("Consectetuer adipiscing elit");
            }

            // Añadir el nodo Text como hijo del nodo Element
            linew.appendChild(contenido);
 
            // Añadir el nodo Element como hijo de la pagina
            //document.body.appendChild(linew);
            lista[0].appendChild(linew);
        }
    };

    /*Añadimos un 'escuchador' de eventos para capturar el onclick*/

    if (boton.length){
        /* tiene 3 parametros:
            1.- que evento
            2.- que se hace
            3.- */
        boton[0].addEventListener('click', anade,true);
    }

};
