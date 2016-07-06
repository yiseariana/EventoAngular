'use strict';

/**
 * @ngdoc function
 * @name cooapicaApp.controller:ProgramacionCtrl
 * @description
 * # ProgramacionCtrl
 * Controller of the cooapicaApp
 */
angular.module('cooapicaApp')
        .controller('ProgramacionCtrl', function () {
            var vm = this;

            vm.dia1 = {
                nombre: "Jueves 11 de Agosto de 2016",
                items: [
                    {
                        inicio: '7:00 am',
                        fin: '8:00 am',
                        nombre: 'Inscripciones y registro'
                    },
                    {
                        inicio: '8:00 am',
                        fin: '9:00 am',
                        nombre: 'Instalación'
                    },
                    {
                        inicio: '9:00 am',
                        fin: '9:45 am',
                        nombre: 'Conferencia Nacional "Abejas y Medio Ambiente" (Invitado Nacional)'
                    },
                    {
                        inicio: '9:45 am',
                        fin: '10:15 am',
                        nombre: 'Receso'
                    },
                    {
                        inicio: '10:15 am',
                        fin: '11:00 am',
                        nombre: 'Conferencia Internacional "Incremento Producción" Mayda Verde  (Cuba)'
                    },
                    {
                        inicio: '11:00 am',
                        fin: '12:30 am',
                        nombre: 'ASOCIATIVIDAD "I Encuentro de apicultores del Cauca y espacio Gremial Fedebejas" (Asociaciones y Organizaciones del Cauca)'
                    },
                    {
                        inicio: '12:30 am',
                        fin: '2:00 pm',
                        nombre: 'Almuerzo Libre'
                    },
                    {
                        inicio: '2:00 am',
                        fin: '2:45 pm',
                        nombre: 'Conferencia Internacional "Mercado y economía rural" Misael Cuevas (Chile)'
                    },
                    {
                        inicio: '2:45 am',
                        fin: '3:30 pm',
                        nombre: 'Conferencia Nacional  "Calidad de Miel con enfoque de mercado" (Invitado Nacional)'
                    },
                    {
                        inicio: '3:30 am',
                        fin: '4:00 pm',
                        nombre: 'Receso'
                    },
                    {
                        inicio: '4:00 am',
                        fin: '5:30 pm',
                        nombre: 'Mesas temáticas',
                        sub: [
                            {
                                lugar: 'Salón 1',
                                nombre: 'LAS ABEJAS Y  LA APICULTURA EN EL MEDIO AMBIENTE'
                            },
                            {
                                lugar: 'Salón 2',
                                nombre: 'Resultados de investigación y experiencias significativass'
                            }
                        ]
                    },
                    {
                        inicio: '5:30 am',
                        fin: '6:00pm',
                        nombre: 'Plenaria de las Mesas Temáticas'
                    },
                    {
                        inicio: '6:00 am',
                        fin: '7:00pm',
                        nombre: 'Coctel de Bienvenida'
                    }
                ]
            };

            vm.dia2 = {
                nombre: "Viernes 12 de Agosto de 2016",
                items: [
                    {
                        inicio: '8:00 am',
                        fin: '9:00 am',
                        nombre: 'Conferencia internacional "La apicultura en Latinoamerica." MiSael Cuevas (Chile)'
                    },
                    {
                        inicio: '9:00 am',
                        fin: '9:45 am',
                        nombre: 'Conferencia Nacional Jairo Marciano. Fedeabejas. "El Aporte de la apicultura en el Postconflicto" '
                    },
                    {
                        inicio: '9:45 am',
                        fin: '10:15 am',
                        nombre: 'Receso'
                    },
                    {
                        inicio: '10:15 am',
                        fin: '11:00 am',
                        nombre: 'Conferencia Nacional. "Buenas Prácticas Apícolas". (Lanzamiento del libro) Rodrigo Vásquez. Corpoica. (Nacional)'
                    },
                    {
                        inicio: '11:00 am',
                        fin: '12:30 am',
                        nombre: 'Conferencias nacionales',
                        sub: [
                            {
                                nombre: 'Importancia de las abejas silvestres.  (Nacional. 45 mint)'
                            },
                            {
                                nombre: 'Impacto ambiental de agroquímicos y minería en   la producción apícola (45 mint)'
                            }
                        ]
                    },
                    {
                        inicio: '12:30 pm',
                        fin: '2:00 pm',
                        nombre: 'Almuerzo libre'
                    },
                    {
                        inicio: '2:00 pm',
                        fin: '2:45 pm',
                        nombre: 'Conferencia Internacional "Técnicas de manejo en las colmenas  y su impacto en la producción" Mayda Verde (Cuba)'
                    },
                    {
                        inicio: '2:45 pm',
                        fin: '3:30 pm',
                        nombre: 'Conferencia Nacional "Calidad de Polén y Propóleos"'
                    },
                    {
                        inicio: '3:30 pm',
                        fin: '4:00 pm',
                        nombre: 'Receso"'
                    },
                    {
                        inicio: '4:00 pm',
                        fin: '5:30 pm',
                        nombre: 'Mesa temática"',
                        sub: [
                            {
                                nombre: '"INCREMENTO DE LA APICULTURA Y LA PRODUCTIVIDAD" Resultados de investigación y experiencias significativas',
                                lugar: 'Salón 1'
                            },
                            {
                                nombre: '"MERCADEO  Y OPCION DE VIDA"-Resultados de investigación y experiencias significativa',
                                lugar: 'Salón 2'
                            },
                        ]
                    },
                    {
                        inicio: '5:30 pm',
                        fin: '6:00 pm',
                        nombre: 'Plenaria de las Mesas temáticas"'
                    },
                    {
                        inicio: '6:00 pm',
                        fin: '7:00 pm',
                        nombre: 'Espacio Gremial Fedeabejas"'
                    },
                    {
                        inicio: '7:00 pm',
                        fin: '9:00 pm',
                        nombre: 'Chiva Turística por Popayán"'
                    },
                ]
            };

            vm.dia3 = {
                nombre: 'Sábado 13 de Agosto de 2016',
                items: [
                    {
                        inicio: '8:00 am',
                        fin: '12:30 pm',
                        nombre: 'Día de campo',
                        sub: [
                            {
                                nombre: 'Jardín botánico',
                            },
                            {
                                nombre: 'Apiario',
                            },
                            {
                                nombre: 'Herbario',
                            },
                            {
                                nombre: 'Flor apícola',
                            },
                            {
                                nombre: 'Museo apícola',
                            }
                        ]
                    },
                    {
                        inicio: '8:00 am',
                        fin: '12:30 pm',
                        nombre: 'Concurso de fotografía'
                    },
                    {
                        inicio: '8:00 am',
                        fin: '12:30 pm',
                        nombre: 'Concurso de innovación apícola'
                    },
                    {
                        inicio: '12:30 pm',
                        fin: '2:00 pm',
                        nombre: 'Almuerzo-Apícola'
                    },
                    {
                        inicio: '2:00 pm',
                        fin: '2:45 pm',
                        nombre: 'Presentación: resultados Huella de Carbono generada en el evento Intercambio de experiencias'
                    },
                    {
                        inicio: '2:45 pm',
                        fin: '4:00 pm',
                        nombre: 'Foro Apícola y Conclusiones y elección de la Nueva sede del encuentro'
                    },
                    {
                        inicio: '4:00 pm',
                        fin: '7:00 pm',
                        nombre: 'Tarde Cultural. Certificación y Cierre del Evento.'
                    },
                ]
            };

        });
