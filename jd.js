top2(); //吸顶
function top2() {
  let i = $(document).scrollTop();
  let k = $("#top").offset().top;
  let k2 = $(document).scrollTop();
  console.log(k2);
  if (i - k <= 0) {
    $(".ljydq-content").css("top", "0");
  }
  if (i - k > 0) {
    $(".ljydq-content").css("top", i - k - 10);
  }
  $(".right_xd_content").css("top", k2);
  if (k2 > 800) {
    $(".search_hide").css("display", "block");
    $(".search_hide1").css("top", "130px");
    $(".search_hide").css("position", "sticky");
    $(".right_xd_content").css("top", k2 + 52);
  }
  if (k2 <= 800) {
    $(".search_hide").css("display", "none");
  }
  if (k2 <= 500) {
    $(".search_hide1").css("display", "none");
  }
  if (k2 > 600) {
    $(".search_hide1").css("display", "block");
    $(".search_hide1").css("position", "sticky");
  }
  setTimeout(top2, 500);
}
function to_top() {
  let k3 = $("document").scrollTop();
  document.documentElement.scrollTop = k3;
}
function right_content_open() {
  $(".right_xd_content").css("width", "230px");
  $(".right_xd").css("margin-right", "230px");
}
function right_content_close() {
  $(".right_xd_content").css("width", "0px");
  $(".right_xd").css("margin-right", "0px");
}

function changebc() {
  document.body.style.backgroundColor = "red";
}

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  clearTimeout(time1);
  setTimeout(showSlides1, 4000);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  clearTimeout(time1);
  setTimeout(showSlides1, 4000);
}
showSlides1();

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  time1 = setTimeout(showSlides1, 4000);
}

// 鼠标划过整个容器时停止自动播放
wrap.onmouseover = function () {
  clearTimeout(time1);
};
// 鼠标离开整个容器时继续播放至下一张
wrap.onmouseout = function () {
  time1 = setTimeout(showSlides1, 4000);
};

var slideIndexw = 0;
showSlidesw(slideIndexw);
showSlidesw1();
function plusSlidesw(n) {
  showSlidesw((slideIndexw += n));
  showSlidesw2((slideIndexw2 += n));
  showSlidesw3((slideIndexw3 += n));
}
function showSlidesw(n) {
  let i;
  let slidesw = document.getElementsByClassName("mySlides1");
  if (n > slidesw.length) {
    slideIndexw = 1;
  }
  if (n < 1) {
    slideIndexw = slidesw.length;
  }
  for (i = 0; i < slidesw.length; i++) {
    slidesw[i].style.display = "none";
  }
  slidesw[slideIndexw - 1].style.display = "block";
}
function showSlidesw1() {
  let i;
  let slidesw = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slidesw.length; i++) {
    slidesw[i].style.display = "none";
  }
  slideIndexw++;
  if (slideIndexw > slidesw.length) {
    slideIndexw = 1;
  }
  slidesw[slideIndexw - 1].style.display = "block";
  time1 = setTimeout(showSlidesw1, 6000);
}

var slideIndexw2 = 0;
showSlidesw2(slideIndexw2);
showSlidesw21();
function showSlidesw2(n) {
  let i;
  let slidesw2 = document.getElementsByClassName("mySlides2");
  if (n > slidesw2.length) {
    slideIndexw2 = 1;
  }
  if (n < 1) {
    slideIndexw2 = slidesw2.length;
  }
  for (i = 0; i < slidesw2.length; i++) {
    slidesw2[i].style.display = "none";
  }
  slidesw2[slideIndexw2 - 1].style.display = "block";
}
function showSlidesw21() {
  let i;
  let slidesw2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slidesw2.length; i++) {
    slidesw2[i].style.display = "none";
  }
  slideIndexw2++;
  if (slideIndexw2 > slidesw2.length) {
    slideIndexw2 = 1;
  }
  slidesw2[slideIndexw2 - 1].style.display = "block";
  time1 = setTimeout(showSlidesw21, 6000);
}

var slideIndexw3 = 0;
showSlidesw3(slideIndexw3);
showSlidesw31();
function showSlidesw3(n) {
  let i;
  let slidesw3 = document.getElementsByClassName("mySlides3");
  if (n > slidesw3.length) {
    slideIndexw3 = 1;
  }
  if (n < 1) {
    slideIndexw3 = slidesw3.length;
  }
  for (i = 0; i < slidesw3.length; i++) {
    slidesw3[i].style.display = "none";
  }
  slidesw3[slideIndexw3 - 1].style.display = "block";
}
function showSlidesw31() {
  let i;
  let slidesw3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slidesw3.length; i++) {
    slidesw3[i].style.display = "none";
  }
  slideIndexw3++;
  if (slideIndexw3 > slidesw3.length) {
    slideIndexw3 = 1;
  }
  slidesw3[slideIndexw3 - 1].style.display = "block";
  time1 = setTimeout(showSlidesw31, 6000);
}
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(59 - m);
    s = checkTime(59 - s);
    var h1 = 2;
    //while((m=59)&(s=59)){h1=h1-1;}
    document.getElementById("txt").innerHTML = h + ":00";
    document.getElementById("txt1").innerHTML = "0" + h1;
    document.getElementById("txt2").innerHTML = m;
    document.getElementById("txt3").innerHTML = s;
    t = setTimeout(function () {
      startTime();
    }, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

