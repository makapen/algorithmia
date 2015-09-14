import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  comment: DS.attr('string'),
  title: DS.attr('string'),
  userDescription: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  timestamp: DS.attr('string')
});
