app.controller('EventosCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function ($scope, $firebaseObject, $firebaseArray) {
	var url = "https://oruro-como-llegar-d39af.firebaseio.com/evento";
	var ref = new Firebase(url);
//	$scope.eventos = [];
	$scope.eventos = $firebaseArray(ref);
/*	ref.orderByChild("created_at").on("child_added", function(data) {
  		console.log(data.val());
  		$scope.eventos = data.val();
	});	*/
	$scope.formatearFecha = function(fecha){
		var dia = fecha.getDate(); 
		var mes = parseInt(fecha.getMonth()) + 1;
		if (mes <10) {
			mes = "0"+mes;
		} 
		var anio = fecha.getFullYear();
		var fechaFormateada = anio+"-"+mes+"-"+dia; 
		return fechaFormateada;		
	}
	$scope.formatearFechaHora = function(fecha){
		var dia = fecha.getDate(); 
		var mes = parseInt(fecha.getMonth()) + 1;
		if (mes <10) {
			mes = "0"+mes;
		} 
		var anio = fecha.getFullYear();
		var horas = fecha.getHours();
		var minutos = fecha.getMinutes();
		var segundos = fecha.getSeconds();
		if (horas <10) {
			horas = "0"+horas;
		}
		if (minutos <10) {
			minutos = "0"+minutos;
		}
		if (segundos <10) {
			segundos = "0"+segundos;
		}
		var fechaFormateada = anio+"-"+mes+"-"+dia+" "+horas+":"+minutos+":"+segundos; 
		return fechaFormateada;		
	}
	$scope.guardar = function(evento){
		evento.fecha_inicio = $scope.formatearFecha(evento.fecha_inicio);
		evento.fecha_fin = $scope.formatearFecha(evento.fecha_fin);
		evento.activo = false;
		evento.posicion = 0;
		var ahora = new Date();
		evento.created_at = $scope.formatearFechaHora(ahora);
		$scope.eventos.$add(evento);
		$scope.evento = {};
	}
}])