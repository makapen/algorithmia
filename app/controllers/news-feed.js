import Ember from 'ember';

export default Ember.Controller.extend({

  newsFeeds: Ember.computed('model.[]', 'reddit.[]', function() {
    const reddit = this.get('reddit');

    if (reddit) {
      let sortedModel = this.get('model').toArray().sort((a, b) => {
        return moment(a.get('formattedTimestamp')).isBefore(moment(b.get('formattedTimestamp')));
      })
      console.log('sor', sortedModel)
      return sortedModel.concat(reddit);
    }
    else {
      return this.get('model').toArray().sort((a, b) => {
        return moment(a.get('formattedTimestamp')).isBefore(moment(b.get('formattedTimestamp')));
      })
    }
  }),
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
        userPicture: this.get('session.content.secure.profile.picture'),
      }).save();
    }
  }
});
