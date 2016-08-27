import Ember from 'ember';

export default Ember.Route.extend({
  favQ: Ember.inject.service(),

  model(){
   return this.store.findAll('question');
 },
  actions: {
    saveQuestion(params){
      var newQuestion  = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    addtoFav(item){
      this.get('favQ').add(item);
    }
  }

});
