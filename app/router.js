import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('jobs');
  this.route('user');
  this.route('post-content');
});

export default Router;
