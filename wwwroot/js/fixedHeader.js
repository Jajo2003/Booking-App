document.addEventListener("DOMContentLoaded", function() {
    var signinBtn = document.querySelector('.sign-in');
    var header = document.getElementById("Header");
    var navOpts = document.querySelectorAll(".opt");

    window.addEventListener('scroll',function(){
      let currentHeight = window.pageYOffset;
      let headerHeight = header.offsetHeight;
      if(currentHeight>headerHeight+10)
      {
        navOpts.forEach((navOpt) =>{
          navOpt.classList.add('fixedopts');
          navOpt.classList.remove('opt');

        });
        header.classList.add('fixedHeader');
        signinBtn.style.color = "#fff";
        signinBtn.style.backgroundColor = "#000";
      }
      else
      {
        header.classList.remove('fixedHeader');
        navOpts.forEach((navOpt) =>{
          navOpt.classList.remove('fixedopts');
          navOpt.classList.add('opt');
        });
        signinBtn.style.backgroundColor = "#fff";
        signinBtn.style.color = "#000";
      }
    });
});