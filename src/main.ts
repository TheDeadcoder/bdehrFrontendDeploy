import './app.css';
import App from './App.svelte';
import Router from 'svelte-spa-router';
import { routes } from './routes';

const app = new App({
  target: document.getElementById('app'),
});
new Router({
  target: document.querySelector('#router'),
  routes,
});

export default app
