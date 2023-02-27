let siteMenu = document.querySelector('.site-menu');
let headerToggler = document.querySelector('.page-header__toggler');

siteMenu.classList.remove('site-menu--nojs')

headerToggler.onclick = function () {
  siteMenu.classList.toggle('site-menu--open');
  headerToggler.classList.toggle('page-header__toggler--open');
  headerToggler.classList.toggle('page-header__toggler--closed');
};
