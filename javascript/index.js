
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("sbody").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sbody").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

  function openCart(){

    location.href="cart.html"
  }
  function viewSocial(){

    location.href="social.html"
  }
  function viewVideo(){

    location.href="video.html"
  }
  function openWishlist(){

    location.href="cart.html"
  }
  function loginUser(){

    location.href="login.html"
  }
  function checkout(){

    location.href="checkout.html"
  }
  function wishlist(){

    location.href="wishlist.html"
  }
  function shopMen(){

    location.href="men.html"
  }
  function shopWomen(){

    location.href="women.html"
  }
  function shopKids(){

    location.href="kids.html"
  }


    
