function Danza(nombre, descripcion){
	this.nombre = nombre;
	this.descripcion = descripcion;
};
Danza.prototype = {
	getNombre: function(){
		return this.nombre; 
	}, 
	getDescripcion: function(){
		return this.descripcion;
	}, 
	setNombre: function(nombre){
		this.nombre = nombre;
	}, 
	setDescripcion: function(descripcion){
		this.descripcion = descripcion;
	}
};
module.exports = Danza;