window.onload = function(){
  var input  = document.getElementById('number');
  var button = document.getElementById('Calcular');
  var result = document.getElementById('result');

  var worker = new Worker('./assets/js/webworker.js');

  /*function getPrimes(max){
     var sieve = [], i, j, primes = [];
      for (i = 2; i <= max; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              for (j = i << 1; j <= max; j += i) {
                  sieve[j] = true;
              }
          }
      }
      return primes;
  }
  */


  button.addEventListener('click', function(e){
    e.preventDefault();
    var num = input.value;
    worker.postMessage(num);
  });

  worker.addEventListener('message', function(e){
    var primes = e.data;
    result.innerHTML = primes.join(' ');
  });
};