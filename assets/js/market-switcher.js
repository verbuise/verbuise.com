// market-switcher.js
// Demonstrates Verbuise adapting the page for each market in real time.

(function () {
  var markets = {
    global: {
      flag: '🌐',
      name: 'Global',
      label: 'Globalization Runtime',
      headline: 'Your product should feel<br>native everywhere.',
      sub: 'Verbuise is the adaptive layer that automatically adjusts language, currency, images, and tone for each market. No workflow. No rebuilding. Just behavior.',
      cta: 'Start adapting free',
      annotation: '↑ Same product. One codebase. Every market.'
    },
    japan: {
      flag: '🇯🇵',
      name: '日本',
      label: 'グローバライゼーション ランタイム',
      headline: 'あなたのプロダクトは、<br>どこでも自然に使えるべきです。',
      sub: 'Verbuiseは、言語・通貨・画像・トーンを各市場に合わせて自動的に調整する適応レイヤーです。ワークフロー不要。再構築不要。ただ、動作するだけです。',
      cta: '無料で始める',
      annotation: '↑ 同じプロダクト。一つのコードベース。あらゆる市場。'
    },
    germany: {
      flag: '🇩🇪',
      name: 'Deutschland',
      label: 'Globalisierungs-Runtime',
      headline: 'Ihr Produkt sollte sich<br>überall wie zuhause anfühlen.',
      sub: 'Verbuise ist die adaptive Schicht, die Sprache, Währung, Bilder und Ton für jeden Markt automatisch anpasst. Kein Workflow. Kein Neuaufbau. Einfach Verhalten.',
      cta: 'Kostenlos starten',
      annotation: '↑ Dasselbe Produkt. Eine Codebase. Jeder Markt.'
    },
    mexico: {
      flag: '🇲🇽',
      name: 'México',
      label: 'Motor de Globalización',
      headline: 'Tu producto debería sentirse<br>nativo en todas partes.',
      sub: 'Verbuise es la capa adaptativa que ajusta automáticamente el idioma, la moneda, las imágenes y el tono para cada mercado. Sin flujos de trabajo. Sin reconstrucción. Solo comportamiento.',
      cta: 'Comenzar gratis',
      annotation: '↑ El mismo producto. Un código. Todos los mercados.'
    }
  };

  function setMarket(key) {
    var m = markets[key];
    if (!m) return;

    // Update all translatable elements
    document.querySelectorAll('[data-vb]').forEach(function (el) {
      var field = el.getAttribute('data-vb');
      if (m[field] !== undefined) el.innerHTML = m[field];
    });

    // Update the switcher button label
    var flagEl = document.getElementById('ms-flag');
    var nameEl = document.getElementById('ms-name');
    if (flagEl) flagEl.textContent = m.flag;
    if (nameEl) nameEl.textContent = m.name;

    // Highlight the matching market card
    document.querySelectorAll('.market-card').forEach(function (card) {
      card.classList.remove('market-card-active');
    });
    var activeCard = document.querySelector('.market-card[data-market="' + key + '"]');
    if (activeCard) activeCard.classList.add('market-card-active');

    // Show / hide the demo bar
    var bar = document.getElementById('market-demo-bar');
    if (bar) {
      if (key === 'global') {
        bar.style.display = 'none';
      } else {
        bar.querySelector('.bar-text').textContent =
          m.flag + '\u2002Viewing as ' + m.name + ' \u2014 Verbuise is adapting this page in real time';
        bar.style.display = 'flex';
      }
    }

    closeMenu();
  }

  function toggleMenu() {
    var menu = document.getElementById('ms-menu');
    if (menu) menu.classList.toggle('open');
  }

  function closeMenu() {
    var menu = document.getElementById('ms-menu');
    if (menu) menu.classList.remove('open');
  }

  document.addEventListener('click', function (e) {
    var wrap = document.getElementById('ms-wrap');
    if (wrap && !wrap.contains(e.target)) closeMenu();
  });

  window.setMarket      = setMarket;
  window.toggleMsMenu   = toggleMenu;
}());
