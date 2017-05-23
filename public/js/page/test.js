//小咸鱼

var names,fa;
var button=document.getElementsByTagName('button')[0];

names=paerents(button,'what');
function paerents(son,klass) {
  var father=son.parentElement;
  if (father.className==klass&&father.className){
     // console.log("现在的father是");
     // console.log(father);
     var pa;
     pa=father;
    return pa;
    }
  else {
     paerents(father,klass);
  }
}
fa=paerents(button,'what');
console.log(fa);


//页面提示
var date=new Date();;
console.log("提示：页面在【"
  +date.getFullYear()+"年"
  +(date.getMonth()+1)+"月"
  +date.getDate()+"日"
  +date.getHours()+"时"
  +date.getMinutes()+"分"
  +date.getSeconds()+"秒"
  +"】的时候自动刷新了");