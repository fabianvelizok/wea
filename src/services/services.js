import angular from 'angular';

// Services go here
import Avatar from './avatar/avatar';

const serviceModule = angular.module('app.services', [
  Avatar.name,
])

export default serviceModule;
