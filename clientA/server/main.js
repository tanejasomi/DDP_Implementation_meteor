Items = new Meteor.Collection('items');
  
Meteor.publish('remote-items', function() {
    return Items.find();
  })
