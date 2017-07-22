//$(document).ready(function(){
//    //console.log("1");
//
//    setTimeout(function(){
//        console.log("1");
//        $(" #head>div>div").css({
//            "transform":"translateZ(0)"
//        })
//
//    },0);
//
//});
$(function(){
    $(" #successCases").hover(function(e){
        e.preventDefault();
        console.log("1");
        $(this).addClass("active").html("SUCCESSFUL CASES");
    },function(e){
        e.preventDefault();
        console.log("1");
        $(this).removeClass("active").html("成功案例");
    });

    $(" #more").hover(function(e){
        e.preventDefault();
        console.log("1");
        $(this).addClass("active").html("FIND MORE");
    },function(e){
        e.preventDefault();
        console.log("1");
        $(this).removeClass("active").html("查看更多");
    });

    $(" #navBtn").click(function(){
        $(" div.mark").addClass("black");
        $(" #box div:first-child").removeClass("active").next().addClass("active");
        $(" #navExplain span").css({
            "top":"-2rem"
        });
        $(" #nav .pull-right div:first-child").removeClass("active").next().addClass("active");
    });
    $(" #shutDown").click(function(){
        $(" div.mark").removeClass("black");
        $(" #box div:last-child").removeClass("active").prev().addClass("active");
        $(" #navExplain span").css({
            "top":"0rem"
        });
        $(" #nav .pull-right div:last-child").removeClass("active").prev().addClass("active");
    });
    $(" #vrCases").click(function(e){
        e.preventDefault();
        $(" #head div:first-child").removeClass("active").next().addClass("active");
        $(" #head ").addClass("bg-none");
    })
    $(" #vrBtn").click(function(){
        $(" #head div:last-child").removeClass("active").prev().addClass("active");
        $(" div.mark").removeClass("black");
        $(" #head ").removeClass("bg-none");
        $(" #navExplain span").css({
            "top":"0rem"
        });
    })

});