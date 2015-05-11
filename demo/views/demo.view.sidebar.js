(function(){

  this.Demo = this.Demo || {};

  this.Demo.SidebarView = _.inherit(this.Demo.View, {
    initialize: function ($super, options) {
      options.template = [
        '<div class="sidebar">',
          '<p>Hello, <%=name%></p>',
        '</div>'
      ];
      options.container = '#js-sidebar-container';
      options.id = 'demo-sidebar';

      $super(options);
    },
    update: function (options){
      var map = {
        "user:update": function(data){
          this.render(data);
        }
      };
      var action = map[options.tag];
      if (_.isFunction(action)) {
        action.call(this, options.data);
      }
    }
  });

}).call(this);
