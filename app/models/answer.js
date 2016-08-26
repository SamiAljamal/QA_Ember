import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  votes: DS.attr('number'),
  question: DS.belongsTo('question', {async: true})

});
