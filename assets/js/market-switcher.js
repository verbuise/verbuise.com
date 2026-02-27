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
      annotation: '↑ Same product. One codebase. Every market.',
      'pain-h2': 'The real competitor<br>isn\'t another tool.<br>It\'s <span class="accent-text">doing nothing.</span>',
      'pain-sub': 'Most products skip global markets—not because builders don\'t care, but because localization has always meant building a second product. We remove that friction entirely.',
      'approach-h2': 'A runtime,<br>not a workflow.',
      'steps-h2': 'Three steps to everywhere.',
      'cta-quote': '"My app just<br>works in Tokyo."',
      'cta-attr': 'That\'s the goal. Let\'s make it happen.'
    },
    japan: {
      flag: '🇯🇵',
      name: '日本',
      label: 'グローバライゼーション ランタイム',
      headline: 'あなたのプロダクトは、<br>どこでも自然に使えるべきです。',
      sub: 'Verbuiseは、言語・通貨・画像・トーンを各市場に合わせて自動的に調整する適応レイヤーです。ワークフロー不要。再構築不要。ただ、動作するだけです。',
      cta: '無料で始める',
      annotation: '↑ 同じプロダクト。一つのコードベース。あらゆる市場。',
      'pain-h2': '本当の競合は<br>別のツールではありません。<br><span class="accent-text">何もしないこと</span>です。',
      'pain-sub': 'ほとんどのプロダクトはグローバル市場を後回しにします。開発者が気にしないからではなく、ローカライゼーションがいつも「2つ目のプロダクトを作ること」を意味していたから。私たちはその摩擦を根本から取り除きます。',
      'approach-h2': 'ワークフローではなく、<br>ランタイムです。',
      'steps-h2': '3ステップで、世界中へ。',
      'cta-quote': '「私のアプリは、<br>東京でもちゃんと動く。」',
      'cta-attr': 'それが目標です。一緒に実現しましょう。'
    },
    germany: {
      flag: '🇩🇪',
      name: 'Deutschland',
      label: 'Globalisierungs-Runtime',
      headline: 'Ihr Produkt sollte sich<br>überall wie zuhause anfühlen.',
      sub: 'Verbuise ist die adaptive Schicht, die Sprache, Währung, Bilder und Ton für jeden Markt automatisch anpasst. Kein Workflow. Kein Neuaufbau. Einfach Verhalten.',
      cta: 'Kostenlos starten',
      annotation: '↑ Dasselbe Produkt. Eine Codebase. Jeder Markt.',
      'pain-h2': 'Der echte Konkurrent<br>ist kein anderes Tool.<br>Es ist das <span class="accent-text">Nichtstun.</span>',
      'pain-sub': 'Die meisten Produkte überspringen globale Märkte – nicht weil Entwicklern das egal ist, sondern weil Lokalisierung immer bedeutete, ein zweites Produkt zu bauen. Wir beseitigen diese Hürde vollständig.',
      'approach-h2': 'Eine Runtime,<br>kein Workflow.',
      'steps-h2': 'Drei Schritte bis überall.',
      'cta-quote': '"Meine App funktioniert<br>einfach in Tokio."',
      'cta-attr': 'Das ist das Ziel. Lass es uns verwirklichen.'
    },
    mexico: {
      flag: '🇲🇽',
      name: 'México',
      label: 'Motor de Globalización',
      headline: 'Tu producto debería sentirse<br>nativo en todas partes.',
      sub: 'Verbuise es la capa adaptativa que ajusta automáticamente el idioma, la moneda, las imágenes y el tono para cada mercado. Sin flujos de trabajo. Sin reconstrucción. Solo comportamiento.',
      cta: 'Comenzar gratis',
      annotation: '↑ El mismo producto. Un código. Todos los mercados.',
      'pain-h2': 'El verdadero competidor<br>no es otra herramienta.<br>Es <span class="accent-text">no hacer nada.</span>',
      'pain-sub': 'La mayoría de los productos ignoran los mercados globales—no porque a los desarrolladores no les importe, sino porque la localización siempre significó construir un segundo producto. Nosotros eliminamos esa fricción por completo.',
      'approach-h2': 'Un runtime,<br>no un flujo de trabajo.',
      'steps-h2': 'Tres pasos para llegar a todas partes.',
      'cta-quote': '"Mi app simplemente<br>funciona en Tokio."',
      'cta-attr': 'Ese es el objetivo. Hagámoslo realidad.'
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

    // Update active state on ms-options
    document.querySelectorAll('.ms-option').forEach(function (opt) {
      opt.classList.remove('active');
      if (opt.getAttribute('data-market') === key) opt.classList.add('active');
    });

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
