import {onLCP, onINP, onCLS} from 'web-vitals';

const reportWebVitals = (): void => {
  
  onCLS(console.log);
  onINP(console.log);
  onLCP(console.log);
};

export default reportWebVitals;
