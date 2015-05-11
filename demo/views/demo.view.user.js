(function(){

  this.Demo = this.Demo || {};

  this.Demo.UserView = _.inherit(this.Demo.View, {
    initialize: function ($super, options) {
      options.template = [
        '<div class="user">',
          '<a href="/<%=id%>"><%=name%></a>',
          '<a class="j-user-logout" href="/logout">Logout</a>',
        '</div>'
      ];
      options.container = '#js-user-container';
      options.id = 'demo-user';

      $super(options);

      this.userModel.request(123);
    },
    events: {
      'click .j-user-logout': 'logout'
    },
    logout: function (e){
      if(!window.confirm("Confirm to logout?")){
        return false;
      }
    }
  });

}).call(this);
