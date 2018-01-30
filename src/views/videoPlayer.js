var VideoPlayerView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    this.render();
    this.collection.on('sync', this.render, this);
    // this.video.on('sync', this.render, this);
  },

  render: function() {
  // console.log('inside of VideoPlayerView this is this.video',  this.collection.models[0])
    // console.log('inside of VideoPlayerView')
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});
