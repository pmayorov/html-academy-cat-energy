let siteMenu = document.querySelector('.site-menu');
let headerToggler = document.querySelector('.page-header__toggler');

siteMenu.classList.toggle('site-menu--closed');

headerToggler.onclick = function () {
  siteMenu.classList.toggle('site-menu--closed');
  headerToggler.classList.toggle('page-header__toggler--open');
  headerToggler.classList.toggle('page-header__toggler--closed');
};
