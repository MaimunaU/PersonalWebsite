function modalFunc(modalId, btnId) {
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);

    btn.onclick = function() {
    modal.style.display = "block";
    }

    document.querySelectorAll('.close').forEach(span => {
        span.addEventListener('click', () => {
            span.closest('.modal').style.display = 'none';
        });
    });

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}