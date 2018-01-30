var VideoListView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    // Why sync?
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // Iterate through the collection data
    this.collection.each(function (video) {
      // Append the collection data to the video list class from videoList.html
      this.$('.video-list').append(
        // Use VideoListEntryView View to pass the video through
        new VideoListEntryView({
          model: video
        // Why .el?
        }).render().el  
      );
    
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

});