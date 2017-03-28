window.onload = function(){

    var loaded = false,
        video = document.getElementById('videorep'),
        biniciar = document.getElementById('Iniciar'),
        bpausar = document.getElementById('Pausar'),
        bparar = document.getElementById('Parar'),
        bavanzar = document.getElementById('Avanzar'),
        bretroceder = document.getElementById('Retroceder'),
        binicio = document.getElementById('Inicio'),
        bfin = document.getElementById('Fin'),
        bfullscreen = document.getElementById('fullscreen'),
        bvolumen = document.getElementById('Volumen'),
        bprogreso = document.getElementById('Progreso'),
        playlist = document.getElementById('tracklist');

    var posvideo = 0;
    var volumen = 0;

    var canplayF = function(e){
        console.log ('canplay detectado');
        loaded = true;
        bvolumen.value = video.volume*100;
        bprogreso.value = 0;
    };
    var playPauseFn = function(e) {
        if (loaded) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };
    var iniciar = function(e){
        e.preventDefault();
        if (video && loaded){
            video.play();
        }
    };
    var pausar = function(e){
        e.preventDefault();
        if (video && loaded){
            video.pause();
        }
    };
    var parar = function(e){
        e.preventDefault();
         if (video && loaded){
            video.pause();
            video.currentTime = 0;
        }
    };
    var avanzar = function(e){
        e.preventDefault();
        if (video && loaded){
            video.currentTime += 10;
        }
    };
    var retroceder = function(e){
        e.preventDefault();
        if (video && loaded){
            video.currentTime -= 10;
        }
    };
    var inicio = function(e){
        e.preventDefault();
        if (video && loaded){
            video.currentTime = 0;
        }
    };
    var fin = function(e){
        e.preventDefault();
        if (video && loaded){
            video.currentTime = video.duration;
        }    
    };

    var mvolumen = function(e){
        if (video && loaded){
            video.volume =  this.value/100;
        }
    };
    var mprogreso = function(e){
        if (loaded && video && bprogreso){
            bprogreso.value = video.currentTime / video.duration *100;
        }
    };
    var playpausefunc = function(e){
        if (video && loaded){
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };


    var changeVideo = function(e){
        var src = e.target.dataset.src;
        stop(e);
        var ext = ".";
        if (Modernizr.video.h264){
            ext = ".mp4";
        }
        else{
            ext = ".webm";
        }
        if (video && loaded){
            video.src = src + ext;
        }
        video.load();
        video.play();
    };
    console.log("añadiendo eventos");
    if (video){
        video.addEventListener('canplay', canplayF, true);
        video.addEventListener('click', playpausefunc, false);
        video.addEventListener('timeupdate', mprogreso, false);
        console.log("añadiendo eventos click, canplay y timeupdate");
    }

    if (biniciar){
        biniciar.addEventListener('click', iniciar,false);
    }
    if (bpausar){
        bpausar.addEventListener('click', pausar,false);
    }
    if (bparar){
        bparar.addEventListener('click', parar,false);
    }
    if (bavanzar){
        bavanzar.addEventListener('click', avanzar,false);
    }
    if (bretroceder){
        bretroceder.addEventListener('click', retroceder,false);
    }
    if (binicio){
        binicio.addEventListener('click', inicio,false);
    }
    if (bfin){
        bfin.addEventListener('click', fin,false);
    }
    if (bvolumen){
        bvolumen.addEventListener('input', mvolumen, false);
    }
    if (tracklist){
        tracklist.addEventListener('click', changeVideo, false);
    }
    if (bfullscreen){
        bfullscreen.addEventListener('click', fullScreenclick, false);
    }

    var fullScreenclick = function (e){
        console.log("fullScreen pulsado");
        dofullScreen();
        console.log("ejecutado dofullScreen()");
    }

    function dofullScreen (){
        var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||
                             (document.mozFullScreen || document.webkitIsFullScreen);
        if (!isInFullScreen){
            if (video.requestFullScreen){
                video.requestFullScreen();
            }else if (video.mozRequestFullScreen){
                video.mozRequestFullScreen();
            }else if (video.webkitRequestFullScreen){
                video.webkitRequestFullScreen();
            }
        }
    }
};


