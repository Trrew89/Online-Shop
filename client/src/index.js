import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore';
import { REACT_APP_API_URL } from './env';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(REACT_APP_API_URL)
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
      }}>
            <App />
      </Context.Provider>
    
);
