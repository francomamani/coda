app.controller('DanzasCtrl', ['$scope', '$http', '$firebaseObject','$firebaseArray', function ($scope, $http, $firebaseObject, $firebaseArray) {
	var url = "https://oruro-como-llegar-d39af.firebaseio.com/danza";
	var urlFraternidad = "https://oruro-como-llegar-d39af.firebaseio.com/fraternidad";

	var ref = new Firebase(url);
	var refFraternidad = new Firebase(urlFraternidad);
	$scope.danza = {};
	$scope.fraternidad = {};
	$scope.danzaId = null;
	$scope.base = 0;
	$scope.vista = "danzas";

	$scope.danzas = $firebaseArray(ref);
	$scope.fraternidades = $firebaseArray(refFraternidad);
	var danzaCopia = {};
	$scope.guardar = function(danza){
		var data = {
			nombre: danza.nombre,
			descripcion: danza.descripcion
		};
		$scope.danzas.$add(data);
		$scope.danza = {};
		danza = {};
	}
	$scope.confirmar = function(danza){
		danzaCopia = $firebaseObject(new Firebase(url+"/"+danza.$id));
		$("#confirmacion").modal("show");
	}
	$scope.eliminar = function(){
		danzaCopia.$remove();
		$("#confirmacion").modal("hide");
		$scope.danzaCopia = {};
	}
	/*Fraternidades*/
	$scope.mostrarFraternidad = function(danza){
		//console.log(f.getHola());
		$scope.danzaId = danza.$id;
		$scope.fraternidad = new Fraternidad(danza.$id);
/*		$scope.fraternidades.forEach( function(fraternidad) {
			if (fraternidad.) {}
		});*/
		$scope.vista = "fraternidades";
	}
	$scope.mostrarDanzas = function(){
		$scope.vista = "danzas";		
	}
	$scope.guardarFraternidad = function(fraternidad){
		$scope.fraternidades.$add(fraternidad);
		fraternidad.nombre = "";
		//document.getElementById("nombreFraternidad").focus();
	}


/*	$scope.base = 'http://192.168.0.106:3000/danzas/';
	$scope.danzas = [];
	$http.get($scope.base).then(function(danzas){
		$scope.danzas = danzas.data;
	});	

	$scope.guardar = function(danza){

		$http.post($scope.base + 'guardar', data).then(function(object){
			
			$scope.danzas.push(object.data);
		});
	}*/

}]);