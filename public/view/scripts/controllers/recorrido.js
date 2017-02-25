app.controller('RecorridoCtrl', ['$scope',
 'Restangular',
 '$http',
 '$firebaseObject',
 '$firebaseArray',
  function ($scope, Restangular, $http, $firebaseObject, $firebaseArray) {

   	var urlFraternidad = "https://oruro-como-llegar-d39af.firebaseio.com/fraternidad";
   	var ref = new Firebase(urlFraternidad);

   	var query = ref.orderByChild("posicionEventos");
/*   	ref.orderByChild("posicionEventos").on('child_added', function(data){
		$scope.conjuntos = data.val();
   	});*/

   	$scope.conjuntos = $firebaseArray(query);

/*	$http.get('http://192.168.1.36:3000/conjuntos').then(function(conjuntos){
		$scope.conjuntos = conjuntos.data;
	});
*/
//	$scope.opcion = 1;
	$scope.adicionar = function(id){
		$http.post('http://192.168.1.36:3000/conjuntos/adicionar', {"id": id}).then(function(conjuntos){
			$scope.conjuntos = conjuntos.data;
			console.log(conjuntos.data);
		});

	}
	$scope.ingresar = function(){
		$http.get('http://192.168.1.36:3000/conjuntos/ingresar').then(function(conjuntos){
			$scope.conjuntos = conjuntos.data;
			console.log($scope.conjuntos);
		});
	}
	$scope.terminar = function(){
		$http.get('http://192.168.1.36:3000/conjuntos/terminar').then(function(conjuntos){
			$scope.conjuntos = conjuntos.data;
			console.log($scope.conjuntos);
		});
	}
	$scope.reset = function(){
		$http.get('http://192.168.1.36:3000/conjuntos/reset').then(function(conjuntos){
			//$scope.conjuntos = conjuntos.data;
			console.log($scope.conjuntos.data);
		});
	}
	$scope.guardar = function(){
		$http.get('http://192.168.1.36:3000/conjuntos/guardar').then(function(res){
			toastr.success("Los conjuntos fueron guardados exitosamente :D");
			console.log(res.data);
		});
	}
	$scope.accion = function (opcion) {
		var opt = parseInt(opcion.item);
		switch (opt) {
			case 0:
				$scope.adicionar(opcion.id);
				break;
			case 1:
				$scope.ingresar();
				break;
			case 2:
				$scope.terminar();
				break;
			case 4:
				$scope.reset();
				break;
		}
	}
}]);