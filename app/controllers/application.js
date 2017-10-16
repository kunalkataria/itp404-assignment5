import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  actions: {
    searchForEvents() {
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddit', subreddit);
    }
  }
});
