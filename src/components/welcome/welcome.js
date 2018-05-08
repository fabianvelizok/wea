import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import welcomeComponent from './welcome.component';

let welcomeModule = angular.module('welcome', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('welcome', {
        url: '/',
        component: 'welcome'
      });
  })

  .component('welcome', welcomeComponent)
  .name;

export default welcomeModule;
