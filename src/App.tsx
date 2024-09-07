import React, { FC, ReactElement, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AuthContext } from "./context/authContext";
import AppRoute from "./routes/appRoutes";
import AuthRoute from "./routes/authRoutes";
import GDPRBanner from "./components/gdpr/Banner";
import CheckVersion from "./hooks/CheckVersion";
import { ErrorMonitor, useGlobalErrorMonitor } from './hooks/ErrorMonitor'; 

const App: FC = (): ReactElement => {
  const authValue = useContext(AuthContext);

  const handleNewVersionDetected = () => {
    window.location.reload(); // Force a full page reload to fetch the new version
  };

  // Call the hook to start monitoring for global errors
  useGlobalErrorMonitor();
  

  return (
    <ErrorMonitor>
      <div className=" App " data-testid="app">
        <BrowserRouter>
          {authValue && authValue.token ? <AppRoute /> : <AuthRoute />}
        </BrowserRouter>
        <CheckVersion onNewVersionDetected={handleNewVersionDetected} checkInterval={600000} />
        <GDPRBanner />
      </div>
    </ErrorMonitor>
  );
};

export default App;
