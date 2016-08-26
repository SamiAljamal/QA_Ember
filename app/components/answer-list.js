import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),
  actions: {
    upVote(answer){
      this.sendAction('upVote',answer);
    },
    downVote(answer){
      this.sendAction('downVote', answer);
    }
  }
});
