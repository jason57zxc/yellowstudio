$(window).scroll(function() {
  if($(window).scrollTop() <= 0) {
    $(".explore").removeClass("at_top")
  } else {
    $(".explore").addClass("at_top")
  }
})
console.log("123")
console.log((2+"3"-'5')/2)

$(window).mousemove(function(e){
  var pagex = e.pageX;
  var pagey = e.pageY;
  var x = pagex-$("#s_about").offset().left
  var y = pagey-$("#s_about").offset().top

  $(".marginBtn").css("transform","translateX("+(pagex/-20+50)+"px)")

  // console.log(y)
  var catleft = $("#cat").offset().left
  var cattop = $("#cat").offset().top
  var url = "http://awiclass.monoame.com/catpic/"

  
  if(y<0 || y>$("#s_about").outerHeight()){
    $("#cross").css("opacity", "0")
  } else{
    $("#cross").css("opacity", "1")
    $(".r1t").css("transform","translateX("+(y/-10)+"px)")
    $(".r2t").css("transform","translateX("+(y/-20)+"px)")
    $(".r3t").css("transform","translateX("+(y/-30)+"px)")
    $(".tri").css("transform","translateX("+(x/-20)+"px)")
    if(x < catleft) {
      $("#cat").attr("src", url+"cat_left.png")
    } else if(x > catleft+$("#cat").width()) {
      $("#cat").attr("src", url+"cat_right.png")
    } else {
      $("#cat").attr("src", url+"cat_top.png")
    }

    if(x < catleft && pagey < cattop) {
      $("#cat").attr("src", url+"cat_lefttop.png")
    }
      if(x > catleft+$("#cat").width() && pagey < cattop) {
      $("#cat").attr("src", url+"cat_righttop.png")
    }
  }
  
  $("#cross").css("left", x +"px")
  $("#cross").css("top", y +"px")
  
  function cat_move(cat_id, x){
    var catplace=$(cat_id).offset().left+$(cat_id).width()/2;
    if(Math.abs(x - catplace) < 50){
      $(cat_id).css("bottom","0px")
    } else {
      $(cat_id).css("bottom","-30px")
    }
  }
  cat_move("#cat_blue", x);
  cat_move("#cat_yellow", x);
  cat_move("#cat_grey", x);
});

var vm = new Vue({
  el: '#s_work',
  data: {
    works: []
  },
  mounted: function(){
    var vobj =this;
    $.ajax({
    url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
    success: function(res) {
      vobj.works = JSON.parse(res)
      console.log(vobj.works)
    }
  })
  }
})