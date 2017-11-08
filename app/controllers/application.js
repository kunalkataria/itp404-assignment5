import Ember from 'ember';

export default Ember.Controller.extend({
  email1: {
    read: false,
    title: 'This email starts off unread'
  },

  email2: {
    read: true,
    title: 'This email starts off read'
  },

  email3: {
    read: false,
    title: 'Once an email is marked read, it cannot be marked unread'
  },

  actions: {
    searchForEvents() {
      let subreddit = this.get('subreddit');
      this.transitionToRoute('subreddit', subreddit);
    },

    markAsRead() {
      
    }
  }
});
