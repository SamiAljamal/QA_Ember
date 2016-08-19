import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
   QuestionFormShow(){
     this.set('addNewQuestion', true);
   },

   saveQuestion() {
     var params= {
       author: this.get('author'),
       inquiry: this.get('inquiry'),
       note: this.get('note')
     };
     this.set('addNewQuestion', false);
     this.sendAction('saveQuestion', params);
   }
  }
});
