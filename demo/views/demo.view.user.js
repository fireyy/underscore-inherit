(function(){

  this.Demo = this.Demo || {};

  this.Demo.UserView = _.inherit(this.Demo.View, {
    initialize: function ($super, options) {
      options.template = [
        '<div class="user">',
          '<a href="/<%=user.id%>"><%=user.name%></a>',
        '</div>'
      ];
      options.container = '#js-user-container';
      options.id = 'demo-user';

      $super(options);

      this.userModel.request(123);
    }
  });

}).call(this);
