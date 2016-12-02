angular.module('node-angular-seed', ['ui.router', 'node-angular-seed.controllers'])
.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!{{data}}</h3>',
    controller: 'mainController'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!{{data}}</h3>',
    controller: 'mainController'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});;
