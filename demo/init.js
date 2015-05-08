(function (){
  var sidebarModel = new Demo.SidebarModel();
  var sidebarView = new Demo.SidebarView({
    sidebarModel: sidebarModel
  });
  sidebarModel.register(sidebarView);
}).call(this);
