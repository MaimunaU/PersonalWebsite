document.addEventListener('DOMContentLoaded', () => {

    const modals = document.querySelectorAll('.modal');
  
    document.querySelectorAll('.proj-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
      });
    });
  
    document.querySelectorAll('.close').forEach(span => {
      span.addEventListener('click', () => {
        span.closest('.modal').style.display = 'none';
      });
    });
  
    window.addEventListener('click', (event) => {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  
});

document.querySelectorAll('.left-side').forEach(pic => {
  const images = JSON.parse(pic.dataset.images);
  let currentIndex = 0;

  const imgElement = pic.querySelector('.current-img');
  const nextBtn = pic.querySelector('.next');
  const prevBtn = pic.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
  });
});