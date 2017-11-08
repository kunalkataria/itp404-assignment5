import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    markEmailRead() {
      let read = this.get('email.read');
      if (!read) {
        this.set('email.read', true);
      }
    }
  }
});
