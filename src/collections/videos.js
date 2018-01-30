var Videos = Backbone.Collection.extend({

  model: Video,
  
  // Added Initialize Function
  intialize: function() {
    this.render();
  }

});
