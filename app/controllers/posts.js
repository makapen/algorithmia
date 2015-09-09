import Ember from 'ember';

export default Ember.Controller.extend({
  currentJob: function() {
    return this.get('session.secure.profile.positions.values.firstObject');
  }.property('session.secure.profile.positions.values.[]'),

  displayPosts: Ember.computed('posts.[]', function() {
    return this.get('posts');
  }),

  actions: {
    submitSearch: function() {
      this.store.query('post', {
        "title": this.get('query')
      }).then( (posts) => {
        this.set('posts', posts);
      }).catch( (err) => {
        throw new Error(err);
      })
    }
  }
});
