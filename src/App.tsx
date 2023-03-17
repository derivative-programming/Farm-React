import React, { FC, ReactElement, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AuthContext } from './context/authContext';
import AppRoute from './routes/appRoutes';
import AuthRoute from './routes/authRoutes';
import './App.scss';

const App: FC = (): ReactElement => {

  const authValue = useContext(AuthContext)

  console.log("AUTH CONTEXT:::", authValue)

  return (
    <div className=" App " data-testid="app">
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
