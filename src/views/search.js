var SearchView = Backbone.View.extend({

  // Initialze Application
  initialze: function() {
    this.render();
  },

  render: function() {
    // console.log('here is this.el', this.$el)
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
