import React, { Component, useEffect } from 'react';
import useAnalyticsDB from './useAnalyticsDB'; // Import the hook

// Error Boundary for React component-level errors
class ErrorMonitor extends Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const { logError } = useAnalyticsDB(); // Use the hook to get logError

    // Log the error with your analytics event logging
    logError(`ReactError: ${error.message}`);
    console.error("React error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Wrapper hook to capture global JavaScript errors
const useGlobalErrorMonitor = () => {
  const { logError } = useAnalyticsDB(); // Use the hook to get logError

  useEffect(() => {
    const handleGlobalError: OnErrorEventHandler = (
        eventOrMessage: string | Event,
        source?: string,
        lineno?: number,
        colno?: number,
        error?: Error
      ) => {
        let errorMessage = '';
    
        if (typeof eventOrMessage === 'string') {
          errorMessage = `GlobalError: ${eventOrMessage} at ${source}:${lineno}:${colno}`;
        } else {
          errorMessage = `GlobalError: ${eventOrMessage.type}`;
        }
    
        logError(errorMessage); // Log the global error
        console.error(errorMessage, error);
      };
    
      window.onerror = handleGlobalError;
    
      return () => {
        window.onerror = null;
      };
  }, [logError]); // Add logError as a dependency
};

export { ErrorMonitor, useGlobalErrorMonitor };