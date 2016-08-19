import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyQuestion(question){
      if(confirm('Do you want to delete this Question?')){
        this.sendAction('destroyQuestion',question)
      }
    }
  }
});
