Items = new Meteor.Collection('items');

var remote = DDP.connect('http://localhost:3000/');
var ServerAItems = new Meteor.Collection('items', { connection: remote });

Meteor.startup(function() {
    Items.remove({});
    remote.subscribe('remote-items');
  });
ServerAItems.find().observe({
    added: function(item) {
      console.log('-- New remote item --');
      console.log(item);
      Items.insert(item);
    }
  });
