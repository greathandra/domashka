(function () {
  'use strict';

  // Подсветка активного пункта навигации
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('site-nav__link--active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Переключение вкладок с примерами кода
  var tabButtons = document.querySelectorAll('.code-tabs [role="tab"]');
  var tabPanels = document.querySelectorAll('.code-tabs [role="tabpanel"]');

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = button.getAttribute('data-tab');

      tabButtons.forEach(function (btn) {
        btn.classList.remove('c-tab-heading--active');
        btn.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach(function (panel) {
        panel.hidden = panel.getAttribute('data-panel') !== target;
      });

      button.classList.add('c-tab-heading--active');
      button.setAttribute('aria-selected', 'true');
    });
  });

  // Мобильное меню
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.site-nav__toggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('site-nav--open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('.site-nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('site-nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
