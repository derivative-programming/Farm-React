import React, { FC, ReactElement, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AuthContext } from "./context/authContext";
import AppRoute from "./routes/appRoutes";
import AuthRoute from "./routes/authRoutes";
import GDPRBanner from "./components/gdpr/Banner";
import CheckVersion from "./hooks/CheckVersion";

const App: FC = (): ReactElement => {
  const authValue = useContext(AuthContext);

  const handleNewVersionDetected = () => {
    window.location.reload(); // Force a full page reload to fetch the new version
  };

  return (
    <div className=" App " data-testid="app">
      <BrowserRouter>
        {authValue && authValue.token ? <AppRoute /> : <AuthRoute />}
      </BrowserRouter>
      <CheckVersion onNewVersionDetected={handleNewVersionDetected} checkInterval={10000} />
      <GDPRBanner />
    </div>
  );
};

export default App;
