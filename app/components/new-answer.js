import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true)
    },
    save1(){
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      this.set('addNewAnswer', false);
      this.sendAction(save2,params);
    }
  }
});