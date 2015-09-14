import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('post-content');
  this.route('post', { path: 'post/:id'});
  this.route('posts');
  this.route('news-feed');
});

export default Router;
