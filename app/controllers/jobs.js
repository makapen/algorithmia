import Ember from 'ember';

export default Ember.Controller.extend({
  currentJob: function() {
    return this.get('session.secure.profile.positions.values.firstObject');
  }.property('session.secure.profile.positions.values.[]')
});
