import Ember from 'ember';

export default Ember.Controller.extend({
  sortedPosts: Ember.computed('model', function() {
    let posts = this.get('model').data.children;
    let sortedPosts = posts.sort(function(postA, postB) {
      return postB.data.score - postA.data.score;
    });

    return sortedPosts;
  })
});
