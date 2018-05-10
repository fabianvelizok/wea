import angular from 'angular';

import uiRouter from '@uirouter/angularjs';

import './app.scss';
import AppComponent from './app.component';

import Components from './components/components';
import Services from './services/services';


angular.module('app', [
  uiRouter,
  Components.name,
  Services.name
])
  .config(() => {})

  .component('app', AppComponent);
