var ref = require('./conexion.js');

function Fraternidad(id){
	this.danzaId = null;
	this.id = id;
	this.imagen = null;
	this.latitud = 0.0;
	this.longitud = 0.0;
	this.horaInicio = null;
	this.horaActual = null;
	this.horaFinal = null;
	this.nombreUbicacion = null;
	this.distancia = 0;
	this.nombre = null;
	this.estado = 0;
};

Fraternidad.prototype = {
	getDanzaId: function(){
		return this.danzaId;
	},
	getId: function(){
		return this.id;
	},	
	getImagen: function(){
		return this.imagen;
	},
	getLatitud: function(){
		return this.latitud;
	},
	getLongitud: function(){
		return this.longitud;
	},		
	getHoraInicio: function(){
		return this.horaInicio;
	},
	getHoraActual: function(){
		return this.horaActual;
	},
	getHoraFinal: function(){
		return this.horaFinal;
	},
	getNombre: function(){
		return this.nombre;
	},
	getNombreUbicacion: function(){
		return this.nombreUbicacion;
	},
	getDistancia: function(){
		return this.distancia;
	},
	getEstado: function(){
		return this.estado;
	},
	setId: function(id){
		this.id = id;
	},
	setDanzaId: function(danzaId){
		this.danzaId = danzaId;
	},
	setImagen: function(imagen){
		this.imagen = imagen;
	},
	setLatitud: function(latitud){
		this.latitud = latitud;
	},
	setLongitud: function(longitud){
		this.longitud = longitud;
	},			
	setHoraInicio: function(horaInicio){
		this.horaInicio = horaInicio;
	},
	setHoraActual: function(horaActual){
		this.horaActual = horaActual;
	},
	setHoraFinal: function(horaFinal){
		this.horaFinal = horaFinal;
	},
	setNombre: function(nombre){
		this.nombre = nombre;
	},
	setNombreUbicacion: function(nombreUbicacion){
		var nombreUbicacionRef= ref.child("fraternidad/"+this.getId()+"/nombreUbicacion");		
		nombreUbicacionRef.set(nombreUbicacion);
		this.nombreUbicacion = nombreUbicacion;
	},
	setDistancia: function(distancia){
		this.distancia = distancia;
	},
	setEstado: function(estado){
		var estadoRef= ref.child("fraternidad/"+this.getId()+"/estado");		
		estadoRef.set(estado);
		this.estado = estado;
	}, 
	toString: function () {
		return this.nombre;
	}, 
	toJson: function () {
		return {
			'danzaId': this.danzaId, 
			'imagen': this.imagen,
			'latitud': this.latitud,
			'longitud': this.longitud,
			'horaInicio': this.horaInicio,
			'horaActual': this.horaActual,
			'horaFinal': this.horaFinal,
			'nombreUbicacion': this.nombreUbicacion,
			'distancia': this.distancia,
			'nombre': this.nombre,
			'estado': this.estado
		}
	}
}
module.exports = Fraternidad;