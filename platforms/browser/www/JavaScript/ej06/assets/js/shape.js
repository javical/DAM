/*Creamos un namespace, por que la variable Shape sería global y la podríamos borrar desde otro sitio*/
var App = App || { Model : {} };
App.Model.Shape = (function() {
    /*Variables privadas*/
    var _x,
        _y;
    
    /*Otra forma de declararlo
        var Shape = function (x, y){
        
        }
    */
    /*Constructor*/
    function Shape (x, y) {
        /* Esta forma de declarar las variables x e y hace que sean publicas y podamos acceder a ellas sin control.
        
        this.x = (typeof x === 'number') ? x : 0;
        this.y = (typeof y === 'number') ? y : 0;*/
        /*Esta forma hacemos que sean privadas y no visibles ni accesibles desde fuera, */
        _x = (typeof x === 'number') ? x : 0;
        _y = (typeof y === 'number') ? y : 0;

        /* si añadimos aqui la función move, ésta se comparte para todas las instancias. 
        Si cambias la funcion move en alguna instancia, se cambia para todas!!!!*/
        /*this.move = function(x, y){
            this.x += x;
            this.y += y ;           
        };*/

    }

    /*Esta forma de declarar las funciones, hace que no podamos modificarla desde las instancias... pero cada instancia tiene su copia de la funcion!!!*/
    Shape.prototype.move = function(x, y){
        _x += (typeof x === 'number') ? x :0;
        _y += (typeof y === 'number') ? y :0;
    }; 
    Shape.prototype.getX = function (){
        return _x;
    };
    Shape.prototype.getY = function (){
        return _y;
    };
    Shape.prototype.setX = function (x){
        _x = (typeof x === 'number') ? x : _x;
    };
    Shape.prototype.setY = function (y){
        _y = (typeof y === 'number') ? y : _y;
    };

    /*Tenermos que devolver el constructor, para que se pueda acceder a la clase Shape desde fuera, porque sino, sería privada.*/
    return Shape;
})();

/* 
IF TERNARIO 
if (typeof x === 'number'){
    this.x = x;
}
else{
    this.x = 0;
}
*/