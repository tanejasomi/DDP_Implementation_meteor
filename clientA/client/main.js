import { ReactiveVar } from 'meteor/reactive-var';
Items = new Meteor.Collection('items');

Items.allow({
  insert: function() {
    return true;
  }
});

Items.find().observe({
  added: function(item) {
    console.log(item);
  }
})

  Template.test.onCreated(function testOnCreated() {
   // counter starts at 0
  this.counter = new ReactiveVar(0);
   });

  Template.test.events({
    'click a.insert': function (e, instance) {
      e.preventDefault();
      //increment the counter and send date and counter to server
      instance.counter.set(instance.counter.get() + 1);
      Items.insert({ date: new Date(), counter:instance.counter.get() });
    },
    'click a.delete': function (e) {
      e.preventDefault();
      Meteor.call('delete');
    },
  });

Template.test.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
