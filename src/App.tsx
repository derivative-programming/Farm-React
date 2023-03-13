import React, { FC, ReactElement, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AuthContext } from './context/authContext';
import AppRoute from './routes/appRoutes';
import AuthRoute from './routes/authRoutes';

const App: FC = (): ReactElement => {

  const authValue = useContext(AuthContext)

  console.log("AUTH CONTEXT:::", authValue)

  return (
    <div className="text-center bg-f5f2ea vh-100" data-testid="app">
      <BrowserRouter>
        {
          authValue && authValue.token ?
            <AppRoute /> :
            <AuthRoute />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
