import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('job');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('jobs', model);
  }
});
