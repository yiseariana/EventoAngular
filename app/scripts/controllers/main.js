'use strict';

/**
 * @ngdoc function
 * @name cooapicaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cooapicaApp
 */
angular.module('cooapicaApp')
        .controller('MainCtrl', function ($location) {

            var vm = this;

            vm.titulo = 'Admin';

            this.cambiarTab = function (index) {
                switch (index) {
                    case 'cooapica':
                        $location.path("/cooapica");
                        break;
                    case 'organizadores':
                        $location.path("/organizadores");
                        break;
                    case 'foro':
                        $location.path("/foro");
                        break;
                    case 'info':
                        $location.path("/info");
                        break;
                    case 'programacion':
                        $location.path("/programacion");
                        break;
                    case 'inscripcion':
                        $location.path("/inscripcion");
                        break;
                }
            };

            vm.cerrarSesion = function () {
                $location.path("/");
            };

            console.log("Hola");
        });
