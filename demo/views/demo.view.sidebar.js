(function(){

  this.Demo = this.Demo || {};

  this.Demo.SidebarView = _.inherit(this.Demo.View, {
    initialize: function ($super, options) {
      options.template = [
        '<ul class="sidebar">',
          '<% _.each(items, function(item){%>',
          '<li><a href="<%=item.url%>"><%=item.title%></a></li>',
          '<%})%>',
        '</ul>'
      ];
      options.container = '#js-sidebar-container';
      options.id = 'demo-sidebar';

      $super(options);
    }
  });

}).call(this);
