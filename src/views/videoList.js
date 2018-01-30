var VideoListView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log('Video List This: ' + this);
    // this.video = new VideoListEntryView();
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

});