// src/polyfills.ts

// Ensure this file is treated as a module
export {};

if (typeof window.structuredClone === 'undefined') {
  window.structuredClone = (obj: any): any => JSON.parse(JSON.stringify(obj));
}