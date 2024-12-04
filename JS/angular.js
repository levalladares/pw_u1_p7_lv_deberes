const app = angular.module('myApp', []);

app.controller('MyController', function ($scope) {
    $scope.message = '¡Hola Mundo con Angular desde un archivo externo!';
});
