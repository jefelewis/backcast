var AppView = Backbone.View.extend({

  el: '#app',
  // Add Video Data URL
  url: 'src/views/exampleVideoData.js',

  initialize: function() {
    this.videos = new Videos();
    // Add new instances for VideoListView and VideoPlayerView
    this.videoList = new VideoListView();
    this.videoPlayer = new VideoPlayerView();
    // Render on Initialization
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // 
    this.$el.html(this.template());
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});