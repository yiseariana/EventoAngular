'use strict';

/**
 * @ngdoc function
 * @name cooapicaApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the cooapicaApp
 */
angular.module('cooapicaApp')
        .controller('AdminCtrl', function (RegistroService) {
            var vm = this;

            vm.titulo = "Inscritos";

            vm.registros = [];
            vm.url = "google.com";

            vm.getRegistros = function () {

                RegistroService.getRegistros().then(
                        function (data) {
                            vm.registros = data;
                            console.log(vm.registros);
                        },
                        function (error) {
                            console.log(error);
                        }
                );
            };

            vm.aprobar = function (registro) {
                RegistroService.aprobar(registro.cedula).then(
                        function (data) {
                            registro.aprobado = data;
                        },
                        function (error) {
                            console.log(error);
                        }
                );
            };

            vm.desaprobar = function (registro) {
                RegistroService.desaprobar(registro.cedula).then(
                        function (data) {
                            registro.aprobado = data;
                        },
                        function (error) {
                            console.log(error);
                        }
                );
            };


            vm.getRegistros();

        });
