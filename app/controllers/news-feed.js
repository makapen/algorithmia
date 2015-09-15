import Ember from 'ember';

export default Ember.Controller.extend({
  showCreateNewsFeed: false,

  actions: {
    createNewsFeed: function() {
      this.toggleProperty('showCreateNewsFeed');
    },
    submitNewsFeed() {
      return this.store.createRecord('news-feed', {
        firstName: this.get('session.content.secure.profile.given_name'),
        lastName: this.get('session.content.secure.profile.family_name'),
        title: this.get('title'),
        comment: this.get('comment'),
        timestamp: Date.now(),
      }).save();
    }
  }
});
