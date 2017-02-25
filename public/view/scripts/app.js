var app = angular.module('codaApp', ['restangular', 'ngRoute', 'firebase']);
app.config(function (RestangularProvider, $routeProvider, $locationProvider) {
	RestangularProvider.setBaseUrl(':3000');
	$routeProvider
		.when('/', {
			templateUrl: 'view/partials/conjuntos.html',
			controller: 'ConjuntosCtrl'
		})
		.when('/danzas', {
			templateUrl: 'view/partials/danzas.html',
			controller: 'DanzasCtrl'
		})
		.when('/recorrido', {
			templateUrl: 'view/partials/recorrido.html',
			controller: 'RecorridoCtrl'
		})
		.when('/conjuntos', {
			templateUrl: 'view/partials/conjuntos.html',
			controller: 'ConjuntosCtrl'
		})
		.when('/eventos', {
			templateUrl: 'view/partials/eventos.html',
			controller: 'EventosCtrl'
		})
		.when('/posiciones', {
			templateUrl: 'view/partials/posiciones.html',
			controller: 'PosicionesCtrl'
		})
		.when('/lugares', {
			templateUrl: 'view/partials/lugares.html',
			controller: 'LugaresCtrl'
		});
//	$locationProvider.html5Mode(true).hashPrefix("!");
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

});