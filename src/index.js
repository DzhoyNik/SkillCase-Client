import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './stores/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)
const contextList = {
    user: new UserStore()
}

root.render(
    <Context.Provider value={contextList}>
      <App />
    </Context.Provider>
);
