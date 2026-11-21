/* Prototipo semifuncional – sin backend ni almacenamiento */

/* 1. Íconos (trazo simple, estilo de la pantalla GAIT). Uso: <i data-i="nombre"></i> */
const P = {
  back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  next: '<path d="M9 18l6-6-6-6"/>',
  prev: '<path d="M15 18l-6-6 6-6"/>',
  sep: '<path d="M9 18l6-6-6-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
  video: '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  map: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  walk: '<circle cx="13" cy="4" r="2"/><path d="M9 21l2-6 3 3v5M8 12l2-4 4 1 2 4M11 9l-1 6"/>',
  alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  check: '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4L12 14l-3-3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  coin: '<circle cx="12" cy="12" r="10"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>',
  tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  down: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  rotate: '<path d="M21 2v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 8"/>',
  steps: '<path d="M4 16v-2.4C4 11.5 3 10.5 3 8c0-2.7 1.5-6 4.5-6C9.4 2 10 3.8 10 5.5c0 3.1-2 5.7-2 8.7V16a2 2 0 1 1-4 0zM20 20v-2.4c0-2.1 1-3.1 1-5.6 0-2.7-1.5-6-4.5-6C14.6 6 14 7.8 14 9.5c0 3.1 2 5.7 2 8.7V20a2 2 0 1 0 4 0z"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  play: '<path d="M6 4l14 8-14 8z" fill="currentColor"/>',
};
document.querySelectorAll('i[data-i]').forEach(el => {
  el.outerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="${el.className}">${P[el.dataset.i] || ''}</svg>`;
});

/* 2. Breadcrumb: si no cabe, oculta los niveles intermedios y muestra "…" (tocar para expandir) */
const crumbs = document.querySelector('.crumbs');
if (crumbs) {
  const parts = [...crumbs.children]; // texto, sep, texto, sep, ..., actual
  const cur = parts[parts.length - 1];
  cur.style.flexShrink = 0;
  const fits = () => crumbs.scrollWidth <= crumbs.clientWidth;
  const hide = (e, h) => e.style.display = h ? 'none' : '';
  const hidden = [];
  if (!fits()) {
    const dots = document.createElement('span');
    dots.className = 'dots'; dots.textContent = '…'; dots.title = 'Mostrar ruta completa';
    const sep = parts[1].cloneNode(true);
    crumbs.prepend(dots, sep);
    for (let i = 0; !fits() && i < parts.length - 3; i += 2) {
      hide(parts[i], 1); hide(parts[i + 1], 1); hidden.push(parts[i], parts[i + 1]);
    }
    dots.onclick = () => { hidden.forEach(e => hide(e, 0)); dots.remove(); sep.remove(); crumbs.style.flexWrap = 'wrap'; };
  }
  cur.style.flexShrink = '';
}

/* 3. Buscador: filtra las tarjetas de la pantalla */
const input = document.querySelector('.search input');
if (input) {
  const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const list = document.querySelectorAll('[data-search] > *');
  const empty = document.querySelector('.empty');
  input.addEventListener('input', () => {
    const q = norm(input.value.trim()); let n = 0;
    list.forEach(c => { const ok = norm(c.textContent).includes(q); c.style.display = ok ? '' : 'none'; n += ok; });
    empty && empty.classList.toggle('show', !n);
  });
}

/* 4. Visualizador: PDF (páginas como imagen) y video */
const modal = document.querySelector('.modal');
if (modal) {
  const sheet = modal.querySelector('.sheet'), img = sheet && sheet.querySelector('img');
  const pager = modal.querySelector('.pager'), num = modal.querySelector('.num'), link = modal.querySelector('.open-pdf');
  const player = modal.querySelector('.player');
  let name, total, page;
  const show = p => {
    page = p; img.src = `assets/pdf/pages/${name}-${p}.jpg`; num.textContent = p;
    modal.querySelector('[data-go="-1"]').disabled = p === 1;
    modal.querySelector('[data-go="1"]').disabled = p === total;
    sheet.scrollTop = 0;
  };
  const open = () => { modal.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => {
    modal.classList.remove('open'); document.body.style.overflow = '';
    if (player) player.innerHTML = '';
  };
  document.querySelectorAll('[data-pdf]').forEach(b => b.addEventListener('click', () => {
    name = b.dataset.pdf; total = +b.dataset.pages;
    modal.querySelector('.total').textContent = total;
    link.href = `assets/pdf/${name}.pdf`;
    show(1); open();
  }));
  document.querySelectorAll('[data-video]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}?autoplay=1&rel=0&playsinline=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="Video"></iframe>`;
    open();
  }));
  modal.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => show(page + +b.dataset.go)));
  modal.querySelector('.close').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
}
