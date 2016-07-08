'use strict';

/**
 * @ngdoc function
 * @name cooapicaApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the cooapicaApp
 */
angular.module('cooapicaApp')
        .controller('RegistroCtrl', function ($scope, RegistroService, toastr) {

            var vm = this;

            vm.titulo = 'Inscripciones';
            vm.interes = 'Asistente';
            vm.concurso = 'No aplica';
            vm.nombre1 = '';
            vm.tituloProducto = '';
            vm.registro = {};
            vm.nombre = '';
            vm.cedula = '';
            vm.correo = '';
            vm.rn1 = false;
            vm.rn2 = false;
            vm.rConcurso = null;
            vm.rPonencia = null;
            vm.recibo = null;

            vm.pasaporte = '';
            vm.nacionalidad = '';
            vm.departamento = '';
            vm.municipio = '';
            vm.telefono = '';
            vm.entidad = '';
            vm.ocupacion = '';
            vm.ruta = '';
            vm.nEntidad = ''; //Nombre de la entidad
            vm.nTrabajo = ''; //Nombre del trabajo o experiencia

            vm.subiendo = false;

            vm.limpiarFormulario = function () {
                vm.interes = 'Asistente';
                vm.concurso = 'No aplica';
                vm.nombre1 = '';
                vm.tituloProducto = '';
                vm.registro = {};
                vm.nombre = '';
                vm.cedula = '';
                vm.correo = '';
                vm.rn1 = false;
                vm.rn2 = false;
                vm.rConcurso = null;
                vm.rPonencia = null;
                vm.recibo = null;

                vm.pasaporte = '';
                vm.nacionalidad = '';
                vm.departamento = '';
                vm.municipio = '';
                vm.telefono = '';
                vm.entidad = '';
                vm.ocupacion = '';
                vm.ruta = '';
                vm.nEntidad = ''; //Nombre de la entidad
                vm.nTrabajo = ''; //Nombre del trabajo o experiencia
            }

            vm.cambiarInteres = function () {
                if (vm.interes === 'Asistente') {
                    vm.rn1 = false;
                } else {
                    vm.rn1 = true;
                }
            };

            vm.cambiarConcurso = function () {
                if (vm.concurso === 'Concurso de apícola') {
                    vm.rn2 = true;
                } else {
                    vm.rn2 = false;
                }
            }

            vm.enviar = function () {

                if (vm.concurso !== 'No aplica' && vm.rConcurso === null) {
                    toastr.error('Debe adjuntar el resumen del trabajo (Concurso)')
                    return;
                }

                if (vm.interes === 'Ponente' && vm.rPonencia === null) {
                    toastr.error('Debe adjuntar el resumen del trabajo o experiencia significativa');
                }

                if (vm.recibo === null) {
                    toastr.error('Debe adjuntar el recibo de pago');
                }

                vm.registro = {
                    nombre: vm.nombre,
                    cedula: vm.cedula,
                    pasaporte: vm.pasaporte,
                    nacionalidad: vm.nacionalidad,
                    departamento: vm.departamento,
                    municipio: vm.municipio,
                    telefono: vm.telefono,
                    correo: vm.correo,
                    entidad: vm.entidad,
                    ocupacion: vm.ocupacion,
                    ruta: vm.ruta,
                    interes: vm.interes,
                    nEntidad: vm.nombre1, //Nombre de la entidad
                    nTrabajo: vm.nombre1, //Nombre del trabajo o experiencia
                    concurso: vm.concurso,
                    tProducto: vm.tituloProducto, //Título del producto innovador
                    recibo: vm.recibo, //Recibo de pago
                    rPonencia: vm.rPonencia, //Resumen de trabajo o experiencia. Ponentes
                    rConcurso: vm.rConcurso //Trabajo innovador. Concurso
                };

                console.log(vm.registro);

                console.log("Enviar formulario registro");
                var recibo = vm.recibo;
                vm.subiendo = true;
                RegistroService.registrar(vm.registro).then(
                        function (data) {
                            toastr.success('Registro completado. Pronto le será enviado el comprobante de inscripción a su correo electrónico.', 'Registro');
                            vm.limpiarFormulario();
                            vm.subiendo = false;
                        },
                        function (error) {
                            switch (error) {
                                case 1:
                                    toastr.error('Debe adjuntar el resumen del trabajo o experiencia significativa')
                                    break;
                                case 2:
                                    toastr.error('Debe adjuntar el resumen del trabajo (Concurso)')
                                    break;
                                case 2:
                                    toastr.error('Debe adjuntar el recibo de pago')
                                    break;
                            }

                            vm.subiendo = false;
                        }
                );
            };

            $scope.$watch(
                    function () {
                        return vm.nombre1;
                    },
                    function (current, original) {
                        if ((current === '' || current === 'undefined') && vm.interes !== 'Asistente') {
                            vm.rn1 = true;
                        } else {
                            vm.rn1 = false;
                        }
                    }
            );

            $scope.$watch(
                    function () {
                        return vm.tituloProducto;
                    },
                    function (current, original) {
                        console.log(vm.concurso);
                        console.log(vm.tituloProducto);
                        if ((current === '' || current === 'undefined') && vm.concurso === 'Concurso de apícola') {
                            vm.rn2 = true;
                        } else {
                            vm.rn2 = false;
                        }
                    });


        })
        .config(function (toastrConfig) {
            angular.extend(toastrConfig, {
                autoDismiss: false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-bottom-full-width',
                preventDuplicates: false,
                preventOpenDuplicates: true,
                target: 'body'
            });
        });
;
