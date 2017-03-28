window.onload = function(){

    var entradadatos = document.querySelectorAll('input, textarea');
    var storage = localStorage;
    var prefix = 'ej03_prefix_';

    var salvardatosSesion = function(e){
        storage.removeItem(prefix + this.name);
        storage.setItem(prefix + this.name, this.value);
    };

    for (var i = entradadatos.length - 1; i>=0; i--){
       /* if (storage.getItem(prefix + entradadatos.item(i).name)){
            entradadatos.item(i).value = storage.getItem(prefix + entradadatos.item(i).name);
        }*/
        entradadatos.item(i).addEventListener('input', salvardatosSesion);
    }

    var showData = function(key, value){
        for (var k = entradadatos.length - 1; k >=0; k--){
            var name = key.replace(prefix, '');
            if (entradadatos.item(k).name === name){
                entradadatos.item(k).value = value;
            }
        }
    };

    if (storage.length){
        for (var j =storage.length - 1; j >=0; j--){
            var key = storage.key(j);
            showData(key, storage.getItem(key));
        }
    }
    var handleStorage = function(e){
        showData(e.key, e.newValue);
    };

    window.addEventListener('storage', handleStorage);


};


