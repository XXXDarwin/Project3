document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('checked');
        } else {
          entry.target.classList.remove('checked');
        }
      });
    }, {
      threshold: 0.5 
    });
  
    checkboxes.forEach(checkbox => {
      observer.observe(checkbox);
    });
  });