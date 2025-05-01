document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    
    if (name === '' || email === '' || message === '') {
      e.preventDefault();
      alert('Please fill out all required fields.');
    }
  });
  