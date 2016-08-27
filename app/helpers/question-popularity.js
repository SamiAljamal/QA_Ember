import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
  if(question.get('answers').get('length') >5){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"> Popular&nbsp;Question!</span>');
  }
  else if(question.get('answers').get('length')<1){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove"> No&nbsp;Answer!</span>');
  }

}

export default Ember.Helper.helper(questionPopularity);
