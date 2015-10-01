import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['display-sentiment'],
  value: null,
  displaySmile: Ember.computed.gte('value', '3'),
  displayNeutral: Ember.computed.gte('value', '1'),
  displaySad: Ember.computed.equal('value', '0'),
});
