app.controller('PosicionesCtrl', ['$scope', '$firebaseObject','$firebaseArray', function ($scope, $firebaseObject,$firebaseArray) {
	var urlFraternidad = "https://oruro-como-llegar-d39af.firebaseio.com/fraternidad";
	var urlEvento = "https://oruro-como-llegar-d39af.firebaseio.com/evento";

	var refEvento = new Firebase(urlEvento);
	var refFraternidad = new Firebase(urlFraternidad);
	$scope.eventos = $firebaseArray(refEvento);
	$scope.fraternidades = $firebaseArray(refFraternidad);

	$scope.asignacion = function(posicion){

		var refAsignacion = new Firebase('https://oruro-como-llegar-d39af.firebaseio.com/fraternidad/'+posicion.fraternidad_id);
		var cantidad = 0;
		refAsignacion.on('value', function(data){
			cantidad = data.numChildren();
		});		
//		if (cantidad <=11 ) {
			var refAsignacion2 = new Firebase('https://oruro-como-llegar-d39af.firebaseio.com/fraternidad/'+posicion.fraternidad_id+'/posicionEventos');
			var claveSabado = '-KdhGDOvyUeuVbYCREYm';
			var valorSabado = posicion.numero_sabado;
			var claveDomingo = '-KdhG2Un1i84J_lfw_i9';
			var valorDomingo = posicion.numero_domingo;
			var json = "";
			json = '{"'+claveSabado+'":'+valorSabado+',"'+ 
						claveDomingo+'":'+valorDomingo+'}';
			var json2 = JSON.parse(json); 
			posicion.numero_sabado = "";	
			posicion.numero_domingo = "";	
			refAsignacion2.set(json2);	
			console.log("guardado")
//		}
	}
	
}])