import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeScore(newScore) {
      // let post = this.get('post');
      console.log(newScore);
      this.set('post.data.score', newScore);
      // this.set(this.get('score'), newScore);
    }
  }
});
