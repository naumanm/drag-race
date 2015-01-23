var myCar = document.getElementByID("car");
myCar.style.left = "0px";

window.addEventListener('keyup', function(event) {
  if (event.keyCode === 39) {
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
   }
});
