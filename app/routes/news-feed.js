import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('news-feed')
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('news-feeds', model);
  }
});
