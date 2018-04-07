$(document).ready(function(){

  $(".workImage").on("mouseenter", function(){
    $(this).addClass("workHover");
  });
  $(".workImage").on("mouseleave", function(){
    $(this).removeClass("workHover");
  });
});