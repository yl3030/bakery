$("*").each(function(){
    $(this).click(funtion(){
        var target = $(this).attr("data-goto-target");
        if(target!=undefined){
            //  時間屬性
            var dur=$(this).attr("data-goto-duration");
            // 上方位置=目標屬性.位移.上方(目標屬性最上方的位移量)
            var top=$(target).offset().top;
            
            console.log("target="+target);
            console.log("dur="+dur);
            console.log("top="+top);

            // 將捲軸移動到top位置
            // $("html,body").scrollLeft(top);
            $("html,body").animate({scrollTop:top},parseInt(dur));
         }
    });
});

// 當滑鼠滾輪滾動時停止動作
// jqon 事件：mousewheel滑鼠滾動
$(window).on("mousewheel", function () {
    $("*").stop();
});