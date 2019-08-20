//jquery.cookie.js 默认关闭浏览器删除cookie

//初始化cookie
//ck_sec 有效秒数
function init_cookie(ck_name, ck_value, ck_sec) {
  var date = new Date();
  //var sec = 10;
 // var minutes = 1;
  //date.setTime(date.getTime() + (minutes * 60 * 1000));
  date.setTime(date.getTime() + (ck_sec * 1000));
  //$.cookie("time", "10s", { expires: date });
  $.cookie(ck_name, ck_value, { expires: date });
  console.log("当前cookie");
  console.log($.cookie());
  console.log(ck_name+'添加成功！');
}

//删除cookie
function dele_cookie(cookie_name) {
  $.removeCookie(cookie_name);
  console.log("当前cookie");
  console.log($.cookie());
  cosole.log(cookie_name+'已经被移除！');
}