$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var txtinput = document.getElementById('input');
    var spanstatus = document.getElementById('status');
    var content = $('#content');
    var unamed = true;
    var connected = false;

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        console.log ('WebSocket not supported!!');
        return false;
    }
    console.log ('WebSocket supported');

    window.WebSocket = window.WebSocket || window.MozWebSocket;
   
    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /* Abrir la conexion con ws://www.arkaitzgarro.com:1337*/
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    var socketopen = function(e){
        txtinput.disabled = false;
        connected = true;
        txtinput.addEventListener('keyup', function(e){
            if (e.keyCode ===13){
                e.preventDefault();
                sendMessage(txtinput.value);
            }
        });
        console.log('WebSocket opened!');
    };
    var socketclose = function(e){
        console.log ('WebSocket closed');
        connected = false;
    };
    var handlemessage = function(e){
        try{
            //escuchamos los mensajes.
            console.log (e);
            var msgs = JSON.parse(e.data);
            switch(msgs.type){
                case 'color':
                    myColor = msgs.data;
                    spanstatus.style.color = myColor;
                    break;
                case 'history':
                    var hystory = msgs.data;
                    for (var i = 0; i < hystory.length; i++) {
                        var mgs = (hystory[i]);
                        addMessage(mgs.author, mgs.text, mgs.color, new Date(mgs.time));
                    }
                    break;
                case 'message':
                    var msg = msgs.data;
                    addMessage(msg.author, msg.text, msg.color, new Date(msg.time));
                    break;
                default:
                    break;
            }
        }
        catch(err){
            console.log('Error with json message: ' + e.data);
        }
    };
    var socketerror = function (e){
        console.log('Error en socket: ' + e);
    };
    function sendMessage (mensaje){
        console.log (mensaje);
        if (unamed){
            //es el primer mensaje, tenemos que mandar el nombre y recibir el color.
            myName = mensaje;
            console.log(spanstatus);
            spanstatus.innerHTML = myName;
            socket.send(mensaje);
            txtinput.value = "";
            unamed = false;
        }
        if (connected){
            socket.send(mensaje);
            txtinput.value = "";
            //addMessage(myName, myColor, mensaje, (new Date()).getTime().toString());
        }
        else{
            txtinput.disabled = true;
        }
    }

    socket.addEventListener('open', socketopen);
    socket.addEventListener('close', socketclose);
    socket.addEventListener('message', handlemessage);
    socket.addEventListener('error', socketerror);

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' +
             (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + 
             ': ' + message + '</p>');
    }
});