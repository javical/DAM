(function() {
    var par = function(num) {
        var ok = false;
        var paramok = false;
        var numpares = ['0', '2', '4', '6', '8'];
        if(parseInt(num) && (parseInt(num) === num)){
            paramok = true;
            if (numpares.lastIndexOf(num[num.length-1]) >= 0){
            ok = true;
            }
        }
        if (ok){
            console.log("El numero es par.");
        }
        else{
            if (paramok){
                console.log("El numero es impar.");
            }
            else{
                console.log("El parametro proporcionado no es un número.");
            }

        }
        return ok;
    };
    console.log(par(1) === false);
    console.log(par(2) === true);
    console.log(par(0) === true);
    console.log(par(100) === true);
    console.log(par("1A") === false);
    console.log(par(999999999) === false);
    console.log(par(undefined) === false);
    console.log(par({}) === false);
})();
