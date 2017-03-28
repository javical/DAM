(function(){

    var map, 
        myOptions;

    navigator.geolocation.getCurrentPosition(function(position){
        
        console.log ('Geolocalizando....');
        console.log(position);

        var punto = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        var myOptions = {
           zoom: 15, 
           center: punto, 
           mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("mostrarMapa"),  myOptions);
        

        var marker = new google.maps.Marker({
           position:punto,
           map: map,
           title:"Título del mapa"});

    });


})();


