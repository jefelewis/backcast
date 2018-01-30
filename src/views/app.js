var AppView = Backbone.View.extend({

  el: '#app',
  // Add Video Data URL
  // url: 'src/views/exampleVideoData.js',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    console.log('initialize');
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
    new searchView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    // Video Player View
    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
  },

  template: templateURL('src/templates/app.html'),

});