var VideoListView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});