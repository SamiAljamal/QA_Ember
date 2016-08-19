import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.query('question'),
      answers: this.store.query('answer')
    });
  }
});
