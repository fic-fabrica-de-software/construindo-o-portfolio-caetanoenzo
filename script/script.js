document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const loading = document.querySelector('.loading');
  
    // 1) If we're on profiles.html (i.e. #content exists)…
    if (content) {
      // 1a) Redirect on full reload
      const nav = performance.getEntriesByType("navigation")[0];
      if (nav.type === "reload") {
        // change this path if your index.html lives elsewhere
        const indexPath = '../index.html';
        window.location.href = indexPath;
        return; // stop any further code
      }
  
      // 1b) Initial zoom-fade-in
      requestAnimationFrame(() => {
        content.classList.add('show');
      });
  
      // 1c) Fetch-loader navigation with zoom-fade
      function loadPage(url) {
        content.classList.remove('show');
        setTimeout(() => {
          fetch(url)
            .then(r => r.text())
            .then(html => {
              content.innerHTML = html;
              content.classList.add('show');
            });
        }, 400); // matches your CSS transition timing
      }
  
      document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', e => {
          e.preventDefault();
          loadPage(a.href);
        });
      });
    }
  
    // 2) Your existing “loading” → profiles redirect
    if (loading) {
      const totalDuration = 0.5e3 + 4e3; // same as before
      setTimeout(() => {
        window.location.href = 'public/profiles.html';
      }, totalDuration);
    }
  });
  