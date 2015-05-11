(function () {

  this.Demo = this.Demo || {};

  this.Demo.View = _.inherit({
    initialize: function (options) {
      this.templateFn = _.template(options.template);
      this.$el = $(options.container);

      _.extend(this, options);
    },

    render: function (data) {
      var html = this.templateFn(data);
      this.$el.html(html);
      this.bindEvents();
    },

    update: function (data) {
      this.render(data);
    },

    bindEvents: function (){
      //
    }

  });

}).call(this);
