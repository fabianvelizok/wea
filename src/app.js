import angular from 'angular';

import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';

import Components from './components/components';
import Services from './services/services';


angular.module('app', [
  uiRouter,
  Components.name,
  Services.name
])
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
