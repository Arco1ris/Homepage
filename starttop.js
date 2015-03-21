window.onload=function(){
    var topbtn=document.getElementById("btntop");//获取ID
    var timer=null;//定时器
    var pagelookHeight =document.documentElement.clientHeight;//获取高度
    
    window.onscroll =function(){
        var backtop=document.body.scrollTop;
        if(backtop>=pagelookHeight){  //当大于第一个版面高度，则显示，否则隐藏
            topbtn.style.display="block";
        }else{
            topbtn.style.display="none";
        }
    }
    
    topbtn.onclick=function(){  //设置监听事件
        timer = setInterval(function(){
            var backtop = document.body.scrollTop;//获取滚到顶端的事件
            var speedtop = backtop/5;
            document.body.scrollTop=backtop-speedtop;//滚动速度逐渐变慢
            if(backtop==0){
                clearInterval(timer);//结束滚动效果
            }
        },30);//参数代表30毫秒执行一次
    }
}