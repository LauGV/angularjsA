var soyUnURL = global_settings.urlCORS + 'api/soyUn/';

registrationModule.factory('soyUnRepository', function($http) {
    return {
        llamadaRepository: function(idUsuario) {
            return $http({
                url: soyUnURL + 'llamadaBack/',
                method: "GET",
                params: {},
                headers: {
                    'Content-Type': 'application/json'
                }

            });
        }

    };

});
