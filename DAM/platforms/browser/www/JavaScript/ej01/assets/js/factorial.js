    var factorial = function(num) {
        var ok = false;
        if(parseInt(num) && (parseInt(num) === num) && num < 100000){
            var resul = 1;
            for(var i = 0; i <= num; i++) {
                resul= resul * i;
            }
            console.log ("El factorial de: " +  num + " es: "+ resul); 
            ok = true;
        }
        else{
            console.log ("Debes introducir un número menor de 100000");
        }
    };
    console.log(factorial(1) === true);
    console.log(factorial(2) === true);
    console.log(factorial(0) === true);
    console.log(factorial(100) === true);
    console.log(factorial("1A") === false);
    console.log(factorial(999999999) === false);
    console.log(factorial(undefined) === false);
    console.log(factorial({}) === false);
})();
