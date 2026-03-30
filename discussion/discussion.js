function openComposer() {
    const composer = document.getElementById('composer');
    composer.classList.add('visible');
    document.getElementById('post-title').focus();
  }

  function closeComposer() {
    document.getElementById('composer').classList.remove('visible');
    document.getElementById('post-title').value = '';
    document.getElementById('post-body').value = '';
  }

  function submitPost() {
    const title = document.getElementById('post-title').value.trim();
    const body = document.getElementById('post-body').value.trim();
    if (!title) { alert('Please enter a thread title.'); return; }

    const container = document.getElementById('threads-container');
    const card = document.createElement('div');
    card.className = 'thread-card';
    card.style.borderColor = 'var(--accent-cyan)';
    card.style.animation = 'fadeInUp 0.4s ease both';
    card.innerHTML = `
      <div class="thread-header">
        <div class="thread-avatar" style="background:rgba(0,229,255,0.1)">👤</div>
        <div class="thread-meta">
          <div class="thread-author">You</div>
          <div class="thread-time">Just now</div>
        </div>
        <span class="thread-tag">General</span>
      </div>
      <div class="thread-title">${title}</div>
      <p class="thread-preview">${body || 'No description provided.'}</p>
      <div class="thread-footer">
        <span class="thread-stat">💬 0 replies</span>
        <span class="thread-stat">👁️ 1 view</span>
        <span class="thread-stat">❤️ 0 likes</span>
      </div>
    `;
    container.prepend(card);
    closeComposer();
  }