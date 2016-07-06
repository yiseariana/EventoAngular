'use strict';

/**
 * @ngdoc function
 * @name cooapicaApp.controller:ConferencistaCtrl
 * @description
 * # ConferencistaCtrl
 * Controller of the cooapicaApp
 */
angular.module('cooapicaApp')
        .controller('ConferencistaCtrl', function () {
            var vm = this;


            vm.conferencistas = [
                {
                    nombre: 'María Mayda Verde Jimenez - Cuba',
                    email: 'geampresid@minag.gov.cu turquino@minag.gov.cu',
                    cargo: 'Dirección de Apicultura - Grupo Empresarial Agricultura de Montaña - Ministerio de agricultura',
                    desc: 'Médico Veterinario Principal. Sus estudios se encuentran enfocados a: Curso de adiestramiento sobre abeja africana – Secretaria de Agricultura y Recursos Hidráulicos (SARH) de México. 1987 y 1988.  Enfermedades de las abejas. Instituto de Medicina Veterinaria. (1980). Postgrado de Genética Apícola. (1987). Empresa Cubana de Apicultura del Ministerio de la Agricultura y el Instituto Superior de Ciencias Agropecuarias de la Habana. Evaluaciones periódicas sobre los Instructivos Técnicos Apícolas. Postgrado de Biología de las Abejas (1983). Adiestramiento en Crianza de Abejas Reinas y producción de Jalea Real. México. (1993). Adiestramiento sobre Inseminación Instrumental de Abejas Reinas. Morelos, México. (1993).Mercadotecnia (1993) Empresa Cubana de Apicultura. Ministerio de la Agricultura. Curso Internacional de Apiterapia. Comisión de Apiterapia de Apimondia. 1er Nivel, Ciudad de la Habana, Cuba, (2002).Diplomado de Apicultura.',
                    img: 'images/MariaVerde.jpg'
                },
                {
                    nombre: 'Misael Cuevas - Chile',
                    email: '',
                    cargo: 'Presidente de la Federación Red Apicola Nacional de Chile RAN F.G - Presidente de la Federación Latinoamericana de Apicultura FILAPI',
                    desc: 'Apicultor y consultor en temas de gestión apícola, desarrollo organizacional y proyectos productivos de apicultura.',
                    img: 'images/MisaelCuevas.jpg'
                }
            ];

        });
