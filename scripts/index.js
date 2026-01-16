/* https://www.sitepoint.com/community/t/show-a-gif-on-button-click-then-hide-it/43049/9 */

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}

$("#summonGif").on("click", function(){
  $("#gif").fadeIn().center();
  setTimeout(function(){
    $("#gif").fadeOut()
  }, 1000);
});