import Ember from 'ember';

export function timeFromDate(params/*, hash*/) {
  let str = params[0];
  let time = str.split('.')[0];
  console.log('time', time)
  return moment(time).fromNow();
}

export default Ember.Helper.helper(timeFromDate);
