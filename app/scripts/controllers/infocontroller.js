'use strict';

/**
 * @ngdoc function
 * @name cooapicaApp.controller:InfocontrollerCtrl
 * @description
 * # InfocontrollerCtrl
 * Controller of the cooapicaApp
 */
angular.module('cooapicaApp')
        .controller('InfoCtrl', function () {
            var vm = this;

            this.images = [
                {
                    thumb: 'images/cm1t.jpg',
                    img: 'images/cm1.jpg'
                },
                {
                    thumb: 'images/cm2t.jpg',
                    img: 'images/cm2.jpg'
                },
                {
                    thumb: 'images/cm3t.jpg',
                    img: 'images/cm1.jpg'
                },
                {
                    thumb: 'images/cm4t.jpg',
                    img: 'images/cm4.jpg'
                },
                {
                    thumb: 'images/cm5t.jpg',
                    img: 'images/cm5.jpg'
                }
            ];

        });
