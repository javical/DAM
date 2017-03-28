var validator ={
    required : function(value){
        return value !== undefined &&
               value !== null &&
               value.length >0 &&
               /^\s+$/.test(value);
    },
    email : function(value){
        return /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(value);
    },
    password : function(value){
        return validator.required(value) && 
               /\d+/.test(value)&&
               /[\w\W]{6,}/.test(value) &&
               /[A-Z]+/.test(value) &&
               /[a-z]+/.test(value);
    },
    longmax50 : function(value){
        return value.length <= 50;
    }    
};

var errors =[];
var required = this.querySelectorAll ('.required');
var emails = this.querySelectorAll('.email');

var validateForm = function (e){
    console.log ('validando formulario....');
    

    for(var i = 0; i<required.length ; i++){
        var input = required.item(i);
        validateRequired.call(input);
    }
    for (i=0; i<email.length; i++){
        var email = email.item (i);
        if (!validator.email(email.value)){
            errors.push(email.name + 'no es correcto.');
        }
    }

    if (errors.length){
        e.preventDefault();
        //showError.call(this);
    }
};

var validateRequired = function (e){
    errors = [];
    if (this.type === 'checkbox' && !this.checked){
        errors.push (this.name + ' no está marcado.');
    } else if (this.type === 'password') {
        if (!validator.password(this.value)){
            errors.push (this.name + ' no es un password valido.');
        }else{
            if (!validator.required(this.value)){
                errors.push (this.name + ' es obligatorio.');
            }
        }
    }
    if (errors.length){
        showError.call(this, errors.join('\n'));
    }

};

var showError = function(msgError){
    //creamos un nodo span
    var span = document.createElement('span');
    span.innerText = msgError;
    this.parentNode.appenChild(span);
    this.parentNode.classList.add('has-error');
    //this.parentNode.querySelectorAll('.hidden')[0].classList.remove('hidden');
    //añadimos el span, le ponemos el error, y lo mostramos
};


this.addEventListener('submit', validateForm, false);

for (var i = required.length -1; i>=0; i--){
    required[i].addEventListener('blur', validateRequired, false);
}


/*
var obj = {};

Object.defineProperty(obj, 'edad', {
    get: function(){
        console.log
    }
})
}

*/