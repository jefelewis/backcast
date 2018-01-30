var VideoListView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    //
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //
    this.collection.each(function (video) {
      this.$('.video-list').append(
        new VideoListEntryView({
          model: video
        }).render().el
      );
    
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html'),

});