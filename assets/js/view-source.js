/* "View page source": shows the HTML this page was served as, in a plain <pre>.
   Progressive enhancement: without JavaScript the button stays hidden and nothing else changes. */
(function () {
  var btn = document.querySelector('.view-source');
  var pre = document.getElementById('page-source');
  if (!btn || !pre || !window.fetch) return;
  btn.hidden = false;

  function open() {
    pre.hidden = false;
    btn.textContent = 'Hide page source';
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    pre.hidden = true;
    btn.textContent = 'View page source';
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    if (!pre.hidden) { close(); return; }
    if (pre.textContent) { open(); return; }
    fetch(location.href.split('#')[0], { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (text) { pre.textContent = text; open(); })
      .catch(function () {
        pre.textContent = 'The source could not be loaded here. It is on GitHub: https://github.com/pauleburlon/pauleburlon.github.io';
        open();
      });
  });
})();
