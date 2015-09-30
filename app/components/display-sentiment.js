import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['display-sentiment'],
  value: null,
  displaySmile: Ember.computed.gt('value', '2'),
  displayNeutral: Ember.computed.equal('value', '2'),
  displaySad: Ember.computed.lt('value', '2'),
});
