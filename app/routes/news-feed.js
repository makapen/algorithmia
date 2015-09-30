import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('news-feed')
  },
  afterModel() {
    console.log('config', config.APP)
    return ajax({
      url: config.APP.apiServer + "/reddit",
      method: 'GET',
    }).then( (parsedReddit) => {
      this.set('parsedReddit', parsedReddit);
    }).catch( (err) => {
      // if the server doesn't respond swallow the error
      Ember.Logger.log('er', err);
      return;
    })
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('news-feeds', model);
    controller.set('reddit', this.get('parsedReddit'));
  }
});
