var AppView = Backbone.View.extend({

  el: '#app',
  // Add Video Data URL
  // url: 'src/views/exampleVideoData.js',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    console.log('initialize');
    console.log('here is this .videos,', this.videos.models[0]);
  },

  render: function() {
    this.$el.html(this.template());

    // Video List View
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    console.log('render been called');

    // Search View
    new SearchView({
      el: this.$('.search')
    }).render();

    // Video Player View
    new VideoPlayerView({
      collection: this.videos,
      // video: this.videos.at(0),
      el: this.$('.player')
    }).render();


  },

  template: templateURL('src/templates/app.html'),

});