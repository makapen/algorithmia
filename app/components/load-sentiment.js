import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../config/environment';

export default Ember.Component.extend({
  model: null,
  loadingContent: true,

  _onAttrs: Ember.on('didInitAttrs', function() {
    let model = this.get('model');

    if (model.id) {
      const comment = model.get('comment');

      if (comment && !model.get('sentiment')) {
        ajax({
          url: config.APP.apiServer + '/sentiment',
          method: 'POST',
          data: comment
        }).then ( (sentimentValue) => {
          console.log('val', sentimentValue)
          model.set('sentiment', sentimentValue.result);
          model.save().then( () => {
            this.set('loadingContent', false);
          });
        }).catch( (err) => {
          throw new Error(err);
        })
      }
      this.set('loadingContent', false);
    }
    else {
      this.set('loadingContent', false);
      this.set('redditModel', true);
    }
  })
});
