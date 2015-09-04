import Ember from 'ember';

export default Ember.Controller.extend({
  basicProfile: function() {
    return this.get('session.secure.profile');
  }.property('session.secure.profile.values.[]'),
  currentJob: function() {
    return this.get('session.secure.profile.positions.values.firstObject');
  }.property('session.secure.profile.positions.values.[]'),
  lastJob: function() {
    return this.get('session.secure.profile.positions.values.lastObject');
  }.property('session.secure.profile.positions.values.[]')
});
