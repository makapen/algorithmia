import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search'],
  search: null,

  currentJob: function() {
    return this.get('session.secure.profile.positions.values.firstObject');
  }.property('session.secure.profile.positions.values.[]'),

  actions: {
    submitSearch: function() {
      // get the query and set it as a query param, send an action to refresh the model hooks
      let query = this.get('query') || null;

      this.set('search', query);
      this.send('reloadPosts');
    }
  }
});
