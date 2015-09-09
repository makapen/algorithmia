import Ember from 'ember';

export function timeFromDate(params/*, hash*/) {
  Ember.Logger.log('params', params)
  try {
    let str = params[0];
    let time = str.split('.')[0];
    return moment(time).fromNow();
  }
  catch (e) {
    throw new Error(e);
  }
}

export default Ember.Helper.helper(timeFromDate);
