import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  inquiry: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answers', {async: true})
});
