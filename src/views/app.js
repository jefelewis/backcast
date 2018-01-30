var AppView = Backbone.View.extend({

  el: '#app',
  // Add Video Data URL
  url: 'src/views/exampleVideoData.js',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),

});