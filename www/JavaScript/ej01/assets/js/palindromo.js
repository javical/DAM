(function() {
    var palindromo = function(texto) {
        var ok = false;
        var texto1 = (texto + "").replace(/\s/g, '').toLowerCase();
        var temp = texto1.split('').reverse().join('').toLowerCase();
        if(texto1 == temp){
            ok = true;
        }
        console.log((texto1 + "").toLowerCase());
        console.log((temp + "").toLowerCase());
        return ok;
    };
    console.log(palindromo("La ruta nos   aporto otro paso natural") === true);
    console.log(palindromo("radar") === true);
    console.log(palindromo("RadAr") === true);
    console.log(palindromo(100) === false);
    console.log(palindromo("1A") === false);
    console.log(palindromo(999999999) === true);
    console.log(palindromo(undefined) === false);
    console.log(palindromo({}) === false);
})();