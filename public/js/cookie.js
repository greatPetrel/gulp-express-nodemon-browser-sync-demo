

// //初始化
// var date = new Date();
//  var minutes = 1;
//  var sec=10;
//  //date.setTime(date.getTime() + (minutes * 60 * 1000));
//  date.setTime(date.getTime() + (sec * 1000));
//  $.cookie("time", "10s", { expires: date });

//  setTimeout(function(){
// 	 if($.cookie('time')){ alert('删除cookie');
// 	 $.removeCookie('time');}
// 	 else{ console.log('cookie不存在'); }
	
//  },10000);

	function init_cookie(ck_name,ck_value,ck_sec){
      var date = new Date();
      var minutes = 1;
      var sec = 10;
      //date.setTime(date.getTime() + (minutes * 60 * 1000));
      date.setTime(date.getTime() + (sec * 1000));
      //$.cookie("time", "10s", { expires: date });
      $.cookie(ck_name,ck_value,ck_sec);
	  console.log("当前cookie");
      console.log($.cookie());
    }
	

    function dele_cookie(cookie_name){
      $.removeCookie(cookie_name);
	   console.log("当前cookie");
	   console.log($.cookie());
    }