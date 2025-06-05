+document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const loading = document.querySelector('.loading');
  
    if (content) {
      requestAnimationFrame(() => {
        content.classList.add('show');
      });
  
      function loadPage(url) {
        content.classList.remove('show');
        setTimeout(() => {
          fetch(url)
            .then(r => r.text())
            .then(html => {
              content.innerHTML = html;
              content.classList.add('show');
            });
        }, 100);
      }
  
      document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', e => {
          e.preventDefault();
          loadPage(a.href);
        });
      });
    }
  
    if (loading) {
      const totalDuration = 0.5e3 + 4e3;
      setTimeout(() => {
        window.location.href = 'public/profiles.html';
      }, totalDuration);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const profileImages = document.querySelectorAll('.zoomAnim');
  
    profileImages.forEach((img, index) => {
      img.addEventListener('mouseenter', () => {
        profileImages.forEach((otherImg, i) => {
          otherImg.classList.remove('active', 'inactive', 'slide-up', 'slide-down');
  
          if (i === index) {
            otherImg.classList.add('active');
          } else {
            otherImg.classList.add('inactive');
  
            if (i < index) {
              otherImg.classList.add('slide-up');
            } else {
              otherImg.classList.add('slide-down');
            }
          }
        });
      });
  
      img.addEventListener('mouseleave', () => {
        profileImages.forEach(otherImg => {
          otherImg.classList.remove('active', 'inactive', 'slide-up', 'slide-down');
        });
      });
    });
  });
  