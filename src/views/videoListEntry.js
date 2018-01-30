var VideoListEntryView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.video);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
