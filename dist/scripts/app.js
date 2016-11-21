 (function() {
   function config($stateProvider, $locationProvider) {
     $locationProvider
       .html5Mode({
         enabled: true,
         requireBase: false
       });

     $stateProvider
       .state('main', {
         url: '/',
         templateUrl: '/templates/main.html'
       })
       .state('blog', {
         url: '/blog',
         templateUrl: '/templates/blog.html'
       });
   }

   angular.module('portfolio', ['ui.router']);
   angular
     .module('portfolio', ['ui.router'])
     .config(config);
 })();
 