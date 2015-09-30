import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('news-feed')
  },
  afterModel() {
    return ajax({
      url: 'https://localhost:3000/reddit',
      method: 'GET',
    }).then( (parsedReddit) => {
      this.set('parsedReddit', parsedReddit);
    }).catch( (err) => {
      // if the server doesn't respond swallow the error
      return;
    })
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('news-feeds', model);
    controller.set('reddit', this.get('parsedReddit'));
  }
});
