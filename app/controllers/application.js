import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchForEvents() {
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddit', subreddit);
    }
  }
});
