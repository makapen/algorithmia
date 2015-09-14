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

      return this.get('session').authenticate('simple-auth-authenticator:lock', lockOptions).then( () => {
        try {
          let newsFeedObject = this.get('session.content.secure.profile.currentShare');
          let newsFeedProps = {
            id: newsFeedObject.id,
            firstName: newsFeedObject.author.firstName,
            lastName: newsFeedObject.author.lastName,
            comment: newsFeedObject.comment,
            title: newsFeedObject.content.title,
            userDescription: newsFeedObject.content.description,
            userPicture: this.get('session.content.secure.profile.picture'),
            thumbnailUrl: newsFeedObject.content.thumbnailUrl,
            timestamp: newsFeedObject.timestamp,
          }

          return this.store.createRecord('news-feed', newsFeedProps).save();
        }

        catch(e) {
          Ember.Logger.log('e', e);
          return;
        }
      })
    }
  },
  error: function(err, transition) {
      Ember.Logger.error(err);
      //TODO error page would be nice
      return true;
    }
});
