import adapter from './application';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://elasticsearch-makapen.rhcloud.com/content",
  pathForType() {
    return 'job';
  }
});
