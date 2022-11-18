import home from '../admin/scripts/home.js';
import editor from './scripts/editor.js';

const path = location.pathname;

if (path === '/admin/' || path === '/admin/index.html') {
  home();
}

if (path === '/admin/editor.html') {
  editor();
}
