import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    returnToJobs: function() {
      var id = this.get('model.id');
      console.log('the id is: ', id);
      this.transitionTo('jobs'+ "#" + id);
    }
  }
});
