$(function(){
    var options = [];
    var $sprov = $('#provincias'),
        $smuni = $('#municipios');   

    var crearopciones = function(json, tipo, $obj){
        options = [];
        if(tipo === 'provincia'){
            options.push(new Option('Selecciona una provincia: '), -1);
        }
        else{
            options.push(new Option('Selecciona un municipio: '), -1);
        }

        for (var i in json){
            options.push(new Option(json[i], i));
        }
        $obj.children().remove();
        $obj.append(options);
        $obj.removeAttr('disabled');
    };

    var cargarMunicipios = function(e){
        console.log(e);
        var cp = $sprov.val();
        console.log (cp);
        //pedimos los municipios de la provincia cp
        $.ajax('../servidor/cargaMunicipiosJSON.php', {
            method: 'POST',
            data: {
                provincia : cp
            },
            dataType: 'json',
            success : function(municipios){
                console.log(municipios);
                crearopciones(municipios, 'municipios', $smuni);
            }
        });

    };
    $.getJSON( '../servidor/cargaProvinciasJSON.php', {}, function(provincias){
        //var listaprov = JSON.parse(provincias);

       /* options = [];
        options.push(new Option('Selecciona una provincia: '), -1);
        //console.log(provincias);
        for (var i in provincias){
            options.push(new Option(provincias[i], i));
        }
        $sprov.children().remove();
        $sprov.append(options);
        $sprov.removeAttr('disabled');*/
        crearopciones(provincias, 'provincia', $sprov);
        $sprov.on('change', cargarMunicipios);
    });

});
