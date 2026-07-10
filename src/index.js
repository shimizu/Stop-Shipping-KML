import './index.scss'

// ---- language toggle (in-memory only; no browser storage) ----
function setLang(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.getElementById('btn-ja').setAttribute('aria-pressed', String(lang==='ja'));
  document.getElementById('btn-en').setAttribute('aria-pressed', String(lang==='en'));
}

// Viteのモジュールスコープからグローバル(HTMLのonclick)で呼び出せるように公開
window.setLang = setLang;

// ---- countdown to June 25, 2027 (JST) ----
(function(){
  var end = new Date('2027-06-25T00:00:00+09:00');
  var days = Math.max(0, Math.ceil((end - Date.now()) / 86400000));
  var daysEl = document.getElementById('cd-days');
  if (daysEl) {
    daysEl.textContent = days.toLocaleString();
  }
})();