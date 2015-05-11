(function (){

  this.Demo = this.Demo || {};

  this.Demo.UserModel = _.inherit(this.Demo.Model, {
    initialize: function ($super, options){
      $super(options);
    },
    request: function (id){
      // 请求数据
      $.ajax({
        url: "/user/",
        data: {
          id: id
        },
        success: _.bind(function (data){
          if(data){
            var user = this.format(data);
            this.set(user);
            this.publish();
            this.sidebarModel.publish({tag: 'user:update', data: this.data);
          }
        }, this)
      });
    },
    format: function(data){
      var user = {
        id: data.id,
        name: data.nickname,
        gender: data.gender,
        avatar: data.avatar
      };
      return user;
    }
  });
}).call(this);
