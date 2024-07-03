$(document).ready(function () {
  $('.slick-carousel').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const clickableCards = document.querySelectorAll('.card-clickable');

  let startX;
  let startY;
  let isSwiping = false;

  clickableCards.forEach((card) => {
    card.addEventListener('mousedown', function (event) {
      event.preventDefault();
      console.log('mousedown');
      startX = event.clientX;
      startY = event.clientY;
      isSwiping = false;

      // Adiciona eventos ao document
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
      event.preventDefault();
      const dx = Math.abs(event.clientX - startX);
      const dy = Math.abs(event.clientY - startY);

      if (dx > 10 || dy > 10) {
        isSwiping = true;
      }
    }

    function onMouseUp(event) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (!isSwiping) {
        console.log('mouseup');
        console.log(isSwiping);
        event.preventDefault();
        const target = card.getAttribute('data-bs-target');
        const modal = new bootstrap.Modal(document.querySelector(target));
        modal.show();
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  });
});
