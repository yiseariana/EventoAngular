'use strict';

/**
 * @ngdoc overview
 * @name cooapicaApp
 * @description
 * # cooapicaApp
 *
 * Main module of the application.
 */
angular
        .module('cooapicaApp', ['jkuri.gallery', 'dialogs.main', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'toastr', 'satellizer'])
        .config(function ($interpolateProvider, $stateProvider, $urlRouterProvider, $authProvider) {

            $authProvider.loginUrl = '/api/authenticate';
            $authProvider.tokenName = 'token';

            $urlRouterProvider.otherwise('/');
            $stateProvider
                    .state('main', {
                        url: '/',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/main.html'
                            }
                        }
                    })
                    .state('cooapica', {
                        url: '/cooapica',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/cooapica.html'
                            }
                        }
                    })
                    .state('organizadores', {
                        url: '/organizadores',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/organizadores.html'
                            }
                        }
                    })
                    .state('foro', {
                        url: '/foro',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/foro.html'
                            }
                        }
                    })
                    .state('alianza', {
                        url: '/alianza',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/alianza.html'
                            }
                        }
                    })
                    .state('info', {
                        url: '/info',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/info.html'
                            }
                        }
                    })
                    .state('programacion', {
                        url: '/programacion',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/programacion.html'
                            }
                        }
                    })
                    .state('expo', {
                        url: '/expo',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/expo.html'
                            }
                        }
                    })
                    .state('inscripcion', {
                        url: '/inscripcion',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/inscripcion.html',
                                controller: 'RegistroCtrl as registro'
                            }
                        }
                    })
                    .state('admin', {
                        url: '/admin',
                        views: {
                            'nav': {
                                templateUrl: 'views/partials/admin_nav.html',
                                controller: 'MainCtrl as main'
                            },
                            'content': {
                                templateUrl: 'views/admin.html',
                                controller: 'AdminCtrl as admin'
                            }
                        }
                    });

            $interpolateProvider.startSymbol('<%');
            $interpolateProvider.endSymbol('%>');

            function skipIfLoggedIn($q, $auth) {
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    deferred.reject();
                } else {
                    deferred.resolve();
                }
                return deferred.promise;
            }

            function loginRequired($q, $location, $auth) {
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    deferred.resolve();
                } else {
                    $location.path('/auth');
                }
                return deferred.promise;
            }
        });
