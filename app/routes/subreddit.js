import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let url = `https://www.reddit.com/r/${params.subreddit}.json`;
    let response = $.getJSON(url);
    console.log(response);
    return response;
  }
});
