import './style.css';
import {
  sendToGoogleAnalytics,
  sendToCustomAnalytics,
  sendToEmail,
} from './analytics.js';

import Observable from './observer.js'

const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');

pinkBtn.addEventListener('click', () => {
  const data = '🎀 Click on pink button! 🎀';
  Observable.notify(data);
});

blueBtn.addEventListener('click', () => {
  const data = '🦋 Click on blue button! 🦋';
  Observable.notify(data);
});
