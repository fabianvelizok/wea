import angular from 'angular';

// Components go here
import Header from './header/header';
import Welcome from './welcome/welcome';
import About from './about/about';

const componentModule = angular.module('app.components', [
  Header,
  Welcome,
  About
]);

export default componentModule;
