var App = App || { Model : {} };
App.Model.Circle = (function() {
  var _radius;

  function Circle (x, y, radius) {
    /*
    Inyectar lo que yo recibo o cambiar el contexto de "this"  
    App.Model.Shape.call (this, x, y);
    App.Model.Shape.bind (this) (x,y);
    App.Model.Shape.apply (this, [x, y]);

    Solo cambia la manera de pasar los parametros.

    var ctx = {}
    ctx.messages = {
      en: "Hello";
      fr: "Salut";
    }

    function SayHi (lang, name){
      console.log (this.messages[lang], name);
    }
    */
    App.Model.Shape.call(this, x, y);

    _radius = (typeof radius === 'number') ? radius : 0;
  }
  //Indicamos el padre-
  Circle.prototype = Object.create(App.Model.Shape.prototype);
  Circle.prototype.constructor = Circle;

  Circle.prototype.getRadius = function(){
    return _radius;
  };
  Circle.prototype.setRadius = function(radius){
    _radius =(typeof radius === 'number') ? radius : _radius;
  };

  Circle.prototype.area = function (){
    return Math.PI * Math.pow(_radius, 2);
  };

  return Circle;
})();