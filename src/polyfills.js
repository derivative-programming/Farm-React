// src/polyfills.js
if (typeof window.structuredClone === 'undefined') {
    window.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
  }
  