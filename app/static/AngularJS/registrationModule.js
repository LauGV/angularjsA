var registrationModule = angular.module("registrationModule", ["ngRoute", "LocalStorageModule", 'ui.grid', 'ui.grid.selection', 'ui.grid.grouping', 'ui.grid.pinning', 'ui.grid.edit'])
    .config(function($routeProvider, $locationProvider) {

        /*cheange the routes*/
        $routeProvider.when('/', {
            templateUrl: 'AngularJS/Templates/soyUn.html',
            controller: 'soyUnController'
        });
        $routeProvider.when('/soyDos', {
            templateUrl: 'AngularJS/Templates/soyDos.html',
            controller: 'soyDosController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

registrationModule.directive('resize', function($window) {
    return function(scope, element) {
        var w = angular.element($window);
        var changeHeight = function() { element.css('height', (w.height() - 20) + 'px'); };
        w.bind('resize', function() {
            changeHeight(); // when window size gets changed
        });
        changeHeight(); // when page loads
    };
});
registrationModule.run(function($rootScope) {
    $rootScope.var = "full";

})
