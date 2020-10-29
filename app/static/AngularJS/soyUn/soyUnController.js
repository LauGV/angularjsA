registrationModule.controller('soyUnController', function($scope, $rootScope, $location, soyUnRepository, localStorageService, alertFactory) {
    console.log('entre al controlador ') //Imprime en consola
    //Ejemplo de una función, la cual se comunicara con el back 
    $scope.ejemploFuncion = function(){ 
    	soyUnRepository.llamadaRepository().then(function success(result){
    		console.log(result);
    		$scope.respuesta = result.data;
    	}, function error(err){
    		console.log('Ocurrio un error')
    	});
    };
});