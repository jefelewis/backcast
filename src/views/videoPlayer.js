var VideoPlayerView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    this.render();
    // Why sync?
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    // 
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});
