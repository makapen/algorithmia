import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  company: DS.attr('string'),
  companySize: DS.attr('string'),
  description: DS.attr('string'),
  createdDate: DS.attr('string', {
    defaultValue: function() {
      return moment().format("YYYY-MM-DD") + 'T' + moment().format('HH:mm:ss.SSSZZ');
    }
  })
});
