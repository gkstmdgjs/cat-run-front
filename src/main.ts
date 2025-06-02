import './assets/scss/main.scss';
import { Engine } from './game/engine';

window.addEventListener('DOMContentLoaded', () => {
  new Engine('cat-run');
});
