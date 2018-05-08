export default class AvatarService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  get() {
    return this.$http.get('https://api.adorable.io/avatars/200/random')
      .then((response) => {
        return response.data;
      });
  };
}
