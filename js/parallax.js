

$(function(){
$(".navbar li").on("click", function() { 
  $(".navbar li").removeClass("active"); 
  $(this).addClass("active"); 
}); 
$("nav ul li a[href^='#']").on('click', function(e) { 
e.preventDefault(); 
var hash = this.hash; 
$('html, body').animate({ scrollTop: $(hash).offset().top }, 700, function(){ 
window.location.hash = hash; }); 
}); 
});