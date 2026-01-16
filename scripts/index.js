/* https://www.sitepoint.com/community/t/show-a-gif-on-button-click-then-hide-it/43049/9 */

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}

$("#summonPokemon").on("click", function(){
  $("#pokemon").fadeIn().center();
  setTimeout(function(){
    $("#pokemon").fadeOut()
  }, 1000);
});