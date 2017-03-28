(function() {

function Persona (nombre, edad, genero) {
  this.nombre = nombre || "";
  this.edad = edad || "0";
  this.genero = genero || "Masculino";
  this.obtDetalles = function(){
            return "Nombre: " + this.nombre + "/r/n" + "Edad: " + this.edad + "/r/n" + "Género: " + this.genero + "/r/n";
        };
}
 
function Estudiante (nombre, edad, genero, curso, grupo) {
  this.base = Persona;
  this.base(nombre, edad, genero);
  this.curso = curso || '';
  this.grupo = grupo || '';
  this.obtDetalles = this.prototype.obtDetalles() + "Curso: " + this.curso + "/r/n" + "Grupo: " + this.grupo + "/r/n";
  this.registrar = function(){
    var ok = true;
    return ok;
  };
}

function Profesor (nombre, edad, genero, asignatura, nivel){
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
    this.obtDetalles = this.prototype.obtDetalles() + "Asignatura: " + this.asignatura + "/r/n" + "Nivel: "+this.nivel + "/r/n";
    this.asignar = function(){
        var ok = true;
        return ok;
    };
}



})();

