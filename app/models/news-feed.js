import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  comment: DS.attr('string'),
  title: DS.attr('string'),
  userDescription: DS.attr('string'),
  userPicture: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  timestamp: DS.attr('string'),
  sentiment: DS.attr('string'),

  author: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }),

  formattedTimestamp: Ember.computed('timestamp', function() {
    return moment(this.get('timestamp'), 'x').format('MM-DD-YYYY, h:mm:ss a');
  }),
});
