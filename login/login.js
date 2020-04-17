$("#signup").click(function(){
    $("#signup").css("background-color","#a8dcdf").css("color","#fff");
    $("#signin").css("background","none").css("color","#000");
    $("#signup-content").show(300);
    $("#signin-content").hide(300);
});

$("#signin").click(function(){
    $("#signin").css("background-color","#a8dcdf").css("color","#fff");
    $("#signup").css("background","none").css("color","#000");
    $("#signin-content").show(300);
    $("#signup-content").hide(300);
});

var xhr = new XMLHttpRequest();
xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup");
// setRequestHeader("傳送格式","格式")
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("email=abcde@gmail.com&password=123456");

