(function(){
    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log ("s1 punto x: " + s1.getX());
    console.log ("s1 punto y: " + s1.getY());

    var s2 = new App.Model.Shape(10,10);
    s2.move(5,5);
    console.log (s2);
    console.log ("s2 punto x: " + s2.getX());
    console.log ("s2 punto y: " + s2.getY());

    s2.setY(0);
    console.log ("s2 punto x: " + s2.getX());
    console.log ("s2 punto y: " + s2.getY());

    var c = new App.Model.Circle(10, 10, 2);
    console.log("c punto x: " + c.getX());
    console.log("c punto y: " + c.getY());
    console.log("c radio: " +  c.getRadius());
    console.log("c area; " + c.area());
    console.log(c);

    var s = new App.Model.Square(10, 10, 5);
    console.log("s punto x: " + s.getX());
    console.log("s punto y " + s.getY());
    console.log("s lado: " + s.getShortSide());
    console.log("s area; " + s.area());
    console.log(s);

    var r = new App.Model.Rectangle(10, 10, 5, 20);
    console.log("r punto x: " + r.getX());
    console.log("r punto y: " + r.getY());
    console.log("r lado corto: " + r.getShortSide());
    console.log("r lado largo: " + r.getLongSide());
    console.log("r area: " + r.area());
    console.log(r);
})();
