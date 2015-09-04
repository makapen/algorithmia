import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
actions: {

  submitJobPost: function () {
    ajax({
      method: "POST",
      url: "http://elasticsearch-makapen.rhcloud.com/content/job",
      data: JSON.stringify({ hello: "John", location: "Boston", '@timestamp': "2015-05-23" }),
      'content-type': 'application/json'
    })
      .then(function( msg ) {
        console.log('post to kibana successful!');
      });
  }

}



});
