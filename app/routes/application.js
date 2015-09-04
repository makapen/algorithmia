import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

Ember.onerror = function(err) {
  Ember.Logger.error(err);
};

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionRequiresAuthentication: function(){
      // Check out the docs for all the options:
      // https://auth0.com/docs/libraries/lock/customization

      // This will launch lock.js in popup mode
      var lockOptions = {authParams:{scope: 'openid'}};

      this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions);
    }
  },
  error: function(err, transition) {
      Ember.Logger.error(err);
      //TODO error page would be nice
      return true;
    }
});
