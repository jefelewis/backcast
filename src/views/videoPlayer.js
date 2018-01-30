var VideoPlayerView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    // Why sync?
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    // Assigns the first item (video) in the collection to the video player
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});
