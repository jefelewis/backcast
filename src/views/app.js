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
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    console.log('render been called');
  },

  template: templateURL('src/templates/app.html'),

});