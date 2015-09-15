import Ember from 'ember';

export default Ember.Controller.extend({
  showCreateNewsFeed: false,

  actions: {
    createNewsFeed: function() {
      this.toggleProperty('showCreateNewsFeed');
    }
  }
});
