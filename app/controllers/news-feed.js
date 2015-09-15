import Ember from 'ember';

export default Ember.Controller.extend({
  newsFeeds: Ember.computed('model.[]', function() {
    return this.get('model').toArray().sort((a, b) => {
      return moment(a.get('formattedTimestamp')).isBefore(moment(b.get('formattedTimestamp')));
    })
  }),

  actions: {
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
