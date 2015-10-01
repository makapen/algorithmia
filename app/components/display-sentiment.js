import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['display-sentiment'],
  value: null,
  displaySmile: Ember.computed.gte('value', '3'),
  displayNeutral: Ember.computed.equal('value', '2'),
  displayNeutral: Ember.computed.equal('value', '1'),
  displaySad: Ember.computed.equal('value', '0'),
});
