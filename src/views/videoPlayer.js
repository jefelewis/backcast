var VideoPlayerView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
