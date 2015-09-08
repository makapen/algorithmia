import DS from 'ember-data';
import ajax from 'ic-ajax';

export default DS.RESTAdapter.extend({
  host: "http://elasticsearch-makapen.rhcloud.com/content",
  pathForType() {
    return 'job';
  },
  findAll: function(store, type) {
    var url = type;
    return ajax({
      url: this.get('host') + '/job/_search',
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
        let obj = item._source.job;
        obj.id = item._id;
        return obj;
      })
      return {
        jobs: resultObjects
      }
    }).catch( (err) => {
      return err;
    })
  },

  query(store, type, query) {
    var queryString = query.title;

    return ajax({
      type: 'POST',
      url: this.get('host') + '/_search',
      dataType: 'json',
      data: JSON.stringify({
        "query": {
          "filtered": {
            "filter": {
              "term": {
                "title": queryString
              }
            }
          }
        }
      })
    }).then(function(res) {
      var results = res.hits.hits;
      var resultObjects = results.map( (item) => {
        let obj = item._source.job;
        obj.id = item._id;
        // store.push('post-query', obj);
        return obj;
      })
      return {
        job: resultObjects
      }

    }).catch(function(err) {
       return err;
    })
  }
});
