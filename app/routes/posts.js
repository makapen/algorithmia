import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('posts', model);
  }
});
