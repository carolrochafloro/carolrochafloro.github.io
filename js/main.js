$(document).ready(function () {
  $('.multiple-items').slick({
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
      console.log('mousedown');
      startX = event.clientX;
      startY = event.clientY;
      isSwiping = false;

      // Adiciona eventos ao document
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      console.log('mouseup');
    });

    function onMouseMove(event) {
      const dx = Math.abs(event.clientX - startX);
      const dy = Math.abs(event.clientY - startY);
      console.log(`DX: ${dx}`);
      console.log(`Dy: ${dy}`);

      if (dx > 5 || dy > 5) {
        isSwiping = true;
      }
    }

    function onMouseUp(event) {
      document.removeEventListener('mousemove', onMouseMove);

      if (!isSwiping) {
        event.preventDefault();
        const target = card.getAttribute('data-bs-target');
        const modal = new bootstrap.Modal(document.querySelector(target));
        modal.show();
      }
    }
  });
});
