(function (){
  var userModel = new Demo.UserModel();
  var userView = new Demo.UserView({
    userModel: userModel
  });
  userModel.subscribe(userView);

  var sidebarModel = new Demo.SidebarModel({
    userModel: userModel
  });
  var sidebarView = new Demo.SidebarView({
    userModel: userModel,
    sidebarModel: sidebarModel
  });
  sidebarModel.subscribe(sidebarView);
}).call(this);
