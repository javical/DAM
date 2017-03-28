(function() {
    var upper = function(texto) {
        /*
        si devuelve 0 --> texto en mayusculas;
        si devuelve 1 --> texto en minúsculas;
        eoc --> texto mixto;
        */
        var res = -1;
        var temp = (texto + "").toUpperCase();
        if (temp == texto){
            res = 0;
        }
        else{
        temp = (texto + "").toLowerCase();
            if (temp == texto){
                res =  1;    
            }
        } 
        switch (res){
            case 0:
                console.log("El texto está en mayusculas.");
                break;
            case 1:
                console.log("El texto está en minusculas.");
                break;
            default:
                console.log("El texto está en mayusculas y minúsculas");
        }  
        return res;
    };
    console.log(upper("texto mIXto en MAyusculas!2394") === -1);
    console.log(upper("texto minusculas") === 1);
    console.log(upper("TEXTO EN MAYUSCULAS") === 0);
    console.log(upper(100) === 0);
    console.log(upper("1A") === 0);
    console.log(upper(999999999) === 0);
    console.log(upper(undefined) === -1);
    console.log(upper({}) === -1);
})();