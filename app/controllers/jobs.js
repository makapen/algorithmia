import Ember from 'ember';

export default Ember.Controller.extend({
  currentJob: function() {
    return this.get('session.secure.profile.positions.values.firstObject');
  }.property('session.secure.profile.positions.values.[]'),

  displayJobs: Ember.computed('jobs', function() {
    return this.get('jobs');
  }),

  actions: {
    submitSearch: function() {
      this.store.query('job', {
        "title": "test"
      }).then( (res) => {
        this.set('jobs', res);
      }).catch( (err) => {
        Ember.Logger.log('err', err)
      })
    }
  }
});
