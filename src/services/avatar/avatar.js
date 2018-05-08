import angular from 'angular';
import avatarService from './avatar.service';

const avatarModule = angular.module('avatar', [])
  .service('Avatar', avatarService);

export default avatarModule;
