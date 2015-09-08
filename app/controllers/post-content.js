import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    submitJobPost() {
      this.store.createRecord('job', {
        title: this.get('title'),
        company: this.get('company'),
        companySize: this.get('companySize'),
        city: this.get('city'),
        state: this.get('state'),
        description: this.get('description')
      }).save();
    }
  }
});
