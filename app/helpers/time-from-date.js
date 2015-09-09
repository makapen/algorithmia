import Ember from 'ember';

export function timeFromDate(params/*, hash*/) {
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
