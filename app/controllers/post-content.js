import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
actions: {

  submitJobPost: function () {
    ajax({
      method: "POST",
      url: "http://elasticsearch-makapen.rhcloud.com/content/job",
      data: JSON.stringify({
        jobTitle: "Technical Project Manager",
        company: "Wallero Technologies",
        description: "You will manage programs/projects involving cross-functional teams focused on the delivery of technical products or systems.",
        city: "Seattle",
        state: "WA",
        companySize: "1-50",
        '@timestamp': "2015-05-23"
      }),
      'content-type': 'application/json'
    })
      .then(function( msg ) {
        console.log('post to kibana successful!');
      });
  }

}



});
