$(document).ready(function () {
  $(".guide-box").hide();
  $(window).scroll(function () {
    $(".guide-box").hide();
    $(".guide-span").removeClass("rotate1").addClass("rotate");

  })

  $(function () {

    $(".guide").click(function () {
      $(".guide-box").slideToggle();
      if ($(".guide-span").hasClass("rotate")) {
        $(".guide-span").removeClass("rotate").addClass("rotate1");
      } else {
        $(".guide-span").removeClass("rotate1").addClass("rotate");
      }
    })


  });
})
$(function () {
  // 新闻模块
  $('.panel-tabs li').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.m-list-item').eq(indexC).addClass('active').siblings().removeClass('active');
  })
  $('.panel-tabs li').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.m-list-item').eq(indexC).addClass('active').siblings().removeClass('active');
  })

  //选项卡切换
  $('.referral-top a').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.cont ').eq(indexC).addClass('active').siblings().removeClass('active');
    $('.game-tab2-box ').eq(indexC).addClass('active').siblings().removeClass('active');
  })
  $('.referral-wq  a').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').eq(indexC).addClass('active').siblings().removeClass('active');
    $('.referral-wq a').eq(indexC).addClass('active').siblings().removeClass('active');
    $('.game-tab2-box-item ').eq(indexC).addClass('active').siblings().removeClass('active');
  })
  $('.weapon-tabs-item').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.weapon-property ').eq(indexC).addClass('active').siblings().removeClass('active');
    $('.weapon-pic ').eq(indexC).addClass('active').siblings().removeClass('active');
  })
  $('.referral-ms a').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.referral-ms a ').eq(indexC).addClass('active').siblings().removeClass('active');

  })
  $('.referral-map a').click(function () {
    indexC = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.referral-map a ').eq(indexC).addClass('active').siblings().removeClass('active');
  })
})
// 1. 创建一个变量存放索引，表示当前显示的是哪个位置上显示项
var index = 0;
// 2. 找到右侧按钮注册点击事件
$('.arrow-right').click(function () {
  // 2.1 索引+1 
  index++;
  // 2.2 索引限制
  if (index > $('.slider li').length - 1) {
    index = 0;
  }
  console.log(index);
  console.log($(".box_skitter_esports_nav li"));
  // 2.3 通过索引找到下一张显示（fadeIn）,其他兄弟要隐藏（fadeOut）
  $('.slider li').eq(index)
    .fadeIn(600)
    .siblings()
    .fadeOut(600);

  // 2.4 对应的小点点要切换样式
  $('.control a').eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active');
  $(".box_skitter_esports_nav li").eq(index).addClass('active').siblings().removeClass('active');
});

// 3. 找到左侧按钮注册点击事件
$('.arrow-left').click(function () {
  // 3.1 index-1
  index--;
  // 3.2 限制索引（小于0变为7）
  if (index < 0) {
    index = $('.slider li').length - 1;
  }
  // 3.3 通过索引找到下一张显示（fadeIn）,其他兄弟要隐藏（fadeOut）
  $('.slider li').eq(index)
    .fadeIn(600)
    .siblings()
    .fadeOut(600);
  // 3.4 对应的小点点要切换样式
  $('.control a').eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active');
  $(".box_skitter_esports_nav li").eq(index).addClass('active').siblings().removeClass('active');
});


// 4. 自动轮播
var num; // 定时器的标识
function autoPlay() {
  num = setInterval(function () {
    $('.arrow-right').click();

  }, 3000);
}
autoPlay();  // 启动自动轮播

// 5. 鼠标移入到轮播区的时候，停止自动轮播
$('.slider').mouseover(function () {
  clearInterval(num);
});

// 6. 鼠标移出轮播区的时候，开启自动轮播
$('.slider').mouseout(function () {
  autoPlay();
});


// 7. 点击小点点实现切换
// 7.1 给a注册点击事件
$('.control a').click(function () {
  // 7.2 获取当前a的索引
  var index = $(this).index();
  // 7.3 根据索引找到显示项fadeIn 其他的显示项fadeOut
  $('.slider li').eq(index)
    .fadeIn(600)
    .siblings()
    .fadeOut(600);
  // 7.4 当前a的样式发生改变（加类名active），其他兄弟要去掉active
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active');

  $(".box_skitter_esports_nav li").eq(index).addClass('active').siblings().removeClass('active');
});

$(document).ready(function () {
  $("#boxscroll").niceScroll({ cursorborder: "", cursorcolor: "#00F", boxzoom: true });
});


$('.carousel-left-bottom li').click(function () {
  // 7.2 获取当前a的索引
  var index = $(this).index();
  // 7.3 根据索引找到显示项fadeIn 其他的显示项fadeOut
  $('.carousel-left-top li').eq(index)
    .fadeIn(600)
    .siblings()
    .fadeOut(600);
  // 7.4 当前a的样式发生改变（加类名active），其他兄弟要去掉active
  $(this)
    .addClass('active')
    .siblings()
    .removeClass('active');
});

$(".carousel-left-bottom li").click(function () {
  $(".carousel-left-bottom ").css("backgroundImage", "url('./img/7db283edaede60e18de374a99f5391801574159637.jpg')");
})