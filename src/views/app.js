var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // Add new instances for videoList and videoPlayer
    this.videoList = new VideoListView();
    this.videoPlayer = new VideoListPlayerView();
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