(function (){

  this.Demo = this.Demo || {};

  this.Demo.SidebarModel = _.inherit(this.Demo.Model, {
    initialize: function ($super, options){
      $super(options);
    },
    request: function (){
      // 请求数据
      // $.ajax();
    }
  });
}).call(this);
