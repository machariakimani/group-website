function filterAssignments(status, btn) {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.assignment-card').forEach(card => {
      if (status === 'all' || card.dataset.status === status) {
        card.style.display = 'grid';
        card.style.animation = 'fadeInUp 0.4s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  }