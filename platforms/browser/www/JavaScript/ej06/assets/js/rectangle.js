var App = App || { Model : {} };
App.Model.Rectangle = (function() {
  var _lside;

  function Rectangle (x, y, sside, lside) {

    App.Model.Square.call(this, x, y, sside);

    _lside = (typeof lside === 'number') ? lside : 0;
  }
  //Indicamos el padre-
  Rectangle.prototype = Object.create(App.Model.Square.prototype);
  Rectangle.prototype.constructor = Rectangle;

  Rectangle.prototype.getLongSide = function(){
    return _lside;
  };
  Rectangle.prototype.setLongSide = function(lside){
    _lside =(typeof lside === 'number') ? lside : _lside;
  };

  Rectangle.prototype.area = function (){
    // return this.prototype.getShortSide.call(this);
    return this.getShortSide()*_lside;
  };

  return Rectangle;
})();