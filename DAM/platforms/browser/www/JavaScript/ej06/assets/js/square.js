var App = App || { Model : {} };
App.Model.Square = (function() {
  var _sside;

  function Square (x, y, sside) {

    App.Model.Shape.call(this, x, y);

    _sside = (typeof sside === 'number') ? sside : 0;
  }
  //Indicamos el padre-
  Square.prototype = Object.create(App.Model.Shape.prototype);
  Square.prototype.constructor = Square;

  Square.prototype.getShortSide = function(){
    return _sside;
  };
  Square.prototype.setShortSide = function(sside){
    _sside =(typeof sside === 'number') ? sside : _sside;
  };

  Square.prototype.area = function (){
    return Math.pow(_sside, 2);
  };

  return Square;
})();