document.addEventListener("DOMContentLoaded", function() {
  console.log("working");
  // carousel-itemクラスの要素の配列
  var carouselItem = document.getElementsByClassName("carousel-item");
  // 表示される画像の番号. ゼロベース
  var activeNum = 0;
  // 繰り返しの間隔
  var intervalMSec = 3000;

  setInterval(function() {
    // 現在表示されている画像を左に移動
    carouselItem[activeNum++].classList.add("toLeft");
    // 直前に表示されていた画像を元の位置（表示されている画像の右）に
    carouselItem[(activeNum-2+carouselItem.length)%carouselItem.length].classList.remove("active");
    carouselItem[(activeNum-2+carouselItem.length)%carouselItem.length].classList.remove("toLeft");
    // 現在表示されている画像の次の画像を表示させる
    // 直前に表示されていた画像が最後の要素のときは、0番目の画像を表示させる
    carouselItem[activeNum%=carouselItem.length].classList.add("active");
  }, intervalMSec);
})
