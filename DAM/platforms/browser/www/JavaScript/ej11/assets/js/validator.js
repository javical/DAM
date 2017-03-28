HTMLFormElement.prototype.validate = function(){
    console.log("Validate function");

    
    var validador = {
        required : function(val){
            ok = false;
            if (val){
                var required = val.querySelectorAll(".required");
                ok = true;
                var err = [];
                for (var i = required.length -1; i>=0; i--){
                    if (required[i].type === 'checkbox'){
                        if (!required[i].checked){
                            err.push(required[i].name);
                            if(!required[i].classList.contains('error')){
                                required[i].classList.add('error');
                            }
                        }
                    }
                    else if (required[i].value.split().join()  === ""){
                        err.push(required[i].name);
                        if(!required[i].classList.contains('error')){
                            required[i].classList.add('error');
                        }
                    }
                }
                if (err==="") {
                    ok = true;
                }
                else{
                    ok = err;
                }
            }
            return ok;
        },
        email : function(val){
            ok = false;
            if (val){
                ok = true;
                var err = "";
                //var expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
                var expreg = /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/;
                var email = val.querySelectorAll(".email");
                for (var i = email.length -1; i>=0; i--){
                    if (!expreg.test(email[i].value)){
                        err = "La dirección de email: "+ email[i].value +" no es correcta";
                        if(!email[i].classList.contains('error')){
                            email[i].classList.add('error');
                        }
                    }
                }
                ok = (err==="") ? true : err;
            }
            return ok;
        },
        longmax50 : function (val){
            ok = false;
            if (val){
                var longmax = val.querySelectorAll(".longmax50");
                var err = "";
                for (var i = longmax.length -1; i>=0; i--){
                    if (longmax[i].value.length>50){
                        err = "El máximo numero de caracteres en comentarios es de 50.";
                        if(!longmax[i].classList.contains('error')){
                            longmax[i].classList.add('error');
                        }
                    }
                }
                ok = (err==="") ? true : err;
            }
            return ok;
        },
        password : function(val){
            ok = false;
            if (val){
                var err = "";
                var password = val.querySelectorAll(".password");
                var expregdigito = /\d+/;
                var expreglongminima = /[\w\W]{6,}/;
                var expregmayuscula = /[A-Z]+/;
                var expregminuscula = /[a-z]+/;
                for (var i = password.length -1; i>=0; i--){
                    if (!(expregdigito.test(password[i].value) &&
                        expreglongminima.test(password[i].value) &&
                        expregmayuscula.test(password[i].value) &&
                        expregminuscula.test(password[i].value))){
                        err = "El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito";
                        if(!password[i].classList.contains('error')){
                            password[i].classList.add('error');
                        }
                    }
                }
                ok = (err==="") ? true : err;
            }

            return ok;
        }
    };


    var validate = function (e){
        console.log ("validando el formulario");
        //solo si hay errores
        e.preventDefault();

        var err = "";
        var errores = e.currentTarget.querySelectorAll('.error');
        if (errores){
            for (var i = errores.length - 1; i >= 0; i--){
                if (errores[i].classList.contains('error')){
                    errores[i].classList.remove('error');
                }   
            }
        }

        var req = validador.required(e.currentTarget);
        if (req !== true){
            //añadir el error
            if (req.length > 1){
                err = "Los campos: ";
            }
            else{
                err = "El campo ";
            }
            for (j = req.lengt-1; j>=0; j--){
                if (j===0){
                    if (req.length>1){
                        err += " y " + req[j];
                    }
                    else{
                        err = req[j];
                    }
                }
                else{
                    err += req[j];
                }
            }
            if (req.length > 1){
                err += " son obligatorios";
            }
            else{
                err += " es obligatorio";
            }
        }

        var em = validador.email(e.currentTarget); 
        if (em !== true){
        //añadir el error
            if (err.length > 0){
                err += "\r\n" +  em;
            }
            else{
                err += em;
            }
        }
        
        var lmax = validador.longmax50(e.currentTarget);
        if (lmax !== true){
        //añadir el error
            if (err.length > 0){
                err += "\r\n" +  em;
            }
            else{
                err  += lmax;
            }
        }

        var psw = validador.password(e.currentTarget);
        if (psw !== true){
        //añadimos el error
            if (err.length > 0){
                err += "\r\n" +  em;
            }
            else{
                err += psw;
            }
        }


        if (err !== ""){
            alert("Debes comprobar los siguientes campos: \r\n" + err);
        }
        else{
            //todo ha ido bien, mandamos el formulario.
            alert("Todo ha ido bien, mandamos el formulario.");
            return true;
        }
    };

    this.addEventListener('submit', validate, false);
    var valid = this.querySelectorAll('validateonblur');
    if (valid){
        for (var i = valid.length -1; i>=0; i--){
            valid[i].addEventListener('blur', validate, false);
        }
    }
    //this.addEventListener('blur', validate, false);

};