var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // On initialization, pass exampleVideoData to the new Videos Collection
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  // Render all of the Views (VideoListView, SearchView, VideoPlayer View)
  render: function() {
    this.$el.html(this.template());

    // Video List View (Module)
    new VideoListView({
      // Assign this.videos (window.exampleVideoData) as the Collection
      collection: this.videos,
      // Assign Class from templates/app.html as the Element
      el: this.$('.list')
    }).render();

    // Search View (Module)
    new SearchView({
      // Assign Class from templates/app.html as the Element
      el: this.$('.search')
    }).render();

    // Video Player View (Module)
    new VideoPlayerView({
      // Assign this.videos (window.exampleVideoData) as the Collection
      collection: this.videos,
      // Assign Class from templates/app.html as the Element
      el: this.$('.player')
    }).render();

  },

  template: templateURL('src/templates/app.html'),

});