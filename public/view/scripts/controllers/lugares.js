app.controller('LugaresCtrl', ['$scope',
 '$firebaseObject',
 '$firebaseArray',
 function ($scope, $firebaseObject, $firebaseArray) {
	var url = "https://oruro-como-llegar-d39af.firebaseio.com/categoria";
	var ref = new Firebase(url);
	var urlLugar = "https://oruro-como-llegar-d39af.firebaseio.com/lugar";
	var refLugar = new Firebase(urlLugar);

	$scope.categorias = $firebaseArray(ref);
	$scope.categoriaCopia = {};
	$scope.categoriaId = null;
	$scope.vista = "categorias";

	/*lugares*/
	$scope.lugares = $firebaseArray(refLugar);

	$scope.guardar = function(categoria){
		var data = {
			nombre: categoria.nombre,
			tipo: categoria.tipo
		};
		$scope.categorias.$add(data);
		$scope.categoria = {};
		categoria = {};
	}	
	$scope.confirmar = function(categoria){
		categoriaCopia = $firebaseObject(new Firebase(url+"/"+categoria.$id));
		$("#confirmacion").modal("show");
	}
	$scope.eliminar = function(){
		categoriaCopia.$remove();
		$("#confirmacion").modal("hide");
		$scope.categoriaCopia = {};
	}	
	$scope.mostrarLugar = function(categoria){
		$scope.categoriaId = categoria.$id;
		//$scope.fraternidad = new Fraternidad(lugar.$id);
		$scope.vista = "lugares";
	}
	$scope.guardarLugar = function(lugar){
		lugar.latitud = parseFloat(lugar.latitud);
		lugar.longitud = parseFloat(lugar.longitud);
		lugar.categoriaId = $scope.categoriaId; 
		$scope.lugares.$add(lugar);
		lugar.nombre = "";
		lugar.telefono = "";
		lugar.descripcion = "";
		lugar.latitud = 0.00000000;
		lugar.longitud = 0.00000000;
		lugar.observaciones = "";
	}
}]);