import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question',params.question_id)
  },
  actions:{
    destroyQuestion(question){
      var question_deletions = question.get('answers').map(function(rental){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(question_deletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    update(question,params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    }
  }
});
