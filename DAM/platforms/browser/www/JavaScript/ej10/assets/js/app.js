window.onload = function(){
    
    var lista = document.getElementById('lista');
    var boton = document.querySelectorAll('#addbtn');
    var cont = 0;

    var anade = function(e){
        e.stopPropagation();
        if(lista){

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
            lista.appendChild(linew);
        }
    };

    var log = function(){
        console.log("Click on " + this + ' on ' + new Date());
    };

    var remove = function(e){
        if (e.target instanceof HTMLLIElement){      
            if(confirm('Seguro que desea eliminar este elemento?')){
                this.removeChild(e.target);
            }
        }
    };
    /*Añadimos un 'escuchador' de eventos para capturar el onclick*/

    if (boton.length){
        /* tiene 3 parametros:
            1.- que evento
            2.- que se hace
            3.- */
        boton[0].addEventListener('click', anade,true);
        //boton[0].addEventListener('click', log, false);
    }
    if (lista){
        lista.addEventListener('click', remove, false);
    }

    document.addEventListener('click', log, false);
};
