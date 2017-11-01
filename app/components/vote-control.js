import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.errors = [];
    this.set('scorechange', 0);
  },

  actions: {
    upvote() {
      let scorechange = this.get('scorechange');
      if (scorechange < 1) {
        let newVoteValue = this.get('score') + 1;
        this.set('scorechange', this.get('scorechange') + 1);
        this.get('onvote')(newVoteValue);
      }
    },

    downvote() {
      let scorechange = this.get('scorechange');
      if (scorechange > -1) {
        let newVoteValue = this.get('score') - 1;
        this.set('scorechange', this.get('scorechange') - 1);
        this.get('onvote')(newVoteValue);
      }
    }
  }
});
