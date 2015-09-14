import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post').then( (posts) => {
      return posts.get('content').mapBy('record').sort(function(a, b) {
        return moment(a.get('createdDate')).isBefore(moment(b.get('createdDate')));
      });
    })
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('posts', model);
  }
});
