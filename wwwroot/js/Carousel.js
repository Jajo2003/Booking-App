document.addEventListener("DOMContentLoaded", function() {
  var imgs = document.querySelectorAll(".carouselImg");
  var currentIndex = 0;

  function showImage(index) 
  {
    imgs.forEach((img, i) => {
        if (i === index) {
            img.classList.remove('hiddenImg');
            img.classList.add('visibleImg');
        } else {
            img.classList.remove("visibleImg");
            img.classList.add('hiddenImg');
        }
    });
  }
  showImage(currentIndex);

  var prevImg = document.querySelector(".leftCont");
  prevImg.addEventListener('click', function() 
  {
    if (currentIndex === 0) {
        currentIndex = imgs.length - 1;
    } else {
        currentIndex--;
    }
    showImage(currentIndex);
  });

  var nextImg = document.querySelector(".rightCont");
  nextImg.addEventListener('click', function() 
  {
    if (currentIndex === imgs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showImage(currentIndex);
  });
  
//   function loopedCarousel() 
//   {
//     setInterval(function() {
//         if (currentIndex === imgs.length - 1) {
//             currentIndex = 0;
//         } else {
//             currentIndex++;
//         }
//         showImage(currentIndex);
//     }, 3000);
// }

// loopedCarousel();


});