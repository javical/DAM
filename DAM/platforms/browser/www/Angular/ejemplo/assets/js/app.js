window.onload = function(){
    var input = document.getElementById('name'),
        span = document.getElementById('target');

    input.addEventListener ('keyop', function(e){
            console.log ('change event');
            span.innerText = ths.value;
    }, false );
};