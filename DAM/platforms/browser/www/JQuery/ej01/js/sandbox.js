$(function(){
    //1.- seleccionar todos los elementos de tipo div con clase module
    var $divs = $('div.module');

    //2.- Especificar tres selecciones que puedan seleccionar el tercer 
    //ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
    var $li = $('#myList li:nth-child(3)');
    var $lis = $('#myList > li');
    
    $lis.on('click', function(e){
        console.log(e);
        console.log(this);
    });

    console.log ($lis.eq(2));
    
    var $ul = $('#myList');
    console.log($ul.find('li').eq(2));

    //3.- Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var $input = $('input[name="q"]');
    //                     dame el input con atributo name
    var $label = $('label[for="' + $input.attr('name')+ '"]');

    console.log($label);

    //4.- Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    var $hidden = $(':hidden');
    console.log ($hidden.length);
    //para cada uno de los elementos escondidos ejecuta la siguiente funcion 
    $hidden.each(function(idx, elem){
        //(pintarlo en consola)
        console.log(elem);
        // mostrarlo
        $(elem).show();
        // ocultarlo
        $(elem).hide();
    });

    //5.- Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    var $imgs = $('img');
    $imgs.each(function(idx, elem){
        console.log(elem.alt);
        //no tiene sentido hacer lo siguiente:
        console.log($(elem).attr('alt'));
    });

    //6.- Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    $input.closest('form').addClass('form');
    //borrarle la clase
    $input.closest('form').removeClass('form');
    //si ya tiene la clase se la quita, y si no se la pone.
    $input.closest('form').toggleClass('form');


    //7.- Seleccionar el ítem que posee la clase "current" dentro de la lista #myList y remover dicha clase 
    //en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');

    //8.- Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    var $submit = $('#specials select').closest('ul').find('input[type="submit"]');

    //9.- Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase "current" al 
    //mismo y luego añadir la clase "disabled" a los elementos hermanos.
    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');

    //10.- Añadir 5 nuevos ítems al final de la lista desordenada #myList.
    //var $list = $('#myList');

    //PROHIBIDISIMO HACER LO SIGUIENTE: //añadir cosas al dom dentro de un bucle!!
    /*for (var i = 0; i< 5; i++){
        $ul.append('<li>Element '+ i + '</>');
    }*/
    //creamos los objetos a añadir (con bucle si es necesario)
    var lisis = [];
    for (var i = 0; i< 5; i++){
        lisis.push('<li>Element '+ i + '</>');
    }
    //pero se los añadirmos de un tiron al dom, sin bucles!!!
    $ul.append(lisis.join(''));
    //11.- Remover los ítems impares de la lista.
    $ul.find('li:even').remove();//odd para los pares


    //para añadir html de manera más limpia podemos hacer:
    //Creamos lo que queremos añadir
    $li = $('<li/>', {
        class : 'current',
        text : 'Node list',
        id : 'myli'
    });
    //y hay dos formas de añadirlo:
    
    //ul añade el li
    $ul.append($li);
    //li se añade a lu
    $li.appendTo($ul);

    //12.- Añadir eventos a lis (tanto nuevos como originales, hacemos por delegación de eventos)
    //con $ul.one('click', function(){}) solo se hace una vez la funcion!!
    $ul.on('click', 'li', function(e){
        console.log(e);
        console.log(this);
    });
});