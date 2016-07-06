'use strict';

/**
 * @ngdoc service
 * @name cooapicaApp.file
 * @description
 * # file
 * Service in the cooapicaApp.
 */
angular.module('cooapicaApp')
        .service('RegistroService', function ($http, $q) {
            //this.baseUrl = 'http://localhost:8000/';
            this.baseUrl = '/';
            this.url = this.baseUrl + 'api/registroApi/registro';
            this.urlRegistros = this.baseUrl + 'api/registroApi/registros';

            this.registrar = function (registro) {
                var deferred = $q.defer();
                var fd = new FormData();

                fd.append('nombre', registro.nombre);
                fd.append('cedula', registro.cedula);
                fd.append('pasaporte', registro.pasaporte);
                fd.append('nacionalidad', registro.nacionalidad);
                fd.append('departamento', registro.departamento);
                fd.append('municipio', registro.municipio);
                fd.append('telefono', registro.telefono);
                fd.append('correo', registro.correo);
                fd.append('entidad', registro.entidad);
                fd.append('ocupacion', registro.ocupacion);
                fd.append('ruta', registro.ruta);
                fd.append('interes', registro.interes);
                fd.append('nEntidad', registro.nEntidad);
                fd.append('nTrabajo', registro.nTrabajo);
                fd.append('concurso', registro.concurso);
                fd.append('tProducto', registro.tProducto);
                fd.append('recibo', registro.recibo);
                fd.append('rPonencia', registro.rPonencia);
                fd.append('rConcurso', registro.rConcurso);
                $http.post(this.url, fd, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-type': undefined
                    }
                })
                        .success(function (data) {
                            console.log(data);
                            deferred.resolve(data);
                        })
                        .error(function (error) {
                            deferred.reject(error);
                        });
                return deferred.promise;
            };

            this.getRegistros = function () {
                var deferred = $q.defer();
                $http.get(this.urlRegistros)
                        .success(function (data) {
                            deferred.resolve(data.data);
                        })
                        .error(function (error) {
                            deferred.reject(error);
                        });
                return deferred.promise;
            };

        });
