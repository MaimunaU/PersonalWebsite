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