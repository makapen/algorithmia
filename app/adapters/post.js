import DS from 'ember-data';
import ajax from 'ic-ajax';

export default DS.RESTAdapter.extend({
  host: "https://elasticsearch-makapen.rhcloud.com/content",
  pathForType() {
    return 'post';
  },
  findAll: function(store, type) {
    return ajax({
      url: this.get('host') + '/post/_search',
      method: 'get',
      dataType: 'json',
      data: JSON.stringify({
        "query" : {
          "match_all" : {}
        }
      })
    }).then( (res) => {
      var results = res.hits.hits;
      var resultObjects = results.map( (item) => {
        let obj = item._source.post;
        obj.id = item._id;
        return obj;
      });
      return {
        posts: resultObjects
      }
    }).catch( (err) => {
      return err;
    })
  },
  findRecord: function(store, type, id) {
    return ajax({
      url: this.get('host') + '/post/_search/?q=_id:' + id,
      method: 'get',
      dataType: 'json',
      data: JSON.stringify({
        "query" : {
          "match_all" : {}
        }
      })
    }).then( (res) => {
      var results = res.hits.hits;
      var resultObjects = results.map( (item) => {
        let obj = item._source.post;
        obj.id = item._id;
        return obj;
      })
      return {
        posts: resultObjects
      }
    }).catch( (err) => {
      return err;
    })
  }
});
