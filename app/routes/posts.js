import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // if there are query params use those
    let hasQueryParams = params.search ? true : false;

    if (hasQueryParams) {
      return this.store.query('post', {
        "title": params.search
      }).then( (res) => {
        Ember.Logger.log('query', res)
        return res;
      })
    }
    else {
      return this.store.findAll('post').then( (posts) => {
        return posts.get('content').mapBy('record').sort(function(a, b) {
          return moment(a.get('createdDate')).isBefore(moment(b.get('createdDate')));
        });
      })
    }
  },

  actions: {
    reloadPosts() {
      this.refresh();
    }
  }
});
